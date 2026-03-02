import User from '../models/user.model.js';
import { list as _list, create as _create, read as _read, update as _update, remove as _remove, removeAll as _removeAll } from './crud.js';
export const list = _list(User);
export const create = _create(User);
export const read = _read(User);
export const update = _update(User);
export const remove = _remove(User);
export const removeAll = _removeAll(User);
