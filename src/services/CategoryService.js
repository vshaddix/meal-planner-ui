import BaseService from 'services/BaseService';

export default class CategoryService extends BaseService {
  constructor() {
    super(...arguments);
    this.apiUri = 'category/';
  }
}
