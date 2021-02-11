import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../../App.css';
import {charToMorse, morseToChar} from "./charMorseConv";
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import {initial, Buttons, resetInputTime, resetInputLength} from "./Common/Functions";


var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

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
    const fSize = size +'vh';
    const sfSize = size/3 +'vh';

    resetInputLength(input, setInput);
    clearTimeout(t);
    t = resetInputTime(t, input, setInput, resetTimer);

    if (input === currentMorse){
        setAnim(!anim);
        setIndex(prevState => prevState + 1);
        setInput("");
    }

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
                <div>
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

export default NoHelpAlphabet;