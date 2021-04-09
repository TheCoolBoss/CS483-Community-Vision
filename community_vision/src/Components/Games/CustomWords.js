import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Container, TextField } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { charToMorse, morseToChar } from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import spacebar from '../Assets/Images/spacebar.png'
import enterButton from '../Assets/Images/enterButton.png'
import CurrentWord from './LearnWord/CurrentWord'
import gameData from "./LearnWord/WordsGameData";
import { initial, Buttons, resetInputTime, resetInputLength, BackButton } from "./Common/Functions";
import { useHistory } from "react-router-dom";
import { Transition } from 'react-spring/renderprops';

var t;
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var textIndex = 0;

const CustomWords = forwardRef((props, ref) => {
    const history = useHistory();
    function backToGames() {
        history.push("/games");
    }

    var [correct, setCorrect] = useState('');
    var [wordIndex, setWordIndex] = useState(0);
    var [input, setInput] = useState('');
    var [gameIndex, setGameIndex] = useState(0);
    var [finished, setFinished] = useState(() => initial(false));
    
    var [input, setInput] = useState('');
    var output = morseToChar(input);
    const [anim, setAnim] = useState(true);

    var [z, setWordCount] = useState(0);
    const [wordData, setWordData] = useState([]);
    var currentWord = gameData[gameIndex].word;
    var currentLetter = currentWord[wordIndex];
    var currentMorse = charToMorse(currentLetter);
    var customMorse;
    var customWord;

    // Settings
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const [sizeAdjust, setSizeAdjust] = useState(() => initial(3))
    const fSize = size + 'vh';
    const sfSize = size / 3 + 'vh';

    // Sounds
    const [playDash] = useSound(
        dashSound,
        { volume: volume / 100 }
    );
    const [playDot] = useSound(
        dotSound,
        { volume: volume / 100 }
    );
    var soundSrc = require('../Assets/Sounds/Letters/' + currentLetter + '.flac');
    const [playCurrentLetterSound] = useSound(
        soundSrc,
        { volume: volume / 100 }
    );

    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);

    function displayCustomWord() {
        var tempData = wordData;
        customWord = document.getElementById("customInput").value;
        //window.alert(customWord);
        if(customWord.length > 8) {
            window.alert("Custom Word must be less than 8 letters");
        }
        //sampleMorse = customWord;
        
        tempData.push(customWord);
        //window.alert("custom word: " + customWord);
        window.alert("wordData  " + tempData[z]+ " " +z);
        // rewrite word list once user puts more than ten letters
        if(z>10) {
            window.alert("You have reached 10 words!");
            setWordCount(1);
        }
        setWordCount(z+1);
        setWordData(tempData);
    }

    function startGame() {
        var gameBool = true;
        while(gameBool == true){}
            window.alert("word Data z "+wordData[gameIndex]);
            document.getElementById('customLetters').innerHTML = wordData[gameIndex];
            
            setGameIndex(gameIndex+1);
        }

    }

    useEffect(() => {
        if(output == currentLetter) {
            setCorrect(correct + currentWord[wordIndex]);
            setInput('');
            setWordIndex(prevWordIndex => prevWordIndex + 1);
        }
    }, [input]);

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            //implement start screen here
                setInput(input + '•');
                playDot();
                document.getElementById('dotButton').focus();
                clearTimeout(t);
                t = resetInputTime(t, input, setInput, resetTimer);
            
        } else if (evt.keyCode === 13) {
            //implement start screen here
                setInput(input + '-');
                playDash();
                document.getElementById('dashButton').focus();
                clearTimeout(t);
                t = resetInputTime(t, input, setInput, resetTimer);
            
        }
    };

    var d = 2000;
    if (!anim) {
        d = 0;
        t = setTimeout(function () {
            setAnim(!anim)
        }, 100);
    }
    var { x } = useSpring({ from: { x: 0 }, x: anim ? 1 : 0, config: { duration: d } });

    

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

    return (
        <div style={{ gridArea: 'top' }}>      
                <div id="sampleMorse">
                    <CurrentWord>
                        currentWord={customWord}
                    </CurrentWord>
                    <animated.h1 style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize,
                        pointer: 'default',
                        userSelect: 'none',
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] })
                    }}
                    id='customLetters'>{'test'}</animated.h1>
                    <animated.p id="sampleMorseCode" style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: sfSize,
                        pointer: 'default',
                        userSelect: 'none',
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
                        marginBottom: '0vh'
                    }}>{'custom morse'}</animated.p>
                </div>
                <div style={{ gridArea: 'middle' }}>
                <Container>
                    <Grid container justify='center' spacing={0}>
                        <Grid item xs={1}>
                            <p style={{
                                lineHeight: 0,
                                color: fontColor,
                                fontSize: '10vh',
                                pointer: 'default',
                                userSelect: 'none'
                            }}> &nbsp; </p>
                        </Grid>
                        <Grid item sm={10}>
                            <p style={{
                                lineHeight: 0,
                                color: fontColor,
                                fontSize: '10vh',
                                textAlign: 'center',
                                pointer: 'default',
                                userSelect: 'none'
                            }}>{input}</p>
                            <TextField style={{
                                weight: '100%',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '8vh',
                            }} 
                            id='customInput' label='Enter Custom Word Here'
                            variant='outlined'></TextField>
                            <button style={{
                                fontSize: '4vh'
                            }} onClick={function(){
                                displayCustomWord();
                            }}
                            variant='outline-secondary'>Enter Word</button>
                            <button style={{
                                fontSize: '4vh'
                            }} onClick={function(){
                                startGame();
                            }}
                            variant='outline-secondary'>Start</button>
                            <p style={{
                                fontSize: '2vh'
                            }}>Word Count: {z}</p>
                        </Grid>
                        <Grid item xs={1}>
                            <p style={{
                                lineHeight: 0,
                                color: fontColor,
                                fontSize: '10vh',
                                pointer: 'default',
                                userSelect: 'none'
                            }}> &nbsp; </p>
                            
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                {/* button updates */}
                                <CardActionArea>
                                    <button id="dotButton" style={{
                                        backgroundColor: dotButtonColor,
                                        width: '100%',
                                        height: '20vh',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        fontSize: '35vh',
                                        color: fontColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} onMouseDown={function () {
                                        setInput(input + '•');
                                        playDot();
                                        clearTimeout(t);
                                        t = resetInputTime(t, input, setInput, resetTimer);
                                    }}>
                                        <span
                                        >•
                                        </span>
                                    </button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dashButton" style={{
                                        backgroundColor: dashButtonColor,
                                        width: '100%',
                                        height: '20vh',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        fontSize: '35vh',
                                        color: fontColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} onMouseDown={function () {
                                        setInput(input + '-');
                                        playDash();
                                        clearTimeout(t);
                                        t = resetInputTime(t, input, setInput, resetTimer);
                                    }}>
                                        -
                                    </button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            </div>
    );
})

export default CustomWords;