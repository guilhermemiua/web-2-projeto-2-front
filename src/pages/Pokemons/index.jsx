import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import { UserContext } from '../../contexts/UserContext';
import PokemonCard from '../../components/PokemonCard';
import { getFile } from '../../helpers';
import { fetchPokemons } from '../../requests/pokemon';
import './styles.css';

const Pokemons = () => {
  const { loggedUser } = useContext(UserContext);

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
        <header className="pokemons-header">
          <h2>Pokemons</h2>
          {loggedUser?.role === 'admin' && (
            <Link to="/pokemons/new">
              <button type="button" className="pokemons-new">
                New Pokemon
              </button>
            </Link>
          )}
        </header>

        <Input
          name="name"
          label="Search"
          onChange={(event) => setName(event.target.value)}
          inputClassName="pokemons-search-input"
          containerClassName="pokemons-search-input-container"
        />

        <div className="pokemon-cards">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
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
