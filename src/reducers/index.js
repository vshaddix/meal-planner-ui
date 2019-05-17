import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import unitOfMeasure from './unitOfMeasureReducer';
import ingredients from './ingredientReducer';

const rootReducer = combineReducers({
  register, login, unitOfMeasure, ingredients
});

export default rootReducer;
