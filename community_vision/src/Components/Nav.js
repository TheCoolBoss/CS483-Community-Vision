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
import { initial } from "./Games/Common/Functions";
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from "react-router-dom";

const Nav = forwardRef((props, ref) => {

  const history = useHistory();
  function moveTo(input) {
    history.push(input);
  }

  var [dropdownState, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: dropdownState ? 1 : 0 },
    config: { duration: 500 }
  })
  // const [volume] = useState(() => initial('volume'));
  // const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
  // const [fontColor, setFontColor] = useState(() => initial('fontColor'));
  var navbarColor = '#f8ac2e'

  useImperativeHandle(
    ref,
    () => ({
      update() {
        
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
          <img style={{ height: '8vh', cursor: 'pointer', userSelect: 'none' }} src={logo} alt={logo}></img>
        </Link>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          listStyleType: 'none'
        }}>
          <Container>
            <Hidden smDown>
              <Grid container direction='row' justify='flex-start' alignItems='center' spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={2}>
                  <Link style={{ textDecoration: 'none' }} to="/about">
                    <Card style={{ borderRadius: '20px' }}>
                      <CardActionArea>
                        <div style={{ color: 'black', fontSize: '4vh' }}>
                          About
                        </div>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                  <Link style={{ textDecoration: 'none' }} to="/GettingStarted">
                    <Card style={{ borderRadius: '20px' }}>
                      <CardActionArea>
                        <div style={{ color: 'black', fontSize: '4vh' }}>
                          Getting Started
                        </div>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                  <Link style={{ textDecoration: 'none' }} to="/games">
                    <Card style={{ borderRadius: '20px' }}>
                      <CardActionArea>
                        <div style={{ color: 'black', fontSize: '4vh' }}>
                          Games
                        </div>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              </Grid>
            </Hidden>
          </Container>
        </div>
        <button style={{ position: 'relative', right: '0.25vw', cursor: 'pointer', userSelect: 'none' }}
          onMouseDown={() => {
            if (window.location.href.slice(-8) !== 'settings') {
              toggle(!dropdownState);
            }
          }}>
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
        }} onMouseDown={() => {
          toggle(!dropdownState);
        }}>X</p>
        <h1 style={{
          fontSize: '10vh',
          position: 'absolute',
          top: '-17vh',
          width: '100%',
          zIndex: 5,
          cursor: 'pointer',
          userSelect: 'none',
          textAlign: 'center',
        }} onMouseDown={() => {
          toggle(!dropdownState);
        }}>
          <img style={{ height: '8vh' }} src={pic} alt={pic}></img>
          Settings
        </h1>
        <Grid container style={{ paddingTop: '1.25vh', zIndex: 4 }}>
          <Grid item xs={12} style={{ background: 'white' }}>
            <Hidden mdUp>
              <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
                <Grid item xs={4}>
                  <Card style={{ borderRadius: '20px' }} onMouseDown={() => {
                    moveTo('/about');
                    toggle(!dropdownState);
                  }}>
                    <CardActionArea>
                      <div style={{ color: 'black', fontSize: '4vh', textDecoration: 'none' }}>
                        About
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card style={{ borderRadius: '20px' }} onMouseDown={() => {
                    moveTo('/gettingStarted');
                    toggle(!dropdownState);
                  }}>
                    <CardActionArea>
                      <div style={{ color: 'black', fontSize: '4vh', textDecoration: 'none' }}>
                        Getting Started
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card style={{ borderRadius: '20px' }} onMouseDown={() => {
                    moveTo('/games');
                    toggle(!dropdownState);
                  }}>
                    <CardActionArea>
                      <div style={{ color: 'black', fontSize: '4vh', textDecoration: 'none' }}>
                        Games
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '-1.4vh' }}>
            <Settings updateNavBackgroundColor={() => void 0}
              updateNavFontColor={() => void 0}
              updateSettingsPageState={() => void 0}
              updateNavState={props.updateAppState} />
          </Grid>
        </Grid>
      </animated.div>
    </div>
  );
})


export default Nav;
