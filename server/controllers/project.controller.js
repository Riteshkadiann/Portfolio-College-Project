import Project from '../models/project.model.js';
import { list as _list, create as _create, read as _read, update as _update, remove as _remove, removeAll as _removeAll } from './crud.js';
export const list = _list(Project);
export const create = _create(Project);
export const read = _read(Project);
export const update = _update(Project);
export const remove = _remove(Project);
export const removeAll = _removeAll(Project);
