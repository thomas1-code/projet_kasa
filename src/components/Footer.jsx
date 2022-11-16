import React from 'react';
import Logo from '../assets/logo_kasa_white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo de Kasa" className="footer__logo" />
      <p className="footer__description">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
