import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="menu_links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user'>Login</Link>
          </li>
          <li>
            <Link to='/forum'>Forum</Link>
          </li>
          <li>
            <Link to='/add-item'>Add</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/transport-list'>Transport</Link>
          </li>
          <li>
            <Link to='/api'>api </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
