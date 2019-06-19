import * as types from './index';
import { registerUserService, loginUserService } from '../services/AuthenticationService';

export const registerUserAction = user => {
  return async function (dispatch) {
    const response = await registerUserService(user);

    dispatch({
      type: types.REGISTER_USER,
      payload: response
    });
  }
};

export const loginUserAction = user => {
  return async function (dispatch) {
    const response = await loginUserService(user);

    dispatch({
      type: types.LOGIN_USER,
      payload: response
    });
  }
};
