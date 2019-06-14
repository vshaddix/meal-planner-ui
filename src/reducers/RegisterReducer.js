import * as types from '../actions';

export default function(state = [], action) {
  let response = action.payload;

  switch(action.type) {
    case types.REGISTER_USER:
      return { ...state, response };
    default:
      return state;
  }
}
