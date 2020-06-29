import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="menuSplit">
    <h1 className="title">
      carlitos willis | software engineer
    </h1>
    <nav>
      {/* <h3>Menu</h3> */}
      <ul className="nav-links">
        <Link to="/">
          <li>
            Home
          </li>
        </Link>
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
        <Link to="/portfolio">
          <li>
            Portfolio
          </li>
        </Link>
      </ul>
    </nav>
  </div>
);

export default Nav;
