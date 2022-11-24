import React, { useState } from 'react';
import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';

const Slideshow = ({ slides, alt }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slideshow">
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current ? 'slideshow__active ' : 'slideshow__inactive '
            }
            key={index}
          >
            {index === current && (
              <img className="slideshow__image" src={slide} alt={alt} />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <div className="slideshow__container">
          <div className="slideshow__next" onClick={nextSlide}>
            <img
              className="slideshow__arrow"
              src={ArrowRight}
              alt="Flêche de droite"
            />
          </div>
          <div className="slideshow__prev" onClick={prevSlide}>
            <img
              className="slideshow__arrow"
              src={ArrowLeft}
              alt="Flêche de gauche"
            />
          </div>
          <div className="slideshow__counter">
            {current + 1}/{length}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Slideshow;
