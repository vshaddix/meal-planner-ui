import { getAuthenticationToken, isLoggedIn } from '../utils/AuthUtil';

export default class IngredientService {
  constructor(apiBaseUrl) {
    this.apiUrl = (apiBaseUrl || 'http://localhost:5000') + '/ingredient/';
    this.fetch = this.fetch.bind(this);
    this.createNewIngredient = this.createNewIngredient.bind(this);
    this.fetchAllIngredients = this.fetchAllIngredients.bind(this);
  }

  createNewIngredient(ingredient) {
    return this.fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(ingredient)
    });
  }

  fetchAllIngredients() {
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