import { combineReducers } from 'redux';
import register from './RegisterReducer';
import login from './LoginReducer';
import unitOfMeasure from './UnitOfMeasureReducer';
import ingredients from './IngredientReducer';
import categories from './CategoryReducer';
import RecipeReducer from './RecipeReducer';

const rootReducer = combineReducers({
  register, login, unitOfMeasure, ingredients, categories, RecipeReducer
});

export default rootReducer;
