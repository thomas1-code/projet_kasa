import React, { useRef, useState } from 'react';
import Arrow from '../assets/arrow.png';

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggle}>
        <h2 className={props.className}>{props.label}</h2>
        <img
          className={
            open
              ? 'collapse__symbol collapse__symbol--rotate'
              : 'collapse__symbol'
          }
          src={Arrow}
          alt="Symbole d'un chevron"
        />
      </button>
      <div
        className="collapse__description"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        {props.children}
      </div>
    </div>
  );
};
export default Collapse;
