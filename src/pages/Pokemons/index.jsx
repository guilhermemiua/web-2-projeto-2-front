import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';

import Navbar from '../../components/Navbar';
import PokemonCard from '../../components/PokemonCard';
import { getFile } from '../../helpers';
import { fetchPokemons } from '../../requests/pokemon';
import './styles.css';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchAndSetPokemons = async () => {
      const { data } = await fetchPokemons({ name });

      setPokemons(
        data.map((pokemon) => {
          const types = [];

          if (pokemon.type_1) types.push(pokemon.type_1);
          if (pokemon.type_2) types.push(pokemon.type_2);

          return {
            id: pokemon.id,
            name: pokemon.name,
            imageURL: pokemon.image_name && getFile(pokemon.image_name),
            types,
          };
        })
      );
    };

    fetchAndSetPokemons();
  }, [name]);

  return (
    <div className="pokemons-page">
      <Navbar />

      <div className="container">
        <Input
          name="name"
          label="Search"
          onChange={(event) => setName(event.target.value)}
        />

        <div className="pokemon-cards">
          {pokemons.map((pokemon) => (
            <PokemonCard
              name={pokemon.name}
              imageURL={pokemon.imageURL}
              types={pokemon.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
