import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://web2-back.herokuapp.com'
    : 'http://localhost:3333';

const api = axios.create({
  baseURL: BASE_URL,
});

export { BASE_URL };

export default api;
