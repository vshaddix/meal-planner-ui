import * as types from './index';
import IngredientService from '../services/ingredientService';

export const createIngredient = ingredient => {
  return async function (dispatch) {
    const service = new IngredientService();
    const response = await service.createNewIngredient(ingredient);
    const requestFailed = response.status === 'fail';
    if (requestFailed) {
      dispatch({
        type: types.CREATE_INGREDIENT_ERROR,
        payload: response
      });
    } else {
      dispatch({
        type: types.CREATE_INGREDIENT_SUCCESS,
        payload: response
      });
      dispatch({
        type: types.CREATE_INGREDIENT,
        payload: response
      });
    }
  }
};

export const fetchIngredients = () => {
  return async function (dispatch) {
    const service = new IngredientService();
    const response = await service.fetchAllIngredients();

    dispatch({
      type: types.FETCH_ALL_INGREDIENTS,
      payload: response.data
    });
  }
};
