import React, { useState } from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import {charToMorse, morseToChar} from "./charMorseConv";
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3';
import dotSound from '../Assets/Sounds/dot.mp3';
import spacebar from '../Assets/Images/spacebar.png';
import enterButton from '../Assets/Images/enterButton.png';


var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "0123456789"
var textIndex = 0;

function initial(type){
    if(localStorage.getItem(type) != null){
        return localStorage.getItem(type);
    }
    if(type === 'volume'){
        return 50;
    } else if(type === 'size'){
        return 29;
    } else if(type === 'speed'){
        return 1.5;
    } else if(type === 'backgroundColor'){
        return 'blue';
    } else if(type === 'fontColor'){
        return 'white';
    }
}

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

function LearnNumbers() {
    var [randomNumber, setRandomNumber] = useState(0);
    var [index, setIndex] = useState(0);
    var currentNumber;
    if(index < list.length) {
        currentNumber = list[index];
    } else {
        currentNumber = list[randomNumber];
    }
    var currentMorse = charToMorse(currentNumber);
    var [input, setInput] = useState('');
    var output = morseToChar(input);
    const [anim, setAnim] = useState(true);

    const [volume] = React.useState(() => initial('volume'));
    const [size] = React.useState(() => initial('size'));
    const [speed] = React.useState(() => initial('speed'));
    const [backgroundColor] = React.useState(() => initial('backgroundColor'));
    const [fontColor] = React.useState(() => initial('fontColor'));
    const resetTimer = speed*1000; //reset timer in milliseconds
    const fSize = size +'vh';
    const sfSize = size/3 +'vh';

    const [playDash] = useSound(
        dashSound,
        { volume: volume/100}
    );
    const [playDot] = useSound(
        dotSound,
        { volume: volume/100}
    );

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
        setRandomNumber(Math.floor(Math.random() * 10));
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
    var { x } = useSpring({from: {x: 0}, x: anim ? 1 : 0, config: { duration: d } })
    
    return (
        <div style={{backgroundColor: backgroundColor, height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
            <div style={{gridArea: 'top'}}>
                <div>
                    <animated.h1 style={{lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize,
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] })}}>{currentNumber}</animated.h1>
                    <animated.p style={{lineHeight: 0,
                        color: fontColor,
                        fontSize: sfSize,
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] })}}>{currentMorse}</animated.p>
                </div>
            </div>
            <div style={{gridArea: 'middle'}}>
                <Container>
                    <Grid container justify='center' spacing={0}>
                        <Grid item sm={5}>
                            <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh', textAlign: 'right'}}>{input}</p>
                        </Grid>
                        <Grid item xs={0}>
                            <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh'}}>|</p>
                        </Grid>
                        <Grid item sm={5}>
                            <p style={{lineHeight: 0, color: fontColor, fontSize: '10vh', textAlign: 'left'}}>{output}</p>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}> 
                            <Card>
                                <CardActionArea>
                                    <button id="dotButton" style={{backgroundColor: backgroundColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                            setInput(input + '•');
                                            playDot();
                                        }}>•</button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dashButton" style={{backgroundColor: backgroundColor, width: '100%', height: '20vh', fontSize: '20vh', color: fontColor}} onClick={function(){
                                        setInput(input + '-');
                                        playDash();
                                        }}>-</button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default LearnNumbers;