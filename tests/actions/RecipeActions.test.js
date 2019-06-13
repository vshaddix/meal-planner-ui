import * as actions from '../../src/actions/RecipeActions'

describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const category = {
      id: 1,
      name: 'Breakfast'
    };
    const expectedAction = {
      type: 'ADD_CATEGORY_TO_NEW_RECIPE',
      payload: category
    };

    expect(actions.addCategoryToNewRecipe(category)).toEqual(expectedAction)
  })
});
