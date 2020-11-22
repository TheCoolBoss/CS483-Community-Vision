import React, {useState} from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./charMorseConv";
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../Assets/Sounds/dot.mp3'
import {initial} from "./Common/Functions";


var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function NoHelpAlphabet() {
    var [index, setIndex] = React.useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);

    var [input, setInput] = React.useState('');
    var output = morseToChar(input);

    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);
    const [anim, setAnim] = useState(true);

    const [volume] = React.useState(() => initial('volume'));
    const [size] = React.useState(() => initial('size'));
    const [speed] = React.useState(() => initial('speed'));
    const [backgroundColor] = React.useState(() => initial('backgroundColor'));
    const [fontColor] = React.useState(() => initial('fontColor'));
    const resetTimer = speed*1000; //reset timer in milliseconds
    const fSize = size +'vh';
    const sfSize = size/3 +'vh';

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

    return (
        <div style={{backgroundColor: backgroundColor, height: '90vh', width: '100vw', display: 'grid', gridTemplate: '8fr 8fr / 1fr', gridTemplateAreas: '"top" "bottom'}}>
            <div style={{gridArea: 'top'}}>
                <div>
                    <animated.h1 style={{lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize,
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] })}}>{currentLetter}</animated.h1>
                </div>
            </div>
            <div style={{gridArea: 'bottom'}}>
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

export default NoHelpAlphabet;