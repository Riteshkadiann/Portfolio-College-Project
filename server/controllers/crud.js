export const list = (Model) => async (req, res) => {
  const items = await Model.find();
  res.json(items);
};
export const create = (Model) => async (req, res) => {
  const item = await Model.create(req.body);
  res.status(201).json(item);
};
export const read = (Model) => async (req, res) => {
  const item = await Model.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};
export const update = (Model) => async (req, res) => {
  const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};
export const remove = (Model) => async (req, res) => {
  await Model.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
export const removeAll = (Model) => async (req, res) => {
  await Model.deleteMany({});
  res.status(204).end();
};
