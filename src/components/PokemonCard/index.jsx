import React from 'react';

import './styles.css';

const PokemonCard = ({ name, imageURL, types = [] }) => (
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
  </div>
);

export default PokemonCard;
