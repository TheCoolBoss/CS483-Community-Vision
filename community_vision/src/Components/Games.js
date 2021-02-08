import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import LearnAlphabetIMG from "./Games/LearnAlphabet.jpg" //test image (pig)
import LearnABCIMG from "./Games/apple.jpg"
import alphabetIMG from "./Games/letters.jpg"
import sandboxIMG from "./Games/sandbox1.jpg"
import numbersIMG from "./Games/numbers.jpg"

import { Container } from '@material-ui/core';

function initial(type) {
  if (localStorage.getItem(type) != null) {
    return localStorage.getItem(type);
  }
  if (type === 'backgroundColor') {
    return 'blue';
  } else if (type === 'fontColor') {
    return 'white';
  }
}

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
      <h1 style={{ fontSize: '7vh', color: fontColor, textDecoration: 'underline', position: 'relative', bottom: '-2vh', userSelect: 'none', cursor: 'default' }}>Games</h1>
      <Container maxWidth='xl' style={{ backgroundColor: backgroundColor }}>
        <Grid container justify='center' spacing={2}>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn The Alphabet' img={alphabetIMG} link='/learnAlphabet' difficulty='Explore' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Numbers' img={LearnAlphabetIMG} link='/learnNumbers' difficulty='Explore' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Letters' img={sandboxIMG} link='/sandboxLetters' difficulty='Explore' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Sandbox Words' img={sandboxIMG} link='/sandboxWords' difficulty='Explore' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Words' img={LearnABCIMG} link='/learnWordBeginner' difficulty='Beginner' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Words' img={LearnABCIMG} link='/learnWordMedium' difficulty='Intermediate' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Alphabet No Help' img={alphabetIMG} link='/noHelpAlphabet' difficulty='Expert' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn The Alphabet' img={alphabetIMG} link='/learnAlphabet' difficulty='Beginner' />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <GameSelection name='Learn Numbers' img={numbersIMG} link='/learnNumbers' difficulty='Beginner' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
})

class GameSelection extends React.Component {
  render() {
    var color;
    if (this.props.difficulty === 'Expert') {
      color = '#FF0000'
    } else if (this.props.difficulty === 'Intermediate') {
      color = 'yellow'
    } else if (this.props.difficulty === 'Beginner') {
      color = '#39ff14'
    } else if (this.props.difficulty === 'Explore') {
      color = '#0cbfe9'
    }
    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to={this.props.link}>
          <Card>
            <CardActionArea>
              <img style={{ height: '100%', width: '100%', margin: '0%', padding: '0%', display: 'block' }} src={this.props.img} alt={LearnAlphabetIMG}/* this should be the default for if we don't have an image source*/ />
              <p style={{ color: 'black', fontWeight: 'bold', margin: 0, padding: 0, display: 'block', backgroundColor: color, fontSize: '2vh', textDecoration: 'underline' }} >{this.props.name}</p>
              <div style={{ backgroundColor: color }}>
                <text style={{ color: 'black', fontWeight: 'bold' }}>{this.props.difficulty}</text>
              </div>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    )
  }
}

export default Games;