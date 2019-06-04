import * as types from '../actions';

const initialState = {
  recipes: [],
  newRecipeData: {
    name: "",
    steps: "",
    photo: "",
    ingredients: [
      // example ingredient/uom/value combination
      // {
      //   "ingredient": {
      //     "name": "string",
      //     "public_id": "string"
      //   },
      //   "unit_of_measure": {
      //     "name": "string",
      //     "public_id": "string"
      //   },
      //   "value": 0
      // }
    ],
    categories: [
      // example category
      // {
      //   "name": "string",
      //   "public_id": "string"
      // }
    ]
  },
};

export default function(state = initialState, action) {
  let response = action.payload;

  switch(action.type) {
    case types.ADD_CATEGORY_TO_NEW_RECIPE:
      const newCategory = {
        name: response.name,
        public_id: response.public_id,
      };
      const newRecipeData = { ...state.newRecipeData };
      newRecipeData.categories.push(newCategory);
      return { ...state, newRecipeData: newRecipeData };
    default:
      return state;
  }
}
