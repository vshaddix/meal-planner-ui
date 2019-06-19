import * as actions from '../../src/actions/RecipeActions/RecipeActions'

describe('Recipe actions', () => {
  it('should create an action with correct type for adding a category to recipe', () => {
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

  it('should create an action with correct type for removing a category from recipe', () => {
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
});
