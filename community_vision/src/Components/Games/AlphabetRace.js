import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import '../../App.css';
import { charToMorse, morseToChar } from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import {initial, Buttons, resetInputTime, resetInputLength, BackButton} from "./Common/Functions";
import { Transition } from 'react-spring/renderprops'
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tutorial from "./LearnWord/WordGameTutorial";

var t;
var alphabet = "ABCDE";

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function getRandomNum(x) {
    return Math.floor(Math.random() * x);
}

const AlphabetRace = forwardRef((props, ref) => {
    var [input, setInput] = useState('');
    var output = morseToChar(input);

    //game variables
    var [lives, setLives] = useState(3);
    var livesDisplay = "";
    for (var i = 0; i < lives; i++) {
        livesDisplay = livesDisplay + "♥";
    }
    var [score, setScore] = useState(0);
    const scoreDisplay = 'Score: ' + score;
    var [playing, setPlaying] = useState(true);
    var [item1, setItem1] = useState('');
    var [item2, setItem2] = useState('');
    var [item3, setItem3] = useState('');
    var item1Morse = charToMorse(item1);
    var item2Morse = charToMorse(item2);
    var item3Morse = charToMorse(item3);
    if (item1 === '' && item2 === '' && item3 === '') {
        var randomNum = getRandomNum(3);
        if (randomNum === 0) {
            setItem1(getRandomLetter());
        } else if (randomNum === 1) {
            setItem2(getRandomLetter());
        } else if (randomNum === 2) {
            setItem3(getRandomLetter());
        }
    }

    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [buttonColor, setButtonColor] = useState(() => initial('buttonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const fSize = size / 2 + 'vh';

    const [playDash] = useSound(
        dashSound,
        { volume: volume / 100 }
    );
    const [playDot] = useSound(
        dotSound,
        { volume: volume / 100 }
    );

    resetInputLength(input, setInput);
    clearTimeout(t);
    t = resetInputTime(t, input, setInput, resetTimer);

    if (input !== '' && input === item1Morse && item1 !== '') {
        setScore(prevScore => prevScore + 1);
        setItem1('');
        setTimeout(function () {
            setInput("");
        }, resetTimer / 2);
    } else if (input !== '' && input === item2Morse && item2 !== '') {
        setScore(prevScore => prevScore + 1);
        setItem2('');
        setTimeout(function () {
            setInput("");
        }, resetTimer / 2);
    } else if (input !== '' && input === item3Morse && item3 !== '') {
        setScore(prevScore => prevScore + 1);
        setItem3('');
        setTimeout(function () {
            setInput("");
        }, resetTimer / 2);
    }

    // tracks keycodes for space button  and enter button input 
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            setInput(input + '•');
            playDot();
            document.getElementById('dotButton').focus();
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
            playDash();
            document.getElementById('dashButton').focus();
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

            <div style={{ gridArea: 'top', }}>
                <div style={{
                    lineHeight: 0,
                    color: fontColor,
                    fontSize: fSize,
                    pointer: 'default',
                    userSelect: 'none',
                    position: 'absolute',
                }}>
                    <Transition
                        items={item1} config={{ duration: 8000 }}
                        delay={resetTimer}
                        from={{ transform: 'translate3d(100vw,0vh,0)' }}
                        enter={{ transform: 'translate3d(0vw,0vh,0)' }}
                        leave={{ opacity: 0 }}>
                        {item => styles => (
                            <p style={{ ...styles, position: 'absolute' }}>
                                {item}
                            </p>
                        )}
                    </Transition>
                    <Transition
                        items={item2} config={{ duration: 8000 }}
                        delay={resetTimer}
                        from={{ transform: 'translate3d(100vw,10vh,0)' }}
                        enter={{ transform: 'translate3d(0vw,10vh,0)' }}
                        leave={{ opacity: 0 }}>
                        {item => styles => (
                            <p style={{ ...styles, position: 'absolute' }}>
                                {item}
                            </p>
                        )}
                    </Transition>
                    <Transition
                        items={item3} config={{ duration: 8000 }}
                        delay={resetTimer}
                        from={{ transform: 'translate3d(100vw,20vh,0)' }}
                        enter={{ transform: 'translate3d(0vw,20vh,0)' }}
                        leave={{ opacity: 0 }}/*
                        onStart={() => setILS3(score)}
                        onRest={() => {
                            if (ILS3 === score) {
                                setLives((currLives) => currLives - 1);
                                if (item3 !== '') {
                                    setItem3('');
                                }
                            }
                        }}*/>
                        {item => styles => (
                            <p style={{ ...styles, position: 'absolute' }}>
                                {item}
                            </p>
                        )}
                    </Transition>
                </div>
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
            <Buttons
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                buttonColor={buttonColor}
                volume={volume}
                input={input}
                input2={input}
                newInput={setInput}
                output={output}
                output2={output}
            />
        </div>
    );
})

export default AlphabetRace;