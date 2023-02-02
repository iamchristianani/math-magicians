import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="nav-bar">
    <h1 className="logo"> Math Magicians </h1>
    <ul className="nav-links">
      <li>
        <Link to="/math-magicians">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </header>
);

export default Nav;
