import * as actions from '../../src/actions/RecipeActions/NewRecipeActions'

describe('New recipe actions', () => {
  it('should create an action with correct type for adding a category to a new recipe', () => {
    const category = {
      id: 1,
      name: 'Breakfast'
    };
    const expectedAction = {
      type: 'ADD_CATEGORY_TO_NEW_RECIPE',
      payload: category
    };

    expect(actions.addCategoryToNewRecipe(category)).toEqual(expectedAction)
  });

  it('should create an action with correct type for removing a category from a new recipe', () => {
    const category = {
      id: 1,
      name: 'Breakfast'
    };
    const expectedAction = {
      type: 'REMOVE_CATEGORY_FROM_NEW_RECIPE',
      payload: category
    };

    expect(actions.removeCategoryFromNewRecipe(category)).toEqual(expectedAction)
  });

  it('should create an action with correct type for adding an ingredient to a new recipe', () => {
    const ingredient = {
      id: 1,
      name: 'Tomatoes'
    };
    const expectedAction = {
      type: 'ADD_INGREDIENT_TO_NEW_RECIPE',
      payload: ingredient
    };

    expect(actions.addIngredientToNewRecipe(ingredient)).toEqual(expectedAction)
  });

  it('should create an action with correct type for removing an ingredient from a new recipe', () => {
    const ingredient = {
      id: 1,
      name: 'Tomatoes'
    };
    const expectedAction = {
      type: 'REMOVE_INGREDIENT_FROM_NEW_RECIPE',
      payload: ingredient
    };

    expect(actions.removeIngredientFromNewRecipe(ingredient)).toEqual(expectedAction)
  });
});
