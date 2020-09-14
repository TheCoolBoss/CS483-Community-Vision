import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import LearnAlphabetIMG from "./Games/LearnAlphabet.jpg"

function Games() {
  return (
    <div>
      <h1 className='games-difficulty'>Beginner</h1>
      <Grid container justify='flex-start'>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
      </Grid>
      <h1 className='games-difficulty'>Easy</h1>
      <Grid container justify='flex-start'>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
      </Grid>
      <h1 className='games-difficulty'>Medium</h1>
      <Grid container justify='flex-start'>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
      </Grid>
      <h1 className='games-difficulty'>Hard</h1>
      <Grid container justify='flex-start'>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
          <GameSelection name='LearnTheAlphabet' img={LearnAlphabetIMG} link='/learnAlphabet'/>
        </Grid>
      </Grid>
    </div>
  );
}

class GameSelection extends React.Component {
  render() {
    return (
      <Link className='game-selection' to={this.props.link}>
        <Card className='game-selection-card'>
          <CardActionArea>
            <img className='game-selection-image' src={this.props.img}/>
            <p className='game-selection-text'>Learn The Alphabet</p>
          </CardActionArea>
        </Card>
      </Link>
    )
  }
}

export default Games;