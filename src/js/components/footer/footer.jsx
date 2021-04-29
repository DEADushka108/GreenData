import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <Link to={AppRoute.ROOT} className="page-footer__logo">
          Employeers
        </Link>
        <div className="page-footer__copyright">
          <p className="page-footer__text">
            © 2021 Employeers Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
