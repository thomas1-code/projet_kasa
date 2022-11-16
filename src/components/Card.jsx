import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ picture, title }) => {
  return (
    <div className="card">
      <img className="card__img" src={picture} alt="Appartement en location" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

Card.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
};
export default Card;
