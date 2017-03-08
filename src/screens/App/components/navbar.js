import React from 'react';
import { Link } from 'react-router';
import utils from 'shared/utils';

const { translations } = utils;

const Navbar = () => (
  <nav>
    <Link to="/home" activeClassName="selected">{translations.header.nav.home}</Link>
    <Link to="/dashboard" activeClassName="selected">{translations.header.nav.dashboard}</Link>
  </nav>
);

export default Navbar;
