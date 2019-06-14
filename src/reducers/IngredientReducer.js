import * as types from '../actions';

const initialState = {
  ingredients: [],
  responseMessage: '',
  successfulRequest: null,
};

export default function(state = initialState, action) {
  let response = action.payload;

  switch(action.type) {
    case types.FETCH_ALL_INGREDIENTS:
      return { ...state, ingredients: response };
    case types.CREATE_INGREDIENT:
      return { ...state,
        ingredients: [
          ...state.ingredients,
          response.ingredient
        ]
      };
    case types.CREATE_INGREDIENT_ERROR:
      return { ...state, responseMessage: response.message, successfulRequest: false};
    case types.CREATE_INGREDIENT_SUCCESS:
      return { ...state, responseMessage: response.message, successfulRequest: true};
    default:
      return state;
  }
}
