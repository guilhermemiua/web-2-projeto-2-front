import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import PokemonLogo from '../../assets/images/pokemon.svg';
import { UserContext } from '../../contexts/UserContext';
import './styles.css';

const Navbar = () => {
  const { logout } = useContext(UserContext);

  const history = useHistory();

  return (
    <header>
      <nav className="container nav-container" id="nav">
        <a href="/">
          <img src={PokemonLogo} alt="Pokemon Logo" />
        </a>
        <ul>
          <li>
            <a href="/pokemons">Pokedex</a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                logout();
                history.push('/login');
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
