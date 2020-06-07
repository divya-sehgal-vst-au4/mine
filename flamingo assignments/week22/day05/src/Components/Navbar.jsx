import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav className="Navbar">

      <div className="logo ">
        <Link to="/">
          Medilife
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/homecare">
            Home Care
          </Link>

        </li>
        <li>
          <Link to="/concierge">
            Concierge
          </Link>

        </li>
        <li>
          <Link to="/equipment">
            Medical Equipment
          </Link>

        </li>
      </ul>
      <div className="login">
        Login
        <span>Sign Up</span>
      </div>
    </nav>
  </header>
);

export default Navbar;
