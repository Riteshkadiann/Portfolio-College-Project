import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import User from '../models/user.model.js';

const requireAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id);

    if (!user || user.role !== 'Admin') {
      return res.status(403).json({ error: 'Requires Admin Privileges to perform this operation.' });
    }
    next();
  } catch (err) {
    return res.status(403).json({ error: 'User lookup failed for authorization check.' });
  }
};

const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }); // [cite: 339]
  if (!user) return res.status(401).json({ error: 'User not found' }); // [cite: 339]
  if (!user.authenticate(req.body.password)) {
    return res.status(401).json({ error: "Email and password don't match." }); // [cite: 341]
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'devsecret'); // [cite: 343]
  res.cookie('t', token, { httpOnly: true }); // [cite: 344]

  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
};

const signout = (req, res) => {
  res.clearCookie('t'); // [cite: 427]
  res.status(200).json({ message: 'signed out' }); // [cite: 428-430]
};

const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET || 'devsecret',
  algorithms: ['HS256'],
  requestProperty: 'auth',
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && String(req.profile._id) === String(req.auth._id);
  if (!authorized) return res.status(403).json({ error: 'User is not authorized' }); // [cite: 593-595]
  next();
};

export default { signin, signout, requireSignin, hasAuthorization, requireAdmin };