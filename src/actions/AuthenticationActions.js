import * as types from './index';
import AuthenticationService from 'services/AuthenticationService';

export const registerUserAction = user => {
  return async function (dispatch) {
    const service = new AuthenticationService();
    const response = await service.registerUser(user);

    dispatch({
      type: types.REGISTER_USER,
      payload: response
    });
  }
};

export const loginUserAction = user => {
  return async function (dispatch) {
    const service = new AuthenticationService();
    const response = await service.loginUser(user);

    dispatch({
      type: types.LOGIN_USER,
      payload: response
    });
  }
};
