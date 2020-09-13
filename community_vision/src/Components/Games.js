import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Games() {
  return (
    <div>
      <h1 className='games-difficulty'>Beginner</h1>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <h1 className='games-difficulty'>Easy</h1>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <h1 className='games-difficulty'>Medium</h1>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <h1 className='games-difficulty'>Hard</h1>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
      <GameSelection name='Game Name Here' imgSource='./GamesComponents' link='/learnAlphabet'/>
    </div>
  );
}

class GameSelection extends React.Component {
  render() {
    return (
      <Link className='game-selection' to={this.props.link}>
      <img src={this.props.imgSource}/>
      <p>{this.props.name}</p>
      </Link>
    )
  }
}

export default Games;