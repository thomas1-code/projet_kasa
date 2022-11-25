import React from 'react';

const Banner = ({ className, mobile, tablet, title, alt }) => {
  return (
    <div className={className}>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <img className="banner__img" src={mobile} alt={alt} />
      </picture>
      {title ? <h2 className="banner__title">{title}</h2> : null}
    </div>
  );
};

export default Banner;
