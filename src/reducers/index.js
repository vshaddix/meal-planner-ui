import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import unitOfMeasure from './unitOfMeasureReducer';
import ingredients from './ingredientReducer';
import categories from './CategoryReducer';
import RecipeReducer from './RecipeReducer';

const rootReducer = combineReducers({
  register, login, unitOfMeasure, ingredients, categories, RecipeReducer
});

export default rootReducer;
