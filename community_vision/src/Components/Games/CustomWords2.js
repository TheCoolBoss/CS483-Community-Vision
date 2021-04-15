import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import '../../App'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import { charToMorse, morseToChar} from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3';
import dotSound from '../Assets/Sounds/dot.mp3';
import EndGame from './LearnWord/EndGame';
//import Tutorial from './WordGameTutorial';
import CurrentWord from './LearnWord/CurrentWord';
import {BackButton} from "./Common/Functions";
import StartScreen from "./LearnWord/LearnWordsStart";
import letterSounds from "./LetterSounds";
import correctFX from "../Assets/Sounds/correct.mp3"

/*
* Game that shows a picture and word that associates with that picture
* The user have to put in the correct sequence of morse code
* This difficult allows user to see the sequence of morse code needed to be input
*
* 
* Created : 9/28/2020
* Modified: 11/10/2020
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

const CustomWords2 = (props) => {
    //Get the data
    var gameData = props.data;
    
    //The correct words that the user got so far
    var [correct, setCorrect] = useState('');  

    //Keeping track of current letter in current word       
    var [wordIndex, setWordIndex] = useState(0); 
    
    //Track user input
    var [input, setInput] = useState('');  
    
    //Index to track the current word
    var [gameIndex, setGameIndex] = useState(0);

    var [finished, setFinished] = useState(() => initial(false));
    var [start, setStart] = useState(true);
    
    //Word that the user needs to type
    var currentWord = gameData[gameIndex]; 
    
   
    
    //Current letter to be type
    var currentLetter = currentWord[wordIndex];
    console.log(currentLetter);
    //Current morse code the user is typing
    var currentMorse;
    if(typeof(currentLetter) == 'undefined') {
        currentMorse = "";
    }
    else {
        currentMorse = charToMorse(currentLetter.toUpperCase());
    }
    
    
    //Get current character from user input
    var [output, setOutput] = useState('');   
    

    //Settings
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed*1000; //reset timer in milliseconds
    const fSize = (size) +'vh';
    const notCurrLetterSize = (size - 7) + 'vh';

    //Get the sounds
    var letterSoundSrc = letterSounds[currentLetter];
    const [playCorrectSoundFX] = useSound(correctFX, {volume: volume / 100});
    const [playCurrLetterSound] = useSound(letterSoundSrc, {volume: volume / 100});
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
    
    //Check for correct character after each input
    useEffect (() => {
        //Check for matching current morse sequence to current letter
        if (output === currentLetter.toUpperCase()) {
            clearTimeout(t);
            playCurrLetterSound();
            setTimeout(() => {
                clearTimeout(t);
                setCorrect(correct + currentWord[wordIndex]);
                setInput('');
                setOutput('');
                setWordIndex(prevWordIndex => prevWordIndex + 1);
            }, resetTimer);
        }
    }, [input]);

    useEffect(() => {
        //Check when the user complete the whole word
        if (correct.localeCompare(currentWord) === 0) {
            clearTimeout(t);
            //Play the correct jingle
            playCorrectSoundFX();
            setTimeout(() => {
                //Delay 2 sec
                setTimeout(function () {
                    clearTimeout(t);
                    //Set the new word
                    if(gameIndex < gameData.length-1) {
                        setGameIndex(prevState => prevState + 1);
                    }
                    else {
                        //setGameIndex(25);
                        setFinished(true);
                    }
                    setOutput('');
                    //Reset word index
                    setWordIndex(0);
                    //Reset correct
                    setCorrect('');
                }, resetTimer)
            }, resetTimer);
        }
    }, [wordIndex]);
    
    var isValidLetter;
    if (typeof(currentLetter) == 'undefined') {
        isValidLetter = false;
    }
    else {
        isValidLetter = true;
    }

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

    /*
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
    */

    return (
        <div>
            {start ? <StartScreen level="medium" start={start} setStart={setStart}/> : null}
            {finished ? <EndGame level='medium' background={backgroundColor} fontColor={fontColor}/> : null}
            <div style={{backgroundColor: backgroundColor, height: '90vh', width: '100vw', display: 'grid', gridTemplate: '8fr 8fr / 1fr', gridTemplateAreas: '"top" "bottom'}}>
                <div style={{gridArea: 'top'}}>
                    <div style={{ position: 'absolute' }}>
                        <Container>
                            <BackButton />
                            {/* <Grid container justify='left'>
                                <Grid item>
                                    <Tutorial level='medium' background={backgroundColor} fontColor={fontColor}/>
                                </Grid>
                            </Grid> */}
                        </Container>
                    </div>
                    <div style={{width: '100vw', height:'40vh'}}>
                        <Container style={{userSelect: 'none'}}>
                            <Grid container justify='center' spacing={0}>
                                <Grid item xs={12}>
                                    <CurrentWord 
                                        level='medium' 
                                        fColor={fontColor}
                                        currentLetter={currentLetter}
                                        correct={correct}
                                        currentWord={currentWord}
                                        wordIndex={wordIndex}
                                        fSize={fSize}
                                        notCurrLetterSize={notCurrLetterSize}
                                        isValidLetter={isValidLetter}
                                        currentMorse={currentMorse}
                                    />
                                </Grid>
                            </Grid>
                        </Container>   
                    </div>
                </div>
                <div style={{gridArea: 'bottom'}}>
                    <Container style={{userSelect: 'none'}}>
                        <div style={{height: '10vh'}}>
                            <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh'}}>{output + input}</p>
                        </div>
                        <Grid container justify='center' spacing={2}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dotButton" style={{backgroundColor: dotButtonColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                                setInput(prevInput => prevInput + '•');
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
                                            setInput(prevInput => prevInput + '-');
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
    );
};

export default CustomWords2;