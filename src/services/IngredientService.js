import BaseService from "services/BaseService";

export default class IngredientService extends BaseService{
  constructor() {
    super(...arguments);
    this.apiUri = 'ingredient/';
  }
}
