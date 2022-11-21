import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Error = () => {
  return (
    <div>
      <Header />
      <main className="error">
        <h2 className="error__title">404</h2>
        <p className="error__description">
          Oups ! La page que <br /> vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
};

export default Error;
