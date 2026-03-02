import Contact from '../models/contact.model.js';
import { list as _list, create as _create, read as _read, update as _update, remove as _remove, removeAll as _removeAll } from './crud.js';
export const list = _list(Contact);
export const create = _create(Contact);
export const read = _read(Contact);
export const update = _update(Contact);
export const remove = _remove(Contact);
export const removeAll = _removeAll(Contact);
