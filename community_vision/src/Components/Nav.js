import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from './logo.png'
import pic from './settings.png'
import {useSpring, animated} from 'react-spring'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import Settings from './Settings';

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
        background: '#f8ac2e',
        color: 'white'}}>
        <Link to="/">
          <img style={{height: '8vh'}} src={logo} alt={logo}></img>
        </Link>
        <div style={{width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          listStyleType: 'none'}}>
          <Container>
            <Grid container direction='row' justify='flex-start' alignItems='center' spacing={2}>
              <Grid item xs={2}/>
              <Grid item xs={2}> 
                <Card style={{borderRadius: '20px'}}>
                  <CardActionArea>
                    <Link style={{color: 'black', textDecoration: 'none', fontSize: '5vh'}} to="/games">
                      Games
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={3}/>
              <Grid item xs={2}> 
                <Card style={{borderRadius: '20px'}}>
                  <CardActionArea>
                    <Link style={{color: 'black', textDecoration: 'none', fontSize: '5vh'}} to="/about">
                      About
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
        <button style={{position: 'relative', right: '2px'}} onClick={function(){toggle(!state)}}>
          <img style={{height: '8vh'}} src={pic} alt={pic}></img>
        </button>
      </div>
      <div id="root">
      </div>
      <animated.div style={{gridArea: 'header',
        display: 'flex',
        justifContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: x.interpolate({ range: [0, 1], output: ['0vh', '70vh']}),
        background: 'grey',
        color: 'white'}}>
      </animated.div>
    </div>
  );
}


export default Nav;
