import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import unitOfMeasure from './unitOfMeasureReducer';
import ingredients from './ingredientReducer';
import categories from './CategoryReducer';

const rootReducer = combineReducers({
  register, login, unitOfMeasure, ingredients, categories
});

export default rootReducer;
