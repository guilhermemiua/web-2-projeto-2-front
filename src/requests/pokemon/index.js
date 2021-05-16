import api from '../../config/api';

import { getToken } from '../../helpers';

const fetchPokemons = async ({ name }) => {
  const token = getToken();

  let params = '';

  if (name) {
    params = `?name=${name}`;
  }

  return api.get(`/pokemons${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const createPokemon = async ({ name, type_1, type_2, file }) => {
  const token = getToken();

  const data = new FormData();

  data.append('name', name);
  data.append('type_1', type_1);
  data.append('type_2', type_2);
  data.append('file', file);

  return api.post('/pokemons', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { fetchPokemons, createPokemon };
