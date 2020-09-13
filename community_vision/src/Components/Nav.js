import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {

  return (
    <nav>
        <Link to="/">
          <h3>Logo</h3>
        </Link>
        <ul className='nav-links'>
            <Link className='navLink' to="/about">
              <li>About</li>
            </Link>
            <Link className='navLink' to="/profile">
              <li>Profile</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
