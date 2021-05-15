import api from '../../config/api';

import { getToken } from '../../helpers';

const fetchPokemons = async ({ name }) => {
  const token = getToken();

  return api.get(`/pokemons?${name && `name=${name}`}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { fetchPokemons };
