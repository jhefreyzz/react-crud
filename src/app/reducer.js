import phoneBookReducer from './phoneBook/phoneBookReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer
});

export default rootReducer;
