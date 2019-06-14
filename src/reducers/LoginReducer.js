import * as types from '../actions';

export default function(state = [], action) {
  const response = action.payload;

  switch(action.type) {
    case types.LOGIN_USER:
      return { ...state, response };
    default:
      return state;
  }
};
