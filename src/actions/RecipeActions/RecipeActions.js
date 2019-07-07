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

export const fetchRecipes = recipe => {
  return async function (dispatch) {
    const service = new RecipeService();
    const response = await service.fetchAll();
    dispatch({
      type: types.LOAD_ALL_RECIPES,
      payload: response
    });
  }
};

