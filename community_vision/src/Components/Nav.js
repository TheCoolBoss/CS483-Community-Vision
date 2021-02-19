import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import pic from './settings.png'
import { useSpring, animated } from 'react-spring'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import Settings from './Settings';

function initial(type) {
  if (localStorage.getItem(type) != null) {
    return localStorage.getItem(type);
  }
  if (type === 'volume') {
    return 50;
  } else if (type === 'backgroundColor') {
    return 'blue';
  } else if (type === 'fontColor') {
    return 'white';
  }
}

const Nav = forwardRef((props, ref) => {
  var [dropdownState, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: dropdownState ? 1 : 0 },
    config: { duration: 500 }
  })
  //const [volume] = useState(() => initial('volume'));
  const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
  const [fontColor, setFontColor] = useState(() => initial('fontColor'));
  var navbarColor = '#f8ac2e'
  if (backgroundColor === 'gray' && fontColor === 'black'){
    navbarColor = 'black'
  }

  useImperativeHandle(
    ref,
    () => ({
      update() {
        setBackgroundColor(initial('backgroundColor'));
        setFontColor(initial('fontColor'));
      }
    }),
  )


  return (
    <div>
      <div style={{
        gridArea: 'header',
        position: 'relative',
        zIndex: 4,
        display: 'flex',
        justifContent: 'space-around',
        alignItems: 'center',
        minHeight: '10vh',
        background: navbarColor,
        color: 'white'
      }}>
        <Link to="/">
          <img style={{ height: '8vh' }} src={logo} alt={logo}></img>
        </Link>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          listStyleType: 'none'
        }}>
          <Container>
            <Grid container direction='row' justify='flex-start' alignItems='center' spacing={2}>
              <Grid item xs={2} />
              <Grid item xs={2}>
                <Card style={{ borderRadius: '20px' }}>
                  <CardActionArea>
                    <Link style={{ color: 'black', textDecoration: 'none', fontSize: '5vh' }} to="/games">
                      Games
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Card style={{ borderRadius: '20px' }}>
                  <CardActionArea>
                    <Link style={{ color: 'black', textDecoration: 'none', fontSize: '5vh' }} to="/about">
                      About
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Card style={{ borderRadius: '20px' }}>
                  <CardActionArea>
                    <Link style={{ color: 'black', textDecoration: 'none', fontSize: '4vh' }} to="/GettingStarted">
                      Getting Started
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
        <button style={{ position: 'relative', right: '0.25vw', cursor: 'pointer' }} onMouseDown={function () { toggle(!dropdownState) }}>
          <img style={{ height: '8vh' }} src={pic} alt={pic}></img>
        </button>
      </div>
      <div id="root">
      </div>
      <animated.div style={{
        gridArea: 'header',
        display: 'flex',
        position: 'relative',
        zIndex: 4,
        top: '-1vh',
        height: 0,
        left: x.interpolate({ range: [0, 1], output: ['100vw', '0vw'] }),
        opacity: x.interpolate({ range: [0, 1], output: [0, 0.95] })
      }}>
        <p style={{
          fontSize: '10vh',
          position: 'absolute',
          background: 'white',
          top: '-20vh',
          width: '100%',
          zIndex: 5,
          cursor: 'pointer',
          userSelect: 'none',
          textAlign: 'right',
        }} onMouseDown={function () { toggle(!dropdownState) }}>X</p>
        <Settings updateNavBackgroundColor={setBackgroundColor}
          updateNavFontColor={setFontColor}
          updateSettingsPageState={() => void 0}
          updateNavState={props.updateAppState} />
      </animated.div>
    </div>
  );
})


export default Nav;
