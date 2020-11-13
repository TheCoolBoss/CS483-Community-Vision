import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import LearnAlphabetIMG from "./Games/LearnAlphabet.jpg"
import { Container } from '@material-ui/core';

function Games() {
  // changes background color
  var pageColor = '#01214f';
  if(localStorage.getItem("backgroundColor") != null) {
    pageColor = localStorage.getItem("backgroundColor");
  }
  return (

    <div style={{backgroundColor: pageColor,
      position: 'relative',
      height: '90vh',
      width: '100vw',
      display: 'grid',
      gridTemplate: '1fr 4fr / 1fr',
      gridTemplateAreas: '"top" "bottom'}}>
      <h1 style={{fontSize: '7vh', color: '#ffaba6', textDecoration: 'underline', position: 'relative', bottom: '-2vh'}}>Games</h1>
      <Container maxWidth='xl' style={{backgroundColor: pageColor}}>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Alphabet No Help' img={LearnAlphabetIMG} link='/noHelpAlphabet' difficulty='Hard'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Word Advanced' img={LearnAlphabetIMG} link='/learnWordAdvanced' difficulty='Hard'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Word Medium' img={LearnAlphabetIMG} link='/learnWordMedium' difficulty='Medium'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Word Easy' img={LearnAlphabetIMG} link='/learnWordBeginner' difficulty='Easy'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Letters' img={LearnAlphabetIMG} link='/sandboxLetters' difficulty='Beginner'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Words' img={LearnAlphabetIMG} link='/sandboxWords' difficulty='Beginner'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn The Alphabet' img={LearnAlphabetIMG} link='/learnAlphabet' difficulty='Beginner'/>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn The Alphabet' img={LearnAlphabetIMG} link='/learnAlphabet' difficulty='Beginner'/>
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