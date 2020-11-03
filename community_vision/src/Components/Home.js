import React from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import pencils from './home/pencils.jpg';

function Home() {
  return (
    <div style={{position: 'relative',
      zIndex: 0,
      height: '90vh',
      width: '100vw',
      display: 'grid',
      gridTemplate: '18fr 10fr 42fr 20fr/ 1fr',
      gridTemplateAreas: '"top" "middleTop" "middleBottom" "bottom"'}}>
      
      <img src={pencils} alt="pencils"
      style={{position: 'fixed', height: '100%', width: '100%', objectFit: 'cover', zIndex: -1}}
      />;

      <div style={{gridArea: 'top',
        height: '80%',
        alignSelf: 'center', alignItems: 'center'}}>
        <h1 style={{fontSize: '10vh', color: '#3c5291', textDecoration: 'underline', position: 'relative', bottom: '-1vh', fontWeight: 900}}>Play Morse!</h1>
      </div>
      <div style={{gridArea: 'middleBottom'}}>
        <Grid container justify='center' alignItems='flex-start' style={{height: '100%'}}>
            <Grid item xs={11} style={{height: '80%'}}>
              <h1 style={{height: '100%', color: 'black', fontWeight: 900}}>
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
                block of text, blah, blah, blah things here
              </h1>
            </Grid>
            <Grid item xs={5} style={{height: '20%'}}>
              <Card style={{height: '100%'}}>
                <Link className='nav-link' to="/settings">
                  <button style={{height: '100%', width: '100%', fontSize: '4vh', fontWeight: 900}}>Play Games!</button>
                </Link>
              </Card>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}

export default Home;
