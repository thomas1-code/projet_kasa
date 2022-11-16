import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo_kasa.png';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img className="header__logo" src={Logo} alt="Logo de Kasa" />
      </h1>
      <nav className="header__navbar">
        <ul className="header__list">
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
