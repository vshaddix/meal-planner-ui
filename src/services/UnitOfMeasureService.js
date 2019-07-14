import BaseService from "./BaseService";

export default class UnitOfMeasureService extends BaseService {
  constructor(apiBaseUrl) {
    super(...arguments);
    this.apiUri = 'uom/';
  }
}
