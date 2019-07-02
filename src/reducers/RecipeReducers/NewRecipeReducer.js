import * as types from '../../actions/index';

const initialState = {
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
};

export default function(state = initialState, action) {
  let response = action.payload;

  switch(action.type) {
    case types.ADD_CATEGORY_TO_NEW_RECIPE:
      const newCategory = {
        name: response.name,
        public_id: response.public_id,
      };
      const categories = [ ...state.categories, newCategory ];
      return { ...state, categories };

    case types.REMOVE_CATEGORY_FROM_NEW_RECIPE:
      const remainingCategories = state.categories.filter(addedCat => addedCat.public_id !== response.public_id);
      return { ...state, categories: remainingCategories };

    case types.ADD_INGREDIENT_TO_NEW_RECIPE:
      const newIngredient = {
        ingredient: response.ingredient,
        unit_of_measure: response.unitOfMeasure,
        value: response.quantity
      };
      const newIngredients = state.ingredients.filter(ingredientObject => ingredientObject.ingredient.public_id !== response.ingredient.public_id);
      const ingredients = [ ...newIngredients, newIngredient ];
      return { ...state, ingredients };

    default:
      return state;
  }
}
