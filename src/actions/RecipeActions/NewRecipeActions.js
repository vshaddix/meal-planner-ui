import * as types from './../index';
import RecipeService from '../../services/RecipeService';

export const addCategoryToNewRecipe = category => ({
  type: types.ADD_CATEGORY_TO_NEW_RECIPE,
  payload: category
});

export const removeCategoryFromNewRecipe = category => ({
  type: types.REMOVE_CATEGORY_FROM_NEW_RECIPE,
  payload: category
});

export const addIngredientToNewRecipe = (ingredient, unitOfMeasure, quantity) => ({
  type: types.ADD_INGREDIENT_TO_NEW_RECIPE,
  payload: { ingredient, unitOfMeasure, quantity }
});

export const removeIngredientFromNewRecipe = ingredient => ({
  type : types.REMOVE_INGREDIENT_FROM_NEW_RECIPE,
  payload: ingredient
});

export const addTitleToNewRecipe = title => ({
  type: types.ADD_TITLE_TO_NEW_RECIPE,
  payload: title
});

export const addStepsToNewRecipe = steps => ({
  type: types.ADD_STEPS_TO_NEW_RECIPE,
  payload: steps
});

export const createRecipe = recipe => {
  return async function (dispatch) {
    const service = new RecipeService();
    const response = await service.createNew(recipe);
    const requestFailed = response.status === 'fail';
    if (requestFailed) {
      dispatch({
        type: types.CREATE_RECIPE_ERROR,
        payload: response
      });
    } else {
      dispatch({
        type: types.CREATE_RECIPE_SUCCESS,
        payload: response
      });
      dispatch({
        type: types.CREATE_RECIPE,
        payload: response
      });
    }
  }
};
