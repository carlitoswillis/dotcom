import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
  <nav>
    <div className="navDiv">

      {/* <h3>Menu</h3> */}
      <ul className={`nav-links ${`${props.classy || ''}`}`}>
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
        <Link to="/resume">
          <li>
            Resume
          </li>
        </Link>
        <Link to="/blog">
          <li>
            Blog
          </li>
        </Link>
        <Link to="/portfolio">
          <li>
            Portfolio
          </li>
        </Link>
      </ul>
    </div>
  </nav>
);

export default Nav;
