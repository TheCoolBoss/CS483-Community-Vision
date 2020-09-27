import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from './logo192.png'

function Nav() {
  var [state, setState] = React.useState(false);
  var height = '0vh'
  if (state){
    height = '70vh'
  }
  return (
    <div>
      <div style={{gridArea: 'header',
        display: 'flex',
        justifContent: 'space-around',
        alignItems: 'center',
        minHeight: '10vh',
        background: '#b8ee30',
        color: 'white'}}>
        <Link to="/">
          <img style={{height: '8vh'}} src={logo} alt={logo}></img>
        </Link>
        <ul style={{width: '80%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          listStyle: 'none'}}>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/games">
            <li>Games</li>
          </Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/about">
            <li>About</li>
          </Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
        <button style={{position: 'absolute', right: 0}} onClick={function(){setState(!state)}}>
          <img style={{height: '8vh'}} src={logo} alt={logo}></img>
        </button>
      </div>
      <div style={{gridArea: 'header',
        display: 'flex',
        justifContent: 'space-around',
        alignItems: 'center',
        minHeight: height,
        background: 'grey',
        color: 'white'}}>
      </div>
    </div>
  );
}

export default Nav;
