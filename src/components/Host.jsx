import React from 'react';

const Host = (props) => {
  return (
    <div className="host">
      <h2 className="host__title">{props.name}</h2>
      <img src={props.image} alt={props.alt} className="host__image" />
    </div>
  );
};

export default Host;
