import api from '../../config/api';

const login = async ({ email, password }) =>
  api.post('/authenticate', {
    email,
    password,
  });

export { login };
