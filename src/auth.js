export const isLoggedIn = () => {
  const loggedInUser = window.localStorage.getItem('LAST_MILE_USER');
  return !!loggedInUser;
}
export const setLoggedInUser = user => {
  window.localStorage.setItem('LAST_MILE_USER', JSON.stringify(user));
}
export const getUserDetails = () => {
  const loggedInUser = window.localStorage.getItem('LAST_MILE_USER');
  return loggedInUser ? JSON.parse(loggedInUser) : {};
}
export const logout = user => {
  window.localStorage.removeItem('LAST_MILE_USER');
  window.location.reload(); // to take back to login page fix later with redux
}
