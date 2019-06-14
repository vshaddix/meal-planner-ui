import { getAuthenticationToken, isLoggedIn } from '../utils/AuthUtil';
import propTypes from 'prop-types';

class BaseService {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = (apiBaseUrl || 'http://localhost:5000');
    this.apiUri = '';
    this.fetch = this.fetch.bind(this);
    this.createNew = this.createNew.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
  }

  get apiUrl() {
    return `${this.apiBaseUrl}/${this.apiUri}`;
  }

  createNew(entityData) {
    return this.fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(entityData)
    });
  }

  fetchAll() {
    return this.fetch(this.apiUrl, {
      method: 'GET'
    });
  }

  //TODO move this function to a new folder called API with axios integrated.
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

BaseService.propTypes = {
  apiUri: propTypes.string.isRequired
};

export default BaseService;
