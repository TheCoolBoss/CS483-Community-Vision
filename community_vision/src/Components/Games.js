import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import LearnAlphabetIMG from "./Games/LearnAlphabet.jpg" //test image (pig)
import LearnABCIMG from "./Games/abc.jpg"
import alphabetIMG from "./Games/alphabet.jpg"
import sandboxIMG from "./Games/sandbox.jpg"

import { Container } from '@material-ui/core';

function Games() {
  return (
    <div style={{backgroundColor: '#0068a6',
      position: 'relative',
      height: '90vh',
      width: '100vw',
      display: 'grid',
      gridTemplate: '1fr 4fr / 1fr',
      gridTemplateAreas: '"top" "bottom'}}>
      <h1 style={{fontSize: '7vh', color: '#75c044', textDecoration: 'underline', position: 'relative', bottom: '-2vh'}}>Games</h1>
      <Container maxWidth='xl' style={{backgroundColor: '#0068a6'}}>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Alphabet No Help' img={alphabetIMG} link='/noHelpAlphabet' difficulty='Hard'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Word Advanced' img={LearnABCIMG} link='/learnWordAdvanced' difficulty='Hard'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Word Medium' img={LearnABCIMG} link='/learnWordMedium' difficulty='Medium'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Word Easy' img={LearnABCIMG} link='/learnWordBeginner' difficulty='Easy'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Letters' img={sandboxIMG} link='/sandboxLetters' difficulty='Beginner'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Words' img={sandboxIMG} link='/sandboxWords' difficulty='Beginner'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn The Alphabet' img={alphabetIMG} link='/learnAlphabet' difficulty='Beginner'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn The Alphabet' img={alphabetIMG} link='/learnAlphabet' difficulty='Beginner'/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

class GameSelection extends React.Component {
  render() {
    var color;
    if(this.props.difficulty === 'Hard'){
      color = '#FF0000'
    } else if(this.props.difficulty === 'Medium'){
      color = 'yellow'
    } else if(this.props.difficulty === 'Easy'){
      color = '#39ff14'
    } else if(this.props.difficulty === 'Beginner'){
      color = '#0cbfe9'
    }
    return (
      <div>
        <Link style={{textDecoration: 'none'}} to={this.props.link}>
          <Card>
            <CardActionArea>
              <img style={{height: '100%', width: '100%', margin: '0%', padding: '0%', display: 'block'}} src={this.props.img} alt={LearnAlphabetIMG}/* this should be the default for if we don't have an image source*//>
              <p style={{color: 'black', fontWeight: 'bold', margin: 0, padding: 0, display: 'block', backgroundColor: color}} >{this.props.name}</p>
            </CardActionArea>
          </Card>
        </Link>
        <div style={{textAlign: 'left'}}>
          <text style={{color: color}}>Difficulty: {this.props.difficulty}</text>
        </div>
      </div>
    )
  }
}

export default Games;