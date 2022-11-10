import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LOGO.png';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img className="header__logo" src={Logo} alt="Logo Kasa" />
      </h1>
      <nav>
        <ul className="header__navbar">
          <NavLink to="/">
            <li className="header__links">Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li className="header__links">À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
