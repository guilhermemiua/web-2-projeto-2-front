import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Input from '../../../components/Input';
import Navbar from '../../../components/Navbar';
import Select from '../../../components/Select';
import { POKEMON_TYPES } from '../../../constants/pokemonTypes';
import { createPokemon } from '../../../requests/pokemon';
import './styles.css';

const NewPokemon = () => {
  const { push, goBack } = useHistory();

  const [name, setName] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  const [file, setFile] = useState('');

  const onFinish = async () => {
    try {
      if (!name || !type1 || !file) {
        toast.error('Name or type 1 or pokemon image not provided.');

        return;
      }

      await createPokemon({
        name,
        type_1: type1,
        type_2: type2,
        file,
      });

      await toast.success('Pokemon created with success!');

      await push('/pokemons');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Create pokemon error.');
    }
  };

  return (
    <div className="new-pokemon-page">
      <Navbar />

      <div className="container">
        <header className="new-pokemon-header">
          <h2>New pokemon</h2>

          <button
            type="button"
            className="new-pokemon-go-back-button"
            onClick={() => goBack()}
          >
            Go back
          </button>
        </header>

        <Input
          name="name"
          label="Name"
          onChange={(event) => setName(event.target.value)}
          inputClassName="new-pokemon-input"
          containerClassName="new-pokemon-input-container"
        />
        <Select
          name="type-1"
          label="Type 1"
          onChange={(event) => setType1(event.target.value)}
          selectClassName="new-pokemon-input"
          containerClassName="new-pokemon-input-container"
        >
          <option value={null}> </option>
          {POKEMON_TYPES.map((type) => (
            <option value={type.value}>{type.name}</option>
          ))}
        </Select>
        <Select
          name="type-2"
          label="Type 2"
          onChange={(event) => setType2(event.target.value)}
          selectClassName="new-pokemon-input"
          containerClassName="new-pokemon-input-container"
        >
          <option value={null}> </option>
          {POKEMON_TYPES.map((type) => (
            <option value={type.value}>{type.name}</option>
          ))}
        </Select>
        <Input
          type="file"
          name="file"
          label="Pokemon image"
          accept="image/*"
          onChange={(event) => {
            const currentFile = event.target.files[0];

            if (
              currentFile.type !== 'image/jpeg' &&
              currentFile.type !== 'image/jpg' &&
              currentFile.type !== 'image/png'
            ) {
              toast.error('File type not allowed');
              return;
            }

            setFile(currentFile);
          }}
          inputClassName="new-pokemon-input"
          containerClassName="new-pokemon-input-container"
        />

        <button
          type="button"
          className="new-pokemon-go-back-button"
          onClick={() => onFinish()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPokemon;
