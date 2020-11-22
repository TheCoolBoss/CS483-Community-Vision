import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
import {charToMorse, morseToChar} from "./charMorseConv";
import { useTransition, animated } from 'react-spring';
import useSound from "use-sound";
import dashSound from "../Assets/Sounds/dash.mp3";
import dotSound from "../Assets/Sounds/dot.mp3";
import {initial} from "./Common/Functions";

var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function SandboxWords() {
    var [index, setIndex] = React.useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);
    var [input, setInput] = React.useState('');
    var output = morseToChar(input);
    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);

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
        document.getElementById("textbox").innerHTML += output;
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
            playDot();
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
            playDash();
        } else if (evt.keyCode === 9) {
            document.getElementById("textbox").innerHTML = "";
        }
    };

    return (
        <div style={{backgroundColor: backgroundColor, height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
            <div style={{gridArea: 'middle'}}>
                <div>
                    <animated.h1 id = "textbox" style={{lineHeight: 0,
                        color: fontColor,
                        fontSize: fSize}}>{""}</animated.h1>
                    {/*<animated.h1 style={{lineHeight: 0,*/}
                    {/*    color: fontColor,*/}
                    {/*    fontSize: fSize}}>{output}</animated.h1>*/}
                    {/*<animated.p style={{lineHeight: 0,*/}
                    {/*    color: fontColor,*/}
                    {/*    fontSize: fSize}}>{input}</animated.p>*/}
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