import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../../App.css';
import { charToMorse, morseToChar } from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { initial, Buttons, resetInputLength, resetInputTime } from "./Common/Functions";
import { useHistory } from "react-router-dom";
import { Transition } from 'react-spring/renderprops'

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var t;
var interval;

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function getRandomHeight() {
    return Math.floor(Math.random() * 20) + 20;
}

function isVisible(bool) {
    if (bool) {
        return 'visible';
    } else {
        return 'hidden'
    }
}

const AlphabetRace = forwardRef((props, ref) => {

    const history = useHistory();
    function backToGames() {
        history.push("/games");
    }

    // user input
    var [input, setInput] = useState('');
    var output = morseToChar(input);

    // local variables
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [buttonColor, setButtonColor] = useState(() => initial('buttonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const [highScore, setHighScore] = useState(() => initial('alphabetRaceHS'))
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const fSize = size / 2 + 'vh';

    // dot and dash sounds
    const [playDash] = useSound(
        dashSound,
        { volume: volume / 100 }
    );
    const [playDot] = useSound(
        dotSound,
        { volume: volume / 100 }
    );

    // input resetting on timeout and length over max morse length
    resetInputLength(input, setInput);

    // tracks keycodes for space button  and enter button input 
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            if (startScreen) {

            } else if (endScreen) {
                backToGames();
            } else {
                setInput(input + '•');
                playDot();
                document.getElementById('dotButton').focus();
                clearTimeout(t);
                t = resetInputTime(t, input, setInput, resetTimer);
            }
        } else if (evt.keyCode === 13) {
            if (startScreen) {
                interval = setInterval(() => {
                    gameTick();
                }, 10);
                setStartScreen(false);
            } else if (endScreen) {
                setLives(3);
                setScore(0);
                setEndScreen(false);
                setLetters([{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }]);
                setNewHighScore(false);
                setNewSpawn(0);
                interval = setInterval(() => {
                    gameTick();
                }, 10);
            } else {
                setInput(input + '-');
                playDash();
                document.getElementById('dashButton').focus();
                clearTimeout(t);
                t = resetInputTime(t, input, setInput, resetTimer);
            }
        }
    };

    //var [startScreen, setStartScreen] = useState(true);
    var [lives, setLives] = useState(3);
    var livesDisplay = "";
    for (var i = 0; i < lives; i++) {
        livesDisplay = livesDisplay + "♥";
    }
    var [score, setScore] = useState(0);
    const scoreDisplay = 'Score: ' + score;
    var [letters, setLetters] = useState([{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }]);
    var [startScreen, setStartScreen] = useState(true);
    var [endScreen, setEndScreen] = useState(false);
    var [newHighScore, setNewHighScore] = useState(false);
    var [newSpawn, setNewSpawn] = useState(0);

    function gameTick() {
        setNewSpawn(curr => curr + 1);
        setLetters(currLetters => {
            for (var j = 0; j < currLetters.length; j++) {
                if (currLetters[j]['x'] < 0) {
                    if (currLetters.length > 1) {
                        currLetters.splice(j, 1);
                    } else {
                        currLetters = [{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }];
                    }
                    setLives(currLives => currLives - 1);
                }
                currLetters[j]['x'] = currLetters[j]['x'] - 0.05;
            }
            return [...currLetters];
        });
    }

    function highScoreText(bool) {
        if (bool) {
            return 'New Best Score!';
        } else {
            return 'Best Score:'
        }
    }

    function addLetter() {
        setLetters(currLetters => {
            var temp = [...currLetters];
            temp.push({ letter: getRandomLetter(), height: getRandomHeight(), x: 100 });
            return temp;
        });
    }

    const lettersList = letters.map((letter, index) =>
        <div style={{
            position: 'absolute',
            left: letters[index].x + 'vw',
            top: letters[index].height + 'vh',
            fontSize: fSize,
            pointer: 'default',
            userSelect: 'none',
            color: fontColor
        }}>
            {letter.letter}
        </div>
    );

    if (lives === 0) {
        if (!endScreen) {
            setEndScreen(true);
        }
        if (score > highScore) {
            localStorage.setItem('alphabetRaceHS', score);
            setHighScore(score);
            setNewHighScore(true);
        }
        clearInterval(interval);
    }

    if ( newSpawn > 250 ) {
        setNewSpawn(0);
        addLetter();
    }

    for (var j = 0; j < letters.length; j++) {
        if (letters[j].letter === output) {
            if (letters.length > 1) {
                letters.splice(j, 1);
            } else {
                letters = [{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }];
            }
            setLetters(letters);
            setScore(curr => curr + 1);
            setTimeout(function () { setInput(''); }, resetTimer / 2);
        }
    }

    useImperativeHandle(
        ref,
        () => ({
            update() {
                setVolume(initial('volume'));
                setSize(initial('size'));
                setSpeed(initial('speed'));
                setBackgroundColor(initial('backgroundColor'));
                setButtonColor(initial('buttonColor'));
                setFontColor(initial('fontColor'));
            }
        }),
    )

    return (
        <div style={{
            backgroundColor: backgroundColor,
            height: '90vh',
            width: '100vw',
            display: 'grid',
            gridTemplate: '8fr 8fr / 1fr',
            gridTemplateAreas: '"top" "middle" "bottom'
        }}>
            <Transition
                items={startScreen}
                duration={500}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {toggle =>
                    toggle
                        ? props => <div style={{
                            position: 'absolute',
                            width: '100vw',
                            height: '90vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1,
                            ...props
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'black',
                                opacity: 0.7
                            }} />
                            <Grid container direction='column' justify='center' alignItems='center' style={{ height: '100%', width: '100%', zIndex: 1 }}>
                                <Grid item style={{ userSelect: 'none', cursor: 'default' }}>
                                    <Card>
                                        <h1 style={{
                                            marginBottom: '0vh',
                                            fontSize: '8vh'
                                        }}>Alphabet Race
                                        </h1>
                                        <br />
                                        <p style={{
                                            marginTop: '0vh',
                                            paddingLeft: '2vw',
                                            paddingRight: '2vw',
                                            fontSize: '4vh'
                                        }}>Type the morse of the letters before they reach you.
                                        </p>
                                    </Card>
                                </Grid>
                                <br />
                                <Grid item style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', height: '100%', width: '100%', cursor: 'pointer' }}
                                            onMouseDown={function () {
                                                if (startScreen) {
                                                    interval = setInterval(() => {
                                                        gameTick();
                                                    }, 10);
                                                    setStartScreen(false);
                                                }
                                            }}>
                                            Start (-)
                                        </button>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        : props => <div />
                }
            </Transition>
            <Transition
                items={endScreen}
                duration={500}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {toggle =>
                    toggle
                        ? props => <div style={{
                            position: 'absolute',
                            width: '100vw',
                            height: '90vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1,
                            ...props
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'black',
                                opacity: 0.7
                            }} />
                            <Grid container justify='center' alignItems='center' style={{ height: '100%', width: '100%', zIndex: 1 }}>
                                <Grid item xs={12} style={{ userSelect: 'none', color: fontColor }}>
                                    <h1 style={{
                                        marginBottom: '0vh',
                                        fontSize: '8vh'
                                    }}>{highScoreText(newHighScore)}
                                    </h1>
                                    <br />
                                    <p style={{
                                        marginTop: '0vh',
                                        paddingLeft: '2vw',
                                        paddingRight: '2vw',
                                        fontSize: '8vh',
                                        marginBottom: '0vh'
                                    }}>{highScore}
                                    </p>
                                </Grid>
                                <Grid item xs={4} style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', cursor: 'pointer', height: '100%', width: '100%' }}
                                            onMouseDown={function () {
                                                if (endScreen) {
                                                    backToGames();
                                                }
                                            }}>
                                            Other Games (.)
                                        </button>
                                    </Card>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4} style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', cursor: ' pointer', height: '100%', width: '100%' }}
                                            onMouseDown={function () {
                                                if (endScreen) {
                                                    setLives(3);
                                                    setScore(0);
                                                    setEndScreen(false);
                                                    setLetters([{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }]);
                                                    setNewHighScore(false);
                                                    setNewSpawn(0);
                                                    interval = setInterval(() => {
                                                        gameTick();
                                                    }, 10);
                                                }
                                            }}>
                                            Try Again (-)
                                        </button>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        : props => <div />
                }
            </Transition>
            <div style={{ gridArea: 'top' }}>
                {lettersList}
                <div style={{
                    position: 'absolute',
                    right: '2vw',
                    top: '5vh',
                    fontSize: '7vh',
                    pointer: 'default',
                    userSelect: 'none',
                    color: fontColor
                }}>
                    <p>
                        {livesDisplay}
                    </p>
                </div>
                <div style={{
                    position: 'absolute',
                    left: '2vw',
                    top: '5vh',
                    fontSize: '7vh',
                    pointer: 'default',
                    userSelect: 'none',
                    color: fontColor
                }}>
                    <p>
                        {scoreDisplay}
                    </p>
                </div>
            </div>
            <div style={{ gridArea: 'middle' }}>
                <Container>
                    <Grid container justify='center' spacing={0}>
                        <Grid item sm={5}>
                            <p style={{
                                lineHeight: 0,
                                color: fontColor,
                                fontSize: '10vh',
                                textAlign: 'right',
                                pointer: 'default',
                                userSelect: 'none'
                            }}>{output}</p>
                        </Grid>
                        <Grid item xs={0}>
                            <p style={{
                                lineHeight: 0,
                                color: fontColor,
                                fontSize: '10vh',
                                pointer: 'default',
                                userSelect: 'none'
                            }}> &nbsp; </p>
                        </Grid>
                        <Grid item sm={5}>
                            <p style={{
                                lineHeight: 0,
                                color: fontColor,
                                fontSize: '10vh',
                                textAlign: 'left',
                                pointer: 'default',
                                userSelect: 'none'
                            }}>{input}</p>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dotButton" style={{
                                        backgroundColor: buttonColor,
                                        width: '100%',
                                        height: '20vh',
                                        fontSize: '20vh',
                                        color: fontColor,
                                        cursor: 'pointer'
                                    }} onMouseDown={function () {
                                        if (!startScreen) {
                                            setInput(input + '•');
                                            playDot();
                                            clearTimeout(t);
                                            t = resetInputTime(t, input, setInput, resetTimer);
                                        }
                                    }}>•
                                </button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dashButton" style={{
                                        backgroundColor: buttonColor,
                                        width: '100%',
                                        height: '20vh',
                                        fontSize: '20vh',
                                        color: fontColor,
                                        cursor: 'pointer'
                                    }} onMouseDown={function () {
                                        if (!startScreen) {
                                            setInput(input + '-');
                                            playDash();
                                            clearTimeout(t);
                                            t = resetInputTime(t, input, setInput, resetTimer);
                                        }
                                    }}>-
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

export default AlphabetRace;