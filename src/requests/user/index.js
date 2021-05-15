import api from '../../config/api';

const login = async ({ email, password }) =>
  api.post('/authenticate', {
    email,
    password,
  });

const register = async ({ email, password }) =>
  api.post('/register', {
    email,
    password,
  });

export { login, register };
