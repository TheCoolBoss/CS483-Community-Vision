import React, {forwardRef, useImperativeHandle, useState} from 'react';
import '../../App.css';
import { useSpring, animated } from 'react-spring';
import {charToMorse, morseToChar} from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3';
import dotSound from '../Assets/Sounds/dot.mp3';
import {initial, Buttons, resetInputTime, resetInputLength} from "./Common/Functions";
import spacebar from '../Assets/Images/spacebar.png';
import enterButton from '../Assets/Images/enterButton.png';

/*
* Game that teaches the numbers in Morse Code
*
* 
* Created : 10/20/2020
* Modified: 10/30/2020
*/


var t; //timeout
var list = "0123456789" //list that you go through
var textIndex = 0;


// function showImage() {
//     var x = document.getElementById("tutorialImage");
//     if(x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.displau = "none";
//     }
// }

// function updatetutorial() {
//     var text = document.getElementById('tutorialText').innerHTML;
//     var space = document.getElementById('spaceImage');
//     var enter = document.getElementById('enterImage');

//     if (textIndex == 0) {
//         document.getElementById('tutorialText').innerHTML = 'This game consists of two buttons at the bottom of the page';
//         textIndex++;
//     } else if (textIndex == 1) {
//         document.getElementById('tutorialText').innerHTML = 'This button is used for the dots and can be accessed through the space button or by clicking here!';
//         document.getElementById('dotButton').style.backgroundColor = "yellow";
//         document.style.display = "block";
//         textIndex++;
//     } else if (textIndex == 2) {
//         document.getElementById('dotButton').style.backgroundColor = document.getElementById('dashButton').style.backgroundColor;
//         document.getElementById('tutorialText').innerHTML = 'THis button is used for the dashes and can be accessed through the enter button or by clicking here!';
//         document.getElementById('dashButton').style.background = "yellow";
//         space.style.display = "none";
//         enter.style.display = "block";
//         textIndex++;
//     } else if (textIndex == 3) {
//         document.getElementById('dashButton').style.backgroundColor = document.getElementById('dotButton').style.backgroundColor;
//         document.getElementById('tutorialText').innerHTML = 'Enter the correct Morse Code shown here!';
//         document.getElementById('sampleMorse').style.backgroundColor = "yellow";
//         enter.style.display = "none";
//         textIndex++;
//     } else if (textIndex == 4) {
//         document.getElementById('sampleMorse').style.backgroundColor = document.getElementById('dashButton').style.backgroundColor;
//         document.getElementById('tutorialText').innerHTML = 'Enter the correct code and move onto the next letter. Have Fun Learning the Morse Alphabet!';
//         textIndex = 0;
//     }
// }

//
const LearnNumbers = forwardRef((props, ref) => {
    var [randomNumber, setRandomNumber] = useState(0);
    var [index, setIndex] = useState(0); //hooks: everytime you change a hook the page reloads
    var currentNumber;
    if (index < list.length) {
        currentNumber = list[index];
    } else { //once they finish the all the number, it randomly selects another number
        currentNumber = list[randomNumber];
    }
    var currentMorse = charToMorse(currentNumber);
    var [input, setInput] = useState('');
    var output = morseToChar(input);
    const [anim, setAnim] = useState(true);

    //setting stuff
    const [volume, setVolume] = useState(() => initial('volume'));
    const [size, setSize] = useState(() => initial('size'));
    const [speed, setSpeed] = useState(() => initial('speed'));
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [buttonColor, setButtonColor] = useState(() => initial('buttonColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const resetTimer = speed * 1000; //reset timer in milliseconds
    const fSize = size + 'vh';
    const sfSize = size / 3 + 'vh';

    //sounds of buttons
    const [playDash] = useSound(
        dashSound,
        {volume: volume / 100}
    );
    const [playDot] = useSound(
        dotSound,
        {volume: volume / 100}
    );

    
    //resets the length of the input if its too long
    resetInputLength(input, setInput); 
    //clears the timeout function
    clearTimeout(t);
    //resets the input from the user after time
    t = resetInputTime(t, input, setInput, resetTimer);

    // the right morse code is inputted, move to next number
    if (input === currentMorse) {
        setAnim(!anim);
        setIndex(prevState => prevState + 1);
        setInput("");
        //gets a random number for the next number after theyre finished
        setRandomNumber(Math.floor(Math.random() * 10));
    }

    // tracks keycodes for space button and enter button input 
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

    //takes 2 sec for the animation to delete 
    var d = 2000;
    //if not, then it will set the animation to 0 and doesnt do anything, doesnt animate 
    //when its not suppose to be animating
    if (!anim) {
        d = 0;
        t = setTimeout(function () {
            setAnim(!anim)
        }, 100);
    }
    //the animation itself
    var {x} = useSpring({from: {x: 0}, x: anim ? 1 : 0, config: {duration: d}})

    //sets all the settings the user wants
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
    //styling of the page
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
                    <animated.h1 style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize,
                        opacity: x.interpolate({range: [0, 1], output: [0, 1]})
                    }}>{currentNumber}</animated.h1>
                    <animated.p style={{
                        lineHeight: 0,
                        color: fontColor,
                        fontSize: sfSize,
                        opacity: x.interpolate({range: [0, 1], output: [0, 1]})
                    }}>{currentMorse}</animated.p>
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

export default LearnNumbers;