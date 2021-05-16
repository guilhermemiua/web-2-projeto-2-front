import React, { useContext } from 'react';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../contexts/UserContext';
import { deletePokemon } from '../../requests/pokemon';

import './styles.css';

const PokemonCard = ({
  id,
  name,
  imageURL,
  types = [],
  refetch = () => {},
}) => {
  const { loggedUser } = useContext(UserContext);

  const callDeletePokemon = async () => {
    try {
      await deletePokemon(id);

      await toast.success('Pokemon deleted with success!');

      await refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Pokemon delete error.');
    }
  };

  return (
    <div className="pokemon-card">
      <img src={imageURL} alt={name} />
      <div className="pokemon-card-info">
        <h2>{name}</h2>
        <div className="pokemon-card-info-tags">
          {types.map((type) => (
            <div className={`pokemon-card-info-tag ${type}`}>{type}</div>
          ))}
        </div>
      </div>
      {loggedUser?.role === 'admin' && (
        <div className="pokemon-card-actions">
          <Link to={`/pokemons/${id}/update`}>
            <FiEdit className="pokemon-card-icon" size={30} />
          </Link>
          <FiTrash
            className="pokemon-card-icon"
            size={30}
            onClick={() => callDeletePokemon()}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
