import Qualification from '../models/qualification.model.js';
import { list as _list, create as _create, read as _read, update as _update, remove as _remove, removeAll as _removeAll } from './crud.js';
export const list = _list(Qualification);
export const create = _create(Qualification);
export const read = _read(Qualification);
export const update = _update(Qualification);
export const remove = _remove(Qualification);
export const removeAll = _removeAll(Qualification);
