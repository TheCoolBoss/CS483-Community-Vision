import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from './logo.png'
import pic from './logopic.png'
import {useSpring, animated} from 'react-spring'
import Settings from './Settings.js'

function Nav() {
  var [state, toggle] = React.useState(false);
  const {x} = useSpring({
    from: {x: 0},
    to: {x: state ? 1 : 0},
    config: {duration: 500}
  })

  return (
    <div>
      <div style={{gridArea: 'header',
        display: 'flex',
        justifContent: 'space-around',
        alignItems: 'center',
        minHeight: '10vh',
        background: '#b8ee30',
        color: 'white',
        position: 'relative',
        zIndex: '2'}}>
        <Link to="/">
          <img style={{height: '8vh'}} src={logo} alt={logo}></img>
        </Link>
        <ul style={{width: '80%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          listStyle: 'none'}}>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/settings">
            <li>Games</li>
          </Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/about">
            <li>About</li>
          </Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
        <button style={{position: 'absolute', right: 0}} onClick={
          function(){
            if(window.location.href.slice(-8) !== 'settings'){
              toggle(!state);
            }
          }}>
          <img style={{height: '8vh'}} src={pic} alt={pic}></img>
        </button>
      </div>
      <animated.div style={{gridArea: 'header',
        display: 'flex',
        justifContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: x.interpolate({ range: [0, 1], output: ['0vh', '75vh']}),
        background: 'grey',
        color: 'white'}}>
        <Settings/>
      </animated.div>
    </div>
  );
}

export default Nav;
