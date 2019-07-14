import * as types from './index';
import UnitOfMeasureService from '../services/UnitOfMeasureService';

export const createUnitOfMeasure = unitOfMeasure => {
  return async function (dispatch) {
    const service = new UnitOfMeasureService();
    const response = await service.createNew(unitOfMeasure);
    const requestFailed = response.status === 'fail';
    if (requestFailed) {
      dispatch({
        type: types.CREATE_UNIT_OF_MEASURE_ERROR,
        payload: response
      });
    } else {
      dispatch({
        type: types.CREATE_UNIT_OF_MEASURE_SUCCESS,
        payload: response
      });
      dispatch({
        type: types.CREATE_UNIT_OF_MEASURE,
        payload: response
      });
    }
  }
};

export const fetchUnitsOfMeasure = () => {
  return async function (dispatch) {
    const service = new UnitOfMeasureService();
    const response = await service.fetchAll();

    dispatch({
      type: types.FETCH_ALL_UNITS_OF_MEASURE,
      payload: response.data
    });
  }
};
