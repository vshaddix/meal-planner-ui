import { getAuthenticationToken, isLoggedIn } from '../utils/authUtil';

export default class UnitOfMeasureService {
  constructor(apiBaseUrl) {
    this.apiUrl = (apiBaseUrl || 'http://localhost:5000') + '/uom/';
    this.fetch = this.fetch.bind(this);
    this.createNewUom = this.createNewUom.bind(this);
    this.fetchAllUnitsOfMeasure = this.fetchAllUnitsOfMeasure.bind(this);
  }

  createNewUom(unitOfMeasure) {
    return this.fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(unitOfMeasure)
    });
  }

  fetchAllUnitsOfMeasure() {
    return this.fetch(this.apiUrl, {
      method: 'GET'
    });
  }

  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (isLoggedIn()) {
      headers['Authorization'] = getAuthenticationToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(response => response.json())
  }
}