import CategoryService from '../../src/services/CategoryService';
import * as actions from '../../src/actions/CategoriesActions'
import * as types from '../../src/actions'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../src/services/CategoryService');

describe('Categories actions', () => {

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    CategoryService.mockClear();
  });

  it('should call the create category method and dispatch correct actions when the service returns status success', async () => {
    const store = mockStore({});
    const responseMock = {
      status: 'success',
      data: {}
    };

    const category = {
      id: 1,
      name: 'Breakfast'
    };

    CategoryService.mockImplementation(() => {
      return {
        createNew: () => {
          return new Promise(resolve => resolve(responseMock))
        }
      };
    });

    const expectedActions = [
      {
        type: types.CREATE_CATEGORY_SUCCESS,
        payload: responseMock,
      },
      {
        type: types.CREATE_CATEGORY,
        payload: responseMock,
      }
    ];

    await store.dispatch(actions.createCategory(category));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call the create category method and dispatch correct actions when the service returns status fail', async () => {
    const store = mockStore({});
    const responseMock = {
      status: 'fail',
      data: {}
    };

    const category = {
      id: 1,
      name: 'Breakfast'
    };

    CategoryService.mockImplementation(() => {
      return {
        createNew: () => {
          return new Promise(resolve => resolve(responseMock))
        }
      };
    });

    const expectedActions = [
      {
        type: types.CREATE_CATEGORY_ERROR,
        payload: responseMock,
      }
    ];

    await store.dispatch(actions.createCategory(category));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
