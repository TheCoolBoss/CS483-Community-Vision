import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import '../../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./../charMorseConv";
import useSound from 'use-sound';
import dashSound from '../../Assets/Sounds/dash.mp3';
import dotSound from '../../Assets/Sounds/dot.mp3';
import Tutorial from './WordGameTutorial';
import EndGame from './EndGame';
import Picture from './Picture';
import {BackButton} from "../Common/Functions";
import gameData from "./WordsGameData";
import sounds from "../LetterSounds";
import StartScreen from "./LearnWordsStart";
import correctFX from "../../Assets/Sounds/correct.mp3";


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
    
    //Track user input
    var [input, setInput] = useState('');

    //correct input tracker
    var [isCorrect, setIsCorrect] = useState(false);
    
    //Get current character from user input
    var [output,setOutput] = useState('');

    //Index to track the current word
    var [gameIndex, setGameIndex] = useState(0);

    var [finished, setFinished] = useState(() => initial(false));

    var [start, setStart] = useState(true);

    //Get the image source
    var img = gameData[gameIndex].imgSrc;

    //Word that the user needs to type
    var currentWord = gameData[gameIndex].word;

    //Current letter to be type(first letter)
    var currentLetter = currentWord[0];

    //Current morse code the user is typing                  
    var currentMorse = charToMorse(currentLetter);

    //Settings
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed*1000; //reset timer in milliseconds
    const [sizeAdjust, setSizeAdjust] = useState(() => initial(3))
    const fSize = (size-sizeAdjust) +'vh';
    const [picHeight, setPicHeight] = React.useState('');
    const [picWidth, setPicWidth] = React.useState('');
    const notCurrLetterSize = (size - sizeAdjust - 7) + 'vh';

    //Get the sound of current word
    var soundSrc = gameData[gameIndex].soundSrc;
    var letterSoundSrc = sounds[currentLetter];
    var [playCurrLetterSound] = useSound(letterSoundSrc, {volume: volume/100});
    var [playCurrWordSound] = useSound(soundSrc, {volume: volume/100});
    const [playCorrectSoundFX] = useSound(correctFX, {volume: volume / 100});
    const [playDash] = useSound(dashSound, {volume: volume/100});
    const [playDot] = useSound(dotSound, {volume: volume/100});

    //Reset input after 1.5 second if no new input is being enter
    clearTimeout(t);
    t = setTimeout(function(){
        setOutput(morseToChar(input));
        setInput('');
    }, resetTimer);

    //Reset input if the length is greater than 6
    if (input.length > 6){
        setInput('');
    }

    useEffect(() => {
        //Check for matching current morse sequence to current letter
        if (output === currentLetter) {
            clearTimeout(t);
            playCorrectSoundFX();
            setIsCorrect(true);
            setTimeout(() => {
                clearTimeout(t);
                //Play current letter sound
                playCurrLetterSound();
                setTimeout(() => {
                    //Play current sound of word
                    playCurrWordSound();
                }, resetTimer)
                //Move to the next word
                setTimeout(() => {
                    clearTimeout(t);
                    if(gameIndex < 25) {
                        setGameIndex(prevState => prevState + 1);
                    }
                    else {
                        setGameIndex(25);
                        setFinished(true);
                    }
                    setOutput('');
                    setInput('');
                    setIsCorrect(false);
                }, resetTimer + 2000);
            }, resetTimer);
        }
    }, [input]);

    // tracks keycodes for space button  and enter button input 
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            setInput(input + '•');
            setOutput('');
            playDot();
        } else if (evt.keyCode === 13) {
            if(start) {
                setStart(false);
            }
            else {
                setInput(input + '-');
                setOutput('');
                playDash();
            }
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
                setDashButtonColor(initial('dashButtonColor'));
                setDotButtonColor(initial('dotButtonColor'));
                setFontColor(initial('fontColor'));
            }
        }),
    )

    //Adjust size base on the window size(still needs a bit of work)
    const updateSize = () => {
        //For readjusting image
        if(window.innerWidth < 700) {
            setPicHeight('25vh');
            setPicWidth('25vw');
        }
        else {
            setPicHeight('40vh');
            setPicWidth('25vw');
        }

        //For readjusting font
        if(window.innerWidth < 1000 && window.innerWidth > 700) {
            setSizeAdjust(7);
        }
        else if(window.innerWidth <= 700 && window.innerWidth > 600) {
            setSizeAdjust(9);
        }
        else if(window.innerWidth <= 600) {
            if(size < 24) {
                setSizeAdjust(11);
            }
            else {
                setSizeAdjust(15);
            }
        }
        else {
            setSizeAdjust(5);
        }
    }

    //On mount, make sure that the correct size of image is display
    React.useEffect(() => {
        updateSize();
    }, [])

    //Resize image when the browser is being resize
    React.useEffect(() => {
        window.addEventListener('resize', updateSize);
        //clean up event listener
        return () => window.removeEventListener('resize', updateSize);
    })

    

    return (
        <div>
            {start ? <StartScreen level={"beginner"} start={start} setStart={setStart} /> : null}
            {finished ? <EndGame level='beginner' background={backgroundColor} fontColor={fontColor}/> : null}
            <div style={{backgroundColor: backgroundColor, height: '90vh', width: '100vw', display: 'grid', gridTemplate: '8fr 8fr / 1fr', gridTemplateAreas: '"top" "bottom'}}>
                <div style={{gridArea: 'top'}}>
                    <div style={{ position: 'absolute' }}>
                        <Container>
                            <BackButton />
                            {/* <Grid container justify='left'>
                                <Grid item>
                                    <Tutorial background={backgroundColor} level='beginner' fColor={fontColor}/>
                                </Grid>
                            </Grid> */}
                        </Container>
                    </div>
                    <div style={{width: '100vw', height:'40vh'}}>
                        <Container>
                            <Grid container justify='center' spacing={0}>
                                <Grid item xs={12} sm={4} xl={6}>
                                    <Picture 
                                        img={img} 
                                        currentWord={currentWord}
                                        picWidth={picWidth}
                                        picHeight={picHeight}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} xl={6}>
                                    <div>
                                        {isCorrect
                                        ?
                                        <h1 style={{lineHeight: 0, color: '#00FF00', fontSize: fSize, textShadow: "-2px 2px 2px #000, 2px 2px 2px #000, 2px -2px 2px #000, -2px -2px 2px #000"}}>{currentWord}</h1>
                                        :
                                        <h1 style={{lineHeight: 0, fontSize: fSize}}>
                                            <span style={{color: fontColor}}>{currentLetter}</span>
                                            <span style={{color: fontColor, opacity: 0.5, fontSize: notCurrLetterSize}}>{currentWord.substr(1)}</span>
                                        </h1>
                                        }
                                        <p id="sampleMorse" style={{lineHeight: 0, color: fontColor, fontSize: fSize, margin: 0}}>{currentMorse}</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
                <div style={{gridArea: 'bottom'}}>
                    <Container>
                        <div style={{height: '10vh'}}>
                            <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh'}}>{output + input}</p>
                        </div>
                        <Grid container justify='center' spacing={2}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dotButton" style={{backgroundColor: dotButtonColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                                setInput(input + '•');
                                                setOutput('');
                                                playDot();
                                        }}>
                                            <p style={{
                                                position: 'absolute',
                                                fontSize: '55vh',
                                                margin: 0,
                                                top: '-21.25vh',
                                                width: '100%',
                                                right: '0.25%',
                                                textAlign: 'center',
                                                color: fontColor
                                            }}>•</p>
                                        </button>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dashButton" style={{backgroundColor: dashButtonColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                            setInput(input + '-');
                                            setOutput('');
                                            playDash();
                                        }}>
                                            <p style={{
                                                position: 'absolute',
                                                fontSize: '50vh',
                                                margin: 0,
                                                top: '-23vh',
                                                width: '100%',
                                                right: '0.25%',
                                                textAlign: 'center',
                                                color: fontColor
                                            }}>-</p>
                                        </button>
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