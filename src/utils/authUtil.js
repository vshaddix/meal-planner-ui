export function isLoggedIn() {
  return Boolean(localStorage.getItem('token'));
}

export function getAuthenticationToken() {
  return localStorage.getItem('id_token')
}
