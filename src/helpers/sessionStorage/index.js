const getToken = () => sessionStorage.getItem('access_token');

const setTokenToSessionStorage = (token) => {
  sessionStorage.setItem('access_token', token);
};

const removeTokenFromSessionStorage = () => {
  sessionStorage.removeItem('access_token');
};

const setUserToSessionStorage = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

const removeUserFromSessionStorage = () => {
  sessionStorage.removeItem('user');
};

export {
  setTokenToSessionStorage,
  removeTokenFromSessionStorage,
  setUserToSessionStorage,
  removeUserFromSessionStorage,
  getToken,
};
