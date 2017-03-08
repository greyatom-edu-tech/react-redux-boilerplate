import React from 'react';
import { Link } from 'react-router';

import utils from 'shared/utils';
import Navbar from './navbar';

const { translations } = utils;
const { header } = translations;

const Header = () => (
  <header className="header-basic">
    <div className="header-limiter">
      <h1>
        <Link to="/home">
          {translations.header.title}&nbsp;<span>{translations.header.logo}</span>
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
);

export default Header;
