import { combineReducers } from 'redux';
import users from './users-reducer';
import albums from './albums-reducer';
import photos from './photos-reducer';

export default combineReducers({ users, albums, photos });