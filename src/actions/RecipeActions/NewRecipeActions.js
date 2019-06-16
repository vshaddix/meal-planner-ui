import * as types from './../index';

export const addCategoryToNewRecipe = category => ({
  type: types.ADD_CATEGORY_TO_NEW_RECIPE,
  payload: category
});

export const removeCategoryFromNewRecipe = category => ({
  type: types.REMOVE_CATEGORY_FROM_NEW_RECIPE,
  payload: category
});

export const addIngredientToNewRecipe = ingredient => ({
  type: types.ADD_INGREDIENT_TO_NEW_RECIPE,
  payload: ingredient
});

export const removeIngredientFromNewRecipe = ingredient => ({
  type : types.REMOVE_INGREDIENT_FROM_NEW_RECIPE,
  payload: ingredient
});
