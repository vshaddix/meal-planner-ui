import config from 'config/environment';

class AuthenticationService {
  constructor() {
    this.fetch = this.fetch.bind(this);
  }

  apiBaseUrl = config.apiBaseUrl;

  registerUser(data) {
    return this.fetch(`${this.apiBaseUrl}user/`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  loginUser(data) {
    return this.fetch(`${this.apiBaseUrl}auth/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch(url, {
      headers,
      ...options
    })
      .then(response => response.json())
  }
}

export default AuthenticationService;
