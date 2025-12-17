import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>© 2025 <strong>Tim</strong> • Каталог книг на React</p>
        </div>
        <div className="footer__right">
          <p>Сделано с ❤️ на <strong>React</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;