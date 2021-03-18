import React, { forwardRef, useImperativeHandle } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';


const Home = forwardRef((props, ref) => {
  
  useImperativeHandle(
    ref,
    () => ({
      update() {
        //does nothing to homepage for now
      }
    }),
  )
  return (
    <div style={{position: 'relative',
      zIndex: 0,
      height: '90vh',
      width: '100vw',
      display: 'grid',
      gridTemplate: '18fr 10fr 42fr 20fr/ 1fr',
      gridTemplateAreas: '"top" "middleTop" "middleBottom" "bottom"'}}>
      
      {/* styling for the home page */}
      <div style={{gridArea: 'top',
        height: '80%',
        alignSelf: 'center', alignItems: 'center'}}>
          {/* title */}
        <h1 style={{fontSize: '10vh',
          color: '#003087',
          position: 'relative',
          bottom: '-1vh',
          userSelect: 'none',
          cursor: 'default',
          fontWeight: 900}}>
          Play Morse!</h1>
      </div>
      <div style={{gridArea: 'middleBottom'}}>
        {/* welcome statement */}
        <Grid container justify='center' alignItems='flex-start' style={{height: '100%'}}>
            <Grid item xs={11} style={{height: '20%'}}>
              <h1 style={{height: '100%', color: 'black', fontWeight: 900, userSelect: 'none', cursor: 'default'}}>
                Welcome to Community Vision Morse Code Games!
              </h1>
            </Grid>
            <Grid item xs={8} style={{height: '20%', paddingBottom: '6vh'}}>
              {/* directs it to the about page */}
              <Card style={{minHeight: '100%'}}>
                <Link className='nav-link' to="/about">
                  <button style={{height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderWidth: "13px", borderColor: "red"}}>About</button>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={8} style={{height: '20%', paddingBottom: '6vh'}}>
              {/* directs it to the getting started page */}
              <Card style={{minHeight: '100%'}}>
                <Link className='nav-link' to="/GettingStarted">
                  <button style={{height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderWidth: "13px", borderColor: 'lightgreen'}}>Getting Started</button>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={8} style={{height: '20%', paddingBottom: '6vh'}}>
              {/* play games button, directs it to the games page */}
              <Card style={{minHeight: '100%'}}>
                <Link className='nav-link' to="/settings">
                  <button style={{height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderColor: 'blue', borderWidth: "13px"}}>Play Games!</button>
                </Link>
              </Card>
            </Grid>
          </Grid>
      </div>
    </div>
  );
})

export default Home;
