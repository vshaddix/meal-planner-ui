export default function isLoggedIn() {
  return Boolean(localStorage.getItem('token'));
}
