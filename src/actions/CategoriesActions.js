import * as types from './index';
import CategoryService from '../services/CategoryService';

export const createCategory = category => {
  return async function (dispatch) {
    const service = new CategoryService();
    const response = await service.createNew(category);
    const requestFailed = response.status === 'fail';
    if (requestFailed) {
      dispatch({
        type: types.CREATE_CATEGORY_ERROR,
        payload: response
      });
    } else {
      dispatch({
        type: types.CREATE_CATEGORY_SUCCESS,
        payload: response
      });
      dispatch({
        type: types.CREATE_CATEGORY,
        payload: response
      });
    }
  }
};

export const fetchCategories = () => {
  return async function (dispatch) {
    const service = new CategoryService();
    const response = await service.fetchAll();

    dispatch({
      type: types.FETCH_ALL_CATEGORIES,
      payload: response.data
    });
  }
};
