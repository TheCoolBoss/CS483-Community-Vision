import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./charMorseConv";

/*
import useSound from 'use-sound';
import dashSound from '../Assets/Sounds/dash.mp3'
import dotSound from '../../../public/dot.mp3'*/
import { useTransition, animated } from 'react-spring';

var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function SandboxLetters() {
    var [index, setIndex] = React.useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);
    var [input, setInput] = React.useState('');
    var output = morseToChar(input);

    /*
    const BoopButton = () => {
        const [play] = useSound(dashSound);
        return <button onClick={play}>Boop!</button>;
    };*/

    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);

    if (input.length > 6){
        setInput('');
    }

    // tracks keycodes for space button  and enter button input
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            setInput(input + '•');
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
        }
    };

    return (
        <div style={{backgroundColor: '#01214f', height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
            <div style={{gridArea: 'middle'}}>
                <div>
                    <animated.h1 style={{lineHeight: 0,
                        color: '#ff8e97',
                        fontSize: '15vh'}}>{output}</animated.h1>
                    <animated.p style={{lineHeight: 0,
                        color: '#ffaba6',
                        fontSize: '7vh'}}>{input}</animated.p>
                </div>
            </div>
            <div style={{gridArea: 'bottom'}}>
                <Container>
                    <Grid container justify='center' spacing={0}>
                        <Grid item xs={3} sm={2}>
                            <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '6vh'}}>{input}</p>
                        </Grid>
                        <Grid item xs={0}>
                            <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '6vh'}}>|</p>
                        </Grid>
                        <Grid item xs={3} sm={2}>
                            <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '6vh'}}>{output}</p>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dotButton" style={{backgroundColor: '#ffaba6', width: '100%', height: '10vh', fontSize: '5vh'}} onClick={function(){
                                        setInput(input + '•');
                                    }}>.</button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button id="dashButton" style={{backgroundColor: '#ffaba6', width: '100%', height: '10vh', fontSize: '5vh'}} onClick={function(){
                                        setInput(input + '-');
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

export default SandboxLetters;