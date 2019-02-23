import { combineReducers } from 'redux';
import app from './app';
import todos from './todos';

export default combineReducers({
  app,
  todos,
});
