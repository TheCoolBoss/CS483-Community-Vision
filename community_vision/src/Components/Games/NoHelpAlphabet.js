import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../../App.css';
import {charToMorse, morseToChar} from "./charMorseConv";
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import {initial, Buttons, resetInputTime, resetInputLength, BackButton} from "./Common/Functions";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import spacebar from "../Assets/Images/spacebar.png";
import enterButton from "../Assets/Images/enterButton.png";
import sounds from "./LetterSounds"
import correctFX from "../Assets/Sounds/correct.mp3";


var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

var textIndex = 0;

function updateTutorial() {
    var text = document.getElementById('tutorialText').innerHTML;
    var space = document.getElementById('spaceImage');
    var enter = document.getElementById('enterImage');

    if (textIndex == 0) {
        document.getElementById('tutorialText').innerHTML = 'This game consists of two buttons at the bottom of the page.';

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
        document.getElementById('tutorialText').innerHTML = 'Enter the correct code for the current letter and move onto the next one. Have Fun Learning the Morse Alphabet!';
        document.getElementById('current').style.backgroundColor = "yellow";
        enter.style.display = "none";
        textIndex = 0;
    }
}

const NoHelpAlphabet = forwardRef((props, ref) => {
    var [index, setIndex] = React.useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);
    var [input, setInput] = React.useState('');
    var output = morseToChar(input);
    const [anim, setAnim] = useState(true);
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [buttonColor, setButtonColor] = useState(() => initial('buttonColor'));
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed*1000; //reset timer in milliseconds
    const [playDash] = useSound(
        dashSound,
        { volume: volume / 100 }
    );
    const [playDot] = useSound(
        dotSound,
        { volume: volume / 100 }
    );

    var soundSrc = sounds[currentLetter];
    const [playCurrentLetterSound] = useSound(
        soundSrc,
        { volume: volume / 100 }
    );

    const [playCorrectSoundFX] = useSound(
        correctFX,
        { volume: volume / 100}
    );
    const fSize = size +'vh';
    const sfSize = size/3 +'vh';

    resetInputLength(input, setInput);
    clearTimeout(t);
    t = resetInputTime(t, input, setInput, resetTimer);

    React.useEffect(() => {
        if (input === currentMorse) {
            playCorrectSoundFX();
            setTimeout(() => {
                playCurrentLetterSound();
                setTimeout(() => {
                    setAnim(!anim);
                    setIndex(prevState => prevState + 1);
                    setTimeout(function () {
                        setInput("");
                    }, resetTimer);
                }, 2000)
            }, 2100);
            
        }
    }, [input])

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

    var d = 2000;
    if (!anim){
        d = 0;
        t = setTimeout(function(){
            setAnim(!anim)
        }, 100);
    }

    var { x } = useSpring({from: {x: 0}, x: anim ? 1 : 0, config: { duration: d } });

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
                setButtonColor(initial("buttonColor"));
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
            <div style={{gridArea: 'top'}}>
                <div style={{ position: 'absolute' }}>
                    <Container>
                        <BackButton />
                        <Grid container justify='left'>
                            <Grid item>
                                <Radio />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div id="current">
                    <animated.h1 style={{lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize,
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] })}}>{currentLetter}</animated.h1>
                </div>
            </div>
            <Buttons
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                buttonColor={buttonColor}
                dotButtonColor={dotButtonColor}
                dashButtonColor={dashButtonColor}
                volume={volume}
                input={input}
                setInput={setInput}
            />
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
                className="radiowrapper"
                onClick={() => setToggle(!isToggled)}
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

const RadioContent = () => {
    return (
        <div className="radiocontent" >
            <a href="#" alt="Home">
            </a>
            <p id="tutorialText" value="Change Text">Welcome to the Advanced Alphabet game! </p>
            <img src={spacebar} alt="Spacebar" id="spaceImage" style={{ display: "none" }}></img>
            <img src={enterButton} alt="Enter Button" id="enterImage" style={{ display: "none" }}></img>
            <button onClick={function () {
                updateTutorial();
            }} style={{ fontSize: '5vh' }}>Next</button>
        </div>
    );
};

export default NoHelpAlphabet;