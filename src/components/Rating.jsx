import React from 'react';
import Redstar from '../assets/star_red.svg';
import Greystar from '../assets/star_grey.svg';

const Rating = ({ rating }) => {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {range.map((star) =>
        rating >= star ? (
          <img
            className="rating__icon"
            src={Redstar}
            alt="Icon d'étoile rouge"
            key={star.toString()}
          />
        ) : (
          <img
            className="rating__icon"
            src={Greystar}
            alt="Icon d'étoile grise"
            key={star.toString()}
          />
        )
      )}
    </div>
  );
};

export default Rating;
