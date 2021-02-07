import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../../App.css';
import {morseToChar} from "./charMorseConv";
import {animated} from 'react-spring';
import useSound from "use-sound";
import dashSound from "../Assets/Sounds/dash.mp3";
import dotSound from "../Assets/Sounds/dot.mp3";
import {initial, Buttons, resetInputTime, resetInputLength} from "./Common/Functions";

var t;

const SandboxWords = forwardRef((props, ref) => {
    const [input, setInput] = React.useState('');
    const output = morseToChar(input);
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
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

    //This cannot be imported due to the additional functionality of adding to the textbox
    clearTimeout(t);
    t = setTimeout(function(){
        document.getElementById("textbox").innerHTML += output;
        setInput('');
    }, resetTimer);

    resetInputLength(input, setInput);

    // tracks keycodes for space button  and enter button input
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            setInput(input + '•');
            playDot();
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
            playDash();
        } else if (evt.keyCode === 9) {
            document.getElementById("textbox").innerHTML = "";
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
            gridTemplate: '1fr 10fr 7fr / 1fr',
            gridTemplateAreas: '"top" "middle" "bottom'
        }}>
            <div style={{gridArea: 'top'}}>
                <div>
                    <animated.h1 id = "textbox" style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize}}>&nbsp;</animated.h1>
                </div>
            </div>

            <Buttons
                fontColor={fontColor}
                backgroundColor={backgroundColor}
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

//Leave clear button here just in case

// <Grid container justify = "center">
//     <Card>
//         <CardActionArea>
//             <button id="clearButton" style={{backgroundColor: backgroundColor, width: '100%', height: '10vh', fontSize: '5vh', color: '#ffaba6'}} onClick={function(){
//                 document.getElementById("textbox").innerHTML = "";
//             }}>Clear</button>
//         </CardActionArea>
//     </Card>
// </Grid>

export default SandboxWords;
