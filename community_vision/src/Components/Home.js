import React, { forwardRef, useImperativeHandle } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import pencils from './home/pencils.jpg';

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
      
      <img src={pencils} alt="pencils" //background image
      style={{gridRowStart: 'top', gridRowEnd: 'bottom', position: 'absolute', height: '100%', width: '100%', objectFit: 'cover', zIndex: -1}}
      />
      {/* styling for the home page */}
      <div style={{gridArea: 'top',
        height: '80%',
        alignSelf: 'center', alignItems: 'center'}}>
          {/* title */}
        <h1 style={{fontSize: '10vh',
          color: '#003087',
          textDecoration: 'underline',
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
            <Grid item xs={11} style={{height: '80%'}}>
              <h1 style={{height: '100%', color: 'black', fontWeight: 900, userSelect: 'none', cursor: 'default'}}>
                Welcome to Community Vision Morse Code Games!
              </h1>
            </Grid>
            <Grid item xs={5} style={{height: '20%'}}>
              {/* play games button, directs it to the games page */}
              <Card style={{minHeight: '100%'}}>
                <Link className='nav-link' to="/settings">
                  <button style={{height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer'}}>Play Games!</button>
                </Link>
              </Card>
            </Grid>
          </Grid>
      </div>
    </div>
  );
})

export default Home;
