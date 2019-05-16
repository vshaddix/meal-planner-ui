import * as types from './index';
import UnitOfMeasureService from '../services/unitOfMeasureService';

export const createUnitOfMeasure = unitOfMeasure => {
  return async function (dispatch) {
    const service = new UnitOfMeasureService();
    const response = await service.createNewUom(unitOfMeasure);
    const requestFailed = response.status === 'fail';
    if (requestFailed) {
      dispatch({
        type: types.CREATE_UNIT_OF_MEASURE_ERROR,
        payload: response
      });
    } else {
      debugger;
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
