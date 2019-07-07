import BaseService from './BaseService';

export default class CategoryService extends BaseService {
  constructor() {
    super(...arguments);
    this.apiUri = 'recipe/';
  }
}
