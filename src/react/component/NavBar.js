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
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/forum'>Forum</Link>
          </li>
          <li>
            <Link to='/transport-list'>Transport list</Link>
          </li>
          <li>
            <Link to='/transport-api'>Transport api </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
