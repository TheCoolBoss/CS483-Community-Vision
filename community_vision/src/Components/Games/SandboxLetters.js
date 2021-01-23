import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import { useTransition, animated } from 'react-spring';
import {Buttons, initial} from "./Common/Functions";

var t;
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const SandboxLetters = forwardRef((props, ref) => {
    var [input, setInput] = React.useState('');
    var output = morseToChar(input);
    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);

    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const fSize = size + 'vh';
    const sfSize = size / 3 + 'vh';

    clearTimeout(t);
    t = setTimeout(() =>
        {
            setInput('')
        }
        , resetTimer);

    if (input.length > 6) {
        setInput('');
    }

    document.onkeydown = function (evt) {
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
        <div style={{
            backgroundColor: backgroundColor,
            height: '90vh',
            width: '100vw',
            display: 'grid',
            gridTemplate: '8fr 8fr / 1fr',
            gridTemplateAreas: '"top" "bottom'
        }}>
            <div style={{gridArea: 'top'}}>
                <div>
                    <animated.h1 style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize
                    }}>{output}</animated.h1>
                    <animated.h1 style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: sfSize
                    }}>{input}</animated.h1>
                </div>
            </div>

            <Buttons
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                volume={volume}
                input={input}
                newInput={setInput}
                output={output}
            />
        </div>
    );
})

export default SandboxLetters;
