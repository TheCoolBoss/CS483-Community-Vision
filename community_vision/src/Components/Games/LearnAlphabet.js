import React, { useState } from 'react';
import ReactDom from 'react-dom';
import '../../App.css';
import { useSpring, animated } from 'react-spring';
import {charToMorse, morseToChar} from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import Display from "./Common/Display";
//import { useTransition, animated } from 'react-spring'

var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * @return {null}
 */
function LearnAlphabet() {
    var [index, setIndex] = useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);
    var [input, setInput] = useState('');
    var output = morseToChar(input);
    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);
    const [anim, setAnim] = useState(true);


    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);

    if (input.length > 6){
        setInput('');
    }
    if (input === currentMorse){
        setAnim(!anim);
        setIndex(prevState => prevState + 1);
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

    ReactDom.render(<Display currentInput = {input} currentOutput = {output} currentLetter = {currentLetter} currentMorse = {currentMorse}/>,
        document.getElementById("root"));

    return null;
}

export default LearnAlphabet;