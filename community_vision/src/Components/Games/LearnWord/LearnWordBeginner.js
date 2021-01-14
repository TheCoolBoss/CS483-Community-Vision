import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import '../../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./../charMorseConv";
import useSound from 'use-sound';
import {Transition, animated} from 'react-spring/renderprops';
import dashSound from '../../Assets/Sounds/dash.mp3'
import dotSound from '../../Assets/Sounds/dot.mp3'
import EndGame from './EndGame'


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

function initial(type){
    if(localStorage.getItem(type) != null){
        return localStorage.getItem(type);
    }
    if(type === 'volume'){
        return 50;
    } else if(type === 'size'){
        return 29;
    } else if(type === 'speed'){
        return 1.5;
    } else if(type === 'backgroundColor'){
        return 'blue';
    } else if(type === 'fontColor'){
        return 'white';
    }
}


const LearnWordBeginner = forwardRef((props, ref) => {
    //Get the data
    var gameData = require('./WordGameData.json');
    
    //Track user input
    var [input, setInput] = useState('');

    //correct input tracker
    var [isCorrect, setIsCorrect] = useState(false);
    
    //Get current character from user input
    var output = morseToChar(input);

    //Index to track the current word
    var [gameIndex, setGameIndex] = useState(0);

    var [finished, setFinished] = useState(() => initial(false));

    //Get the image source
    var img = require('' + gameData[gameIndex].imagePath);

    //Word that the user needs to type
    var currentWord = gameData[gameIndex].name;

    //Current letter to be type(first letter)
    var currentLetter = currentWord[0];

    //Current morse code the user is typing                  
    var currentMorse = charToMorse(currentLetter);

    //Settings
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed*1000; //reset timer in milliseconds
    const fSize = (size-3) +'vh';

    //Get the sound of current word
    var soundSrc = require('./WordSound/' + currentWord.toLowerCase() + '.flac');
    var [playCurrWordSound] = useSound(soundSrc, {volume: volume/100});
    const [playDash] = useSound(dashSound, {volume: volume/100});
    const [playDot] = useSound(dotSound, {volume: volume/100});

    //Reset input after 1.5 second if no new input is being enter
    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);

    //Reset input if the length is greater than 6
    if (input.length > 6){
        setInput('');
    }

    useEffect(() => {
        //Check for matching current morse sequence to current letter
        if (input === currentMorse) {
            //Play current sound of word
            playCurrWordSound();
            setIsCorrect(true);
            //Move to the next word
            setTimeout(function () {
                if(gameIndex < 25) {
                    setGameIndex(prevState => prevState + 1);
                }
                else {
                    setGameIndex(25);
                    setFinished(true);
                }
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
            playDot();
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
            playDash();
        }
    };

    useImperativeHandle(
        ref,
        () => ({
            update() {
                setVolume(initial('volume'));
                setSize(initial('size'));
                setSpeed(initial('speed'));
                setBackgroundColor(initial('backgroundColor'));
                setFontColor(initial('fontColor'));
            }
        }),
    )

    return (
        <div>
            {finished ? <EndGame level='beginner' background={backgroundColor} fontColor={fontColor}/> : null}
            <div style={{backgroundColor: backgroundColor, height: '90vh', width: '100vw', display: 'grid', gridTemplate: '8fr 8fr / 1fr', gridTemplateAreas: '"top" "bottom'}}>
                <div style={{gridArea: 'top'}}>
                    <div style={{width: '45vw', height:'40vh', float: 'left'}}>
                        <Transition
                            native
                            reset
                            unique
                            items={img}
                            from={{opacity: 0}}
                            enter={{opacity: 1}}
                            leave={{opacity: 0}}
                        >
                            {img => img && (props => 
                                <animated.image style={props}>
                                    <img src={img} alt={currentWord.toLowerCase()} style={{float: 'right', width: '50%', height: '100%'}}/>
                                </animated.image>
                            )}
                        </Transition>
                    </div>
                    <div style={{width: '55vw', height:'40vh', float: 'right'}}>
                        {isCorrect
                        ?
                        <h1 style={{lineHeight: 0, color: '#00FF00', fontSize: fSize}}>{currentWord}</h1>
                        :
                        <h1 style={{lineHeight: 0, fontSize: fSize}}>
                            <span style={{color: fontColor, textDecoration: 'underline'}}>{currentLetter}</span>
                            <span style={{color: fontColor, opacity: 0.5}}>{currentWord.substr(1)}</span>
                        </h1>
                        }
                        <p style={{lineHeight: 0, color: fontColor, fontSize: fSize}}>{currentMorse}</p>
                    </div>
                </div>
                <div style={{gridArea: 'bottom'}}>
                    <Container>
                        <Grid container justify='center' spacing={0}>
                            <Grid item xs={3} sm={2}>
                                <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh'}}>{input}</p>
                            </Grid>
                            <Grid item xs={0}>
                                <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh'}}>|</p>
                            </Grid>
                            <Grid item xs={3} sm={2}>
                                <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh'}}>{output}</p>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' spacing={2}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dotButton" style={{backgroundColor: backgroundColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                                setInput(input + '•');
                                                playDot();
                                        }}>•</button>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dashButton" style={{backgroundColor: backgroundColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                            setInput(input + '-');
                                            playDash();
                                        }}>-</button>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    )
})

export default LearnWordBeginner