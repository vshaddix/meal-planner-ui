import { combineReducers } from 'redux';
import register from './RegisterReducer';
import login from './LoginReducer';
import unitOfMeasure from './UnitOfMeasureReducer';
import ingredients from './IngredientReducer';
import categories from './CategoryReducer';
import NewRecipeReducer from './RecipeReducers/NewRecipeReducer';
import RecipeReducer from './RecipeReducers/RecipeReducer';

const rootReducer = combineReducers({
  register, login, unitOfMeasure, ingredients, categories, NewRecipeReducer, RecipeReducer
});

export default rootReducer;
