import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import unitOfMeasure from './unitOfMeasureReducer';

const rootReducer = combineReducers({
  register, login, unitOfMeasure
});

export default rootReducer;
