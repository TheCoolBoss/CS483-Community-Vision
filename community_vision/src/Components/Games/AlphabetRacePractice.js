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
import { Transition } from 'react-spring/renderprops';

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

const AlphabetRacePractice = forwardRef((props, ref) => {

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
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const [highScore, setHighScore] = useState(() => initial('alphabetRacePracticeHS'))
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const fSize = size / 2 + 'vh';
    const hSize = size / 6 + 'vh';

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
    const [handleKeyDown, setHandleKeyDown] = useState(true);
    document.onkeydown = function (evt) {
        if (!handleKeyDown) return;
        setHandleKeyDown(false);
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
                }, 20);
                setStartScreen(false);
            } else if (endScreen) {
                setLives(3);
                setScore(0);
                setEndScreen(false);
                setLetters([{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }]);
                setNewSpawn(0);
                interval = setInterval(() => {
                    gameTick();
                }, 20);
                setTimeout(function () { setNewHighScore(false); }, 600);
            } else {
                setInput(input + '-');
                playDash();
                document.getElementById('dashButton').focus();
                clearTimeout(t);
                t = resetInputTime(t, input, setInput, resetTimer);
            }
        }
    };
    document.onkeyup = function (evt) {
        setHandleKeyDown(true);
        document.activeElement.blur();
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
    var [currentInterval, setCurrentInterval] = useState(20);


    if (currentInterval != (20 - (score - score % 10) / 10) && (20 - (score - score % 10) / 10) > 0) {
        console.log((20 - (score - score % 10) / 10));
        clearInterval(interval);
        interval = setInterval(() => {
            gameTick();
        }, (20 - (score - score % 10) / 10));
        setCurrentInterval((20 - (score - score % 10) / 10));
    }

    function gameTick() {
        setNewSpawn(curr => curr + 1);
        setLetters(currLetters => {
            for (var j = 0; j < currLetters.length; j++) {
                currLetters[j]['x'] = currLetters[j]['x'] - ((((speed-4) * (0.1-0.05)) / (0.5-4)) + 0.05);
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
            color: fontColor,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
        }}>
            {letter.letter}
            <div style={{
                position: 'absolute',
                fontSize: hSize,
                textAlign: 'center',
                top: fSize
            }}>
                {charToMorse(letter.letter)}
            </div>
        </div>
    );

    if (lives === 0) {
        if (!endScreen) {
            setEndScreen(true);
        }
        if (score > highScore) {
            localStorage.setItem('alphabetRacePracticeHS', score);
            setHighScore(score);
            setNewHighScore(true);
        }
        clearInterval(interval);
    }

    if (newSpawn > ((((speed-4) * (250-500)) / (0.5-4)) + 500)) {
        addLetter();
        setNewSpawn(0);
    }

    for (var j = 0; j < letters.length; j++) {
        var tempLetters = [...letters];
        if (tempLetters[j].letter === output) {
            if (tempLetters.length > 1) {
                tempLetters.splice(j, 1);
            } else {
                setNewSpawn(0);
                tempLetters = [{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }];
            }
            setScore(currScore => currScore + 1);
            setLetters(tempLetters);
            setTimeout(function () { setInput(''); }, resetTimer / 4);
            break;
        }
        if (tempLetters[j].x < 0) {
            if (tempLetters.length > 1) {
                tempLetters.splice(j, 1);
            } else {
                setNewSpawn(0);
                tempLetters = [{ letter: getRandomLetter(), height: getRandomHeight(), x: 100 }];
            }
            setLives(currLives => currLives - 1);
            setLetters(tempLetters);
            break;
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
                setDashButtonColor(initial('dashButtonColor'));
                setDotButtonColor(initial('dotButtonColor'));
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
                                        }}>Alphabet Race Practice
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
                                                    }, 20);
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
                                <Grid item xs={9} style={{ userSelect: 'none', color: fontColor }}>
                                    <Card>
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
                                    </Card>
                                </Grid>
                                <Grid item xs={4} style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', cursor: 'pointer', height: '100%', width: '100%' }}
                                            onMouseDown={function () {
                                                if (endScreen) {
                                                    backToGames();
                                                }
                                            }}>
                                            Other Games (•)
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
                                                    setNewSpawn(0);
                                                    interval = setInterval(() => {
                                                        gameTick();
                                                    }, 20);
                                                    setTimeout(function () { setNewHighScore(false); }, 600);
                                                }
                                            }}>
                                            More Practice (-)
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

export default AlphabetRacePractice;