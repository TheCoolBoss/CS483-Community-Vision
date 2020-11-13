import React from 'react';
import '../../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./../charMorseConv";
import useSound from 'use-sound';
import {Transition, animated} from 'react-spring/renderprops';

/*
* Game that shows a picture and word that associates with that picture
* The user have to put in the correct sequence of morse code for the first letter
*
* 
* Created : 10/18/2020
* Modified: 10/11/2020
*/

//Variables for time
var t;
var resetTimer = 1500; //reset timer in milliseconds


function LearnWordBeginner () {
    //Get the data
    var gameData = require('./WordGameData.json');
    
    //Track user input
    var [input, setInput] = React.useState('');

    //correct input tracker
    var [isCorrect, setIsCorrect] = React.useState(false);
    
    //Get current character from user input
    var output = morseToChar(input);

    //Index to track the current word
    var [gameIndex, setGameIndex] = React.useState(0);

    //Get the image source
    var img = require('' + gameData[gameIndex].imagePath);

    //Word that the user needs to type
    var currentWord = gameData[gameIndex].name;

    //Current letter to be type(first letter)
    var currentLetter = currentWord[0];

    //Current morse code the user is typing                  
    var currentMorse = charToMorse(currentLetter);

    //Get the sound of current word
    var soundSrc = require('./WordSound/' + currentWord.toLowerCase() + '.flac');
    var [playCurrWordSound] = useSound(soundSrc);

    //Reset input after 1.5 second if no new input is being enter
    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);

    //Reset input if the length is greater than 6
    if (input.length > 6){
        setInput('');
    }

    React.useEffect(() => {
        //Check for matching current morse sequence to current letter
        if (input === currentMorse) {
            //Play current sound of word
            playCurrWordSound();
            setIsCorrect(true);
            //Move to the next word
            setTimeout(function () {
                setGameIndex(prevState => prevState + 1);
                setInput('');
                setIsCorrect(false);
            }, 2000);
        }
    }, [input]);

    // tracks keycodes for space button  and enter button input 
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            setInput(input + '•');
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
        }
    };

    return (
        <div style={{backgroundColor: '#01214f', height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
            <div style={{gridArea: 'middle'}}>
                <div>
                    <Container>
                        <Transition
                            native
                            reset
                            unique
                            items={img}
                            from={{opacity: 0, transform: 'translate3d(100%,0,0)'}}
                            enter={{opacity: 1, transform: 'translate3d(0%,0,0)'}}
                            leave={{opacity: 0, transform: 'translate3d(-50%,0,0)'}}
                            >
                            {show => show && (props => 
                                <animated.image style={props}>
                                    <img src={img} alt={currentWord.toLowerCase()} style={{width: '25%', height: '20%', padding: 0}}/>
                                </animated.image>
                            )}
                        </Transition>
                        {isCorrect
                            ?
                            <Grid container justify='center'>
                                <Grid>
                                    <p style={{lineHeight: 0, color: '#00FF00', fontSize: 60, padding: 0}}>{currentWord}</p>
                                </Grid>
                            </Grid>
                            :
                            <Grid container justify='center'>
                                <Grid>
                                    <p style={{lineHeight: 0, color: '#ffaba6', fontSize: 60, padding: 0, textDecoration: 'underline'}}>{currentLetter}</p>
                                </Grid>
                                <Grid>
                                    <p style={{lineHeight: 0, color: '#ffaba690', fontSize: 60, padding: 0}}>{currentWord.substr(1)}</p>
                                </Grid>
                            </Grid>
                        }
                        <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '7vh'}}>{currentMorse}</p>
                    </Container>
                </div>
            </div>
            <div style={{gridArea: 'bottom'}}>
                <Container>
                    <Grid container justify='center' spacing={0}>
                        <Grid item xs={3} sm={2}>
                            <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '6vh'}}>{input}</p>
                        </Grid>
                        <Grid item xs={0}>
                            <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '6vh'}}>|</p>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '6vh'}}>{output}</p>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dotButton" style={{backgroundColor: '#01214f', width: '100%', height: '20vh', fontSize: '20vh', color: '#ffaba6'}} onClick={function(){
                                            setInput(input + '•');
                                    }}>•</button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dashButton" style={{backgroundColor: '#01214f', width: '100%', height: '20vh', fontSize: '20vh', color: '#ffaba6'}} onClick={function(){
                                        setInput(input + '-');
                                    }}>-</button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default LearnWordBeginner