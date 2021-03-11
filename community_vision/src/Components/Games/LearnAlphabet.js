import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Container } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { charToMorse, morseToChar } from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import spacebar from '../Assets/Images/spacebar.png'
import enterButton from '../Assets/Images/enterButton.png'
import { initial, Buttons, resetInputTime, resetInputLength, BackButton } from "./Common/Functions";
import { useHistory } from "react-router-dom";
import { Transition } from 'react-spring/renderprops';


var t;
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var textIndex = 0;


function showImage() {
    var x = document.getElementById("tutorialImage");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function updateTutorial() {
    var text = document.getElementById('tutorialText').innerHTML;
    var space = document.getElementById('spaceImage');
    var enter = document.getElementById('enterImage');


    if (textIndex == 0) {
        document.getElementById('tutorialText').innerHTML = 'This game consists of two buttons at the bottom of the page';

        textIndex++;
    } else if (textIndex == 1) {
        document.getElementById('tutorialText').innerHTML = 'This button is used for the dots and can be accessed through the space button or by clicking here!';
        document.getElementById('dotButton').style.backgroundColor = "yellow";
        space.style.display = "block";
        textIndex++;
    } else if (textIndex == 2) {
        document.getElementById('dotButton').style.backgroundColor = document.getElementById('dashButton').style.backgroundColor;
        document.getElementById('tutorialText').innerHTML = 'This button is used for the dashes and can be accessed through the enter button or by clicking here!';
        document.getElementById('dashButton').style.backgroundColor = "yellow";
        space.style.display = "none";
        enter.style.display = "block";
        textIndex++;
    } else if (textIndex == 3) {
        document.getElementById('dashButton').style.backgroundColor = document.getElementById('dotButton').style.backgroundColor;
        document.getElementById('tutorialText').innerHTML = 'Enter the correct Morse Code shown here!';
        document.getElementById('sampleMorseCode').style.color = document.getElementById('dotButton').style.backgroundColor;
        enter.style.display = "none";
        textIndex++;
    } else if (textIndex == 4) {
        // change this in your tutorials to change the color of the divs
        document.getElementById('sampleMorseCode').style.color = document.getElementById('dotButton').style.color;
        document.getElementById('tutorialText').innerHTML = 'Enter the correct code and move onto the next letter. Have Fun Learning the Morse Alphabet!';
        textIndex++;
        // change color back to regular
    } else if (textIndex == 5) {
        // changes smaple morse back to normal color
        document.getElementById('sampleMorse').style.color = document.getElementById('dashButton').style.backgroundColor;
        textIndex = 0;
        document.getElementById("tutorialMenu").onMouseDown();
    }
}

const LearnAlphabet = forwardRef((props, ref) => {

    const history = useHistory();
    function backToGames() {
        history.push("/games");
    }

    var [index, setIndex] = useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);
    var [input, setInput] = useState('');
    var output = morseToChar(input);
    const [anim, setAnim] = useState(true);

    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const fSize = size + 'vh';
    const sfSize = size / 3 + 'vh';

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

    var [startScreen, setStartScreen] = useState(true);
    var [endScreen, setEndScreen] = useState(false);

    resetInputLength(input, setInput);

    React.useEffect(() => {
        if (input === currentMorse) {
            playCurrentLetterSound();
            setTimeout(() => {
                setAnim(!anim);
                if ( index != list.length - 1 ) {
                    setIndex(prevState => prevState + 1);
                } else {
                    setIndex(0);
                    setEndScreen(true);
                }
            }, 2000)
        }
    }, [input])

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
                setStartScreen(false);
            } else if (endScreen) {
                setEndScreen(false);
            } else {
                setInput(input + '-');
                playDash();
                document.getElementById('dashButton').focus();
                clearTimeout(t);
                t = resetInputTime(t, input, setInput, resetTimer);
            }
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
                                        }}>Learn Alphabet
                                        </h1>
                                        <br />
                                        <p style={{
                                            marginTop: '0vh',
                                            paddingLeft: '2vw',
                                            paddingRight: '2vw',
                                            fontSize: '4vh'
                                        }}>Type the morse of all the letters in the alphabet.
                                        </p>
                                    </Card>
                                </Grid>
                                <br />
                                <Grid item style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', height: '100%', width: '100%', cursor: 'pointer' }}
                                            onMouseDown={function () {
                                                if (startScreen) {
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
                                        }}>Yay!
                                        </h1>
                                        <br />
                                        <p style={{
                                            marginTop: '0vh',
                                            paddingLeft: '2vw',
                                            paddingRight: '2vw',
                                            fontSize: '8vh',
                                            marginBottom: '0vh'
                                        }}>You have learned the alphabet in morse.
                                        </p>
                                    </Card>
                                </Grid>
                                <Grid item xs={4} style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', cursor: 'pointer', height: '100%', width: '100%' }}
                                            onMouseDown={function () {
                                                backToGames();
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
                                                setEndScreen(false);
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
                {/* <div style={{ position: 'absolute' }}>
                    <Container>
                        <BackButton />
                        <Grid container justify='left' >
                            <Grid item>
                                <Radio />
                            </Grid>
                        </Grid>
                    </Container>
                </div> */}
                <div id="sampleMorse">
                    <animated.h1 style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize,
                        pointer: 'default',
                        userSelect: 'none',
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] })
                    }}>{currentLetter}</animated.h1>
                    <animated.p id="sampleMorseCode" style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: sfSize,
                        pointer: 'default',
                        userSelect: 'none',
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
                        marginBottom: '0vh'
                    }}>{currentMorse}</animated.p>
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
                                <CardActionArea>
                                    <button id="dotButton" style={{
                                        backgroundColor: dotButtonColor,
                                        width: '100%',
                                        height: '20vh',
                                        cursor: 'pointer'
                                    }} onMouseDown={function () {
                                        setInput(input + '•');
                                        playDot();
                                        clearTimeout(t);
                                        t = resetInputTime(t, input, setInput, resetTimer);
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
                                    <button id="dashButton" style={{
                                        backgroundColor: dashButtonColor,
                                        width: '100%',
                                        height: '20vh',
                                        fontSize: '20vh',
                                        color: fontColor,
                                        cursor: 'pointer'
                                    }} onMouseDown={function () {
                                        setInput(input + '-');
                                        playDash();
                                        clearTimeout(t);
                                        t = resetInputTime(t, input, setInput, resetTimer);
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
    );
})

const Radio = () => {
    const [isToggled, setToggle] = useState(false);
    const menubg = useSpring({ background: isToggled ? "#6ce2ff" : "#ebebeb" });
    const { y } = useSpring({
        y: isToggled ? 180 : 0
    });
    const menuAppear = useSpring({
        transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
        opacity: isToggled ? 1 : 0
    });

    return (
        <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
            <animated.button
                style={menubg}
                value="!toggled"
                className="radiowrapper"
                onMouseDown={() => setToggle(!isToggled)}
                id="tutorialMenu"
            >
                <div className="radio">
                    <p>Tutorial</p>
                    <animated.p
                        style={{
                            transform: y.interpolate(y => `rotateX(${y}deg)`)
                        }}
                    >
                        ▼
                    </animated.p>
                </div>
            </animated.button>
            <animated.div style={menuAppear}>
                {isToggled ? <RadioContent /> : null}
            </animated.div>
        </div>
    );
};


// use state object and set it to 0 initially 
const RadioContent = () => {
    return (
        <div className="radiocontent" >
            <a href="#" alt="Home">
            </a>
            <button id='4' onMouseDown={function () {
                updateTutorial();
            }} style={{ fontSize: '5vh' }}>Next</button>
            <p id="tutorialText" value="Change Text">Welcome to the Learn Alphabet Game! This game teaches you the Morse Code Alphabet! </p>
            <img src={spacebar} alt="Spacebar" id="spaceImage" style={{ display: "none" }}></img>
            <img src={enterButton} alt="Enter Button" id="enterImage" style={{ display: "none" }}></img>
        </div>
    );
};

export default LearnAlphabet;