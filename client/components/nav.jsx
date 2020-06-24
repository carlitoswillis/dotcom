import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h3>Menu</h3>
    <ul className="nav-links">
      <Link to="/about">
        <li>
          About
        </li>
      </Link>
      <Link to="/blog">
        <li>
          Blog
        </li>
      </Link>
      <Link to="/shop">
        <li>
          Shop
        </li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
