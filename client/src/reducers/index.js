// dependencies
import { combineReducers } from 'redux';
// local files
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
