import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../../components/Input';
import Navbar from '../../../components/Navbar';
import { getFile } from '../../../helpers';
import { fetchPokemonById, updatePokemon } from '../../../requests/pokemon';
import './styles.css';

const UpdatePokemon = () => {
  const { id } = useParams();

  const { push, goBack } = useHistory();

  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');

  const onFinish = async () => {
    try {
      if (!name || !type1) {
        toast.error('Name or type 1 not provided.');

        return;
      }

      await updatePokemon({
        id,
        name,
        type_1: type1,
        type_2: type2,
      });

      await toast.success('Pokemon updated with success!');

      await push('/pokemons');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Update pokemon error.');
    }
  };

  const fetchAndSetPokemon = async () => {
    const { data } = await fetchPokemonById(id);

    setPokemon(data);
    setName(data.name);
    setType1(data.type_1);
    setType2(data.type_2);
  };

  useEffect(() => {
    fetchAndSetPokemon();
  }, []);

  return (
    <div className="update-pokemon-page">
      <Navbar />

      <div className="container">
        <header className="update-pokemon-header">
          <h2>New pokemon</h2>

          <button
            type="button"
            className="update-pokemon-go-back-button"
            onClick={() => goBack}
          >
            Go back
          </button>
        </header>

        <Input
          name="name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          inputClassName="update-pokemon-input"
          containerClassName="update-pokemon-input-container"
        />
        <Input
          name="type-1"
          label="Type 1"
          value={type1}
          onChange={(event) => setType1(event.target.value)}
          inputClassName="update-pokemon-input"
          containerClassName="update-pokemon-input-container"
        />
        <Input
          name="type-2"
          label="Type 2"
          value={type2}
          onChange={(event) => setType2(event.target.value)}
          inputClassName="update-pokemon-input"
          containerClassName="update-pokemon-input-container"
        />

        <button
          type="button"
          className="update-pokemon-go-back-button"
          onClick={() => onFinish()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdatePokemon;
