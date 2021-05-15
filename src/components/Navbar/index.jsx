import React from 'react';
import PokemonLogo from '../../assets/images/pokemon.svg';
import './styles.css';

const Navbar = () => (
  <header>
    <nav className="container nav-container" id="nav">
      <a href="/">
        <img src={PokemonLogo} alt="Pokemon Logo" />
      </a>
      <ul>
        <li>
          <a href="/pokemons">Pokedex</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
