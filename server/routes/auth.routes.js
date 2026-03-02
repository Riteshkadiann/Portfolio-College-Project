import { Router } from 'express';
import authCtrl from '../controllers/auth.controller.js';
const r = Router();
r.post('/auth/signin', authCtrl.signin);
r.get('/auth/signout', authCtrl.signout);
export default r;
