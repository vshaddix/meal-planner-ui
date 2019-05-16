import * as types from '../actions';

const initialState = {
  uoms: [],
  responseMessage: '',
  successfulRequest: null,
};

export default function(state = initialState, action) {
  let response = action.payload;

  switch(action.type) {
    case types.CREATE_UNIT_OF_MEASURE:
      return { ...state,
        uoms: [
          ...state.uoms,
          response.unit_of_measure
        ]
      };
    case types.CREATE_UNIT_OF_MEASURE_ERROR:
      return { ...state, responseMessage: response.message, successfulRequest: false};
    case types.CREATE_UNIT_OF_MEASURE_SUCCESS:
      return { ...state, responseMessage: response.message, successfulRequest: true};
    default:
      return state;
  }
}
