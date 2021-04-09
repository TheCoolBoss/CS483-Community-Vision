import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import LearnAlphabetIMG from "./Games/LearnAlphabet.jpg" //test image (pig)
import LearnABCIMG from "./Games/appleR.jpg"
import buttonsImg from "./Games/buttonsR.jpg"
import needleImg from "./Games/needleR.jpg"
import sandBocWords from "./Games/sandboxWordR.jpg"
import stackABC from "./Games/stack_abcR.jpg"
import abceyes from "./Games/abc_eyesR.jpg"
import unicycleImg from "./Games/unicycleR.jpg"
import alphabetIMG from "./Games/abcR.jpg"
import sandboxIMG from "./Games/sandbox1R.jpg"
import numbersIMG from "./Games/numbersR.jpg"
import raceLevel4 from "./Games/racezR.jpg"
import raceLevel3 from "./Games/raceqR.jpg"
import { initial } from "./Games/Common/Functions"
import { Container } from '@material-ui/core';

const Games = forwardRef((props, ref) => {
  const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
  const [fontColor, setFontColor] = useState(() => initial('fontColor'));
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
    <div style={{
      backgroundColor: backgroundColor,
      position: 'relative',
      height: '90vh',
      width: '100vw',
      display: 'grid',
      gridTemplate: '1fr 4fr / 1fr',
      gridTemplateAreas: '"top" "bottom'
    }}>
      <h1 style={{ fontSize: '8vh', color: fontColor, position: 'relative', padding: 0, margin: '1vh', userSelect: 'none', cursor: 'default' }}>Games</h1>
      <Container maxWidth='xl' style={{ backgroundColor: backgroundColor, paddingBottom: '2vh' }}>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Explore Dot and Dash' img={buttonsImg} link='/buttons' difficulty='Level 1' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Morse Patterns' img={alphabetIMG} link='/sorted' difficulty='Level 1' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Morse Alphabet' img={abceyes} link='/learnAlphabet' difficulty='Level 1' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Morse Numbers' img={numbersIMG} link='/learnNumbers' difficulty='Level 1' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Letters' img={sandboxIMG} link='/sandboxLetters' difficulty='Level 1' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Words' img={sandBocWords} link='/sandboxWords' difficulty='Level 1' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Words' img={LearnABCIMG} link='/learnWordBeginner' difficulty='Level 2' />
          </Grid>
          <Grid id ="medWords" item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection id="medWords" name='Learn Words' img={needleImg} link='/learnWordMedium' difficulty='Level 3' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Alphabet Race Game with Morse' img={raceLevel3} link='/alphabetRacePractice' difficulty='Level 3' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Morse Alphabet' img={stackABC} link='/noHelpAlphabet' difficulty='Level 4' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Words' img={unicycleImg} link='/learnWordAdvanced' difficulty='Level 4' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Alphabet Race Game' img={raceLevel4} link='/alphabetRace' difficulty='Level 4' />
          </Grid>
        </Grid>
      </Container>
      <Link className='nav-link' to="/" style={{
        backgroundColor: backgroundColor
      }}>
        <button style={{
          width: '40vw',
          fontSize: '5vh',
          fontWeight: 900,
          userSelect: 'none',
          cursor: 'pointer',
          marginBottom: "5vh",
          backgroundColor: 'white'
        }}>Go Back to Home</button>
      </Link>
    </div>

  );
})

class GameSelection extends React.Component {
  render() {
    var color;
    if (this.props.difficulty === 'Level 4') {
      color = '#FF0000'
    } else if (this.props.difficulty === 'Level 3') {
      color = 'yellow'
    } else if (this.props.difficulty === 'Level 2') {
      color = '#39ff14'
    } else if (this.props.difficulty === 'Level 1') {
      color = '#0cbfe9'
    }
    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to={this.props.link}>
          <Card>
            <CardActionArea>
              <div style={{ width: '100%', paddingTop: '66.66%' }}>
                <img style={{ width: '100%', margin: '0%', padding: '0%', position: 'absolute', left: '0', top: '0' }} src={this.props.img} type="image/png" alt={LearnAlphabetIMG}/* this should be the default for if we don't have an image source*/ />
              </div>
              <p style={{ color: 'black', fontWeight: 'bold', margin: 0, padding: 0, display: 'block', backgroundColor: color, fontSize: '2.5vh' }} >{this.props.name}</p>
              <div style={{ backgroundColor: color }}>
                <text style={{ color: 'black', fontWeight: 'bold', fontSize: '1.75vh' }}>{this.props.difficulty}</text>
              </div>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    )
  }
}

export default Games;