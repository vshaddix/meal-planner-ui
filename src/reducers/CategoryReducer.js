import * as types from '../actions';

const initialState = {
  categories: [],
  responseMessage: '',
  successfulRequest: null,
};

export default function(state = initialState, action) {
  let response = action.payload;

  switch(action.type) {
    case types.FETCH_ALL_CATEGORIES:
      return { ...state, categories: response };
    case types.CREATE_CATEGORY:
      return { ...state,
        categories: [
          ...state.categories,
          response.category
        ]
      };
    case types.CREATE_CATEGORY_ERROR:
      return { ...state, responseMessage: response.message, successfulRequest: false};
    case types.CREATE_CATEGORY_SUCCESS:
      return { ...state, responseMessage: response.message, successfulRequest: true};
    default:
      return state;
  }
}
