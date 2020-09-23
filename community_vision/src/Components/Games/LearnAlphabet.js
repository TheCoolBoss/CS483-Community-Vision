import React, { useRef } from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
//import dashSound from '../../../public/dash.mp3'
//import dotSound from '../../../public/dot.mp3'
import {useSpring} from 'react-spring'
import ReactPlayer from 'react-player'

var t;
var resetTimer = 1500; //reset timer in milliseconds
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"



function morseToChar(x) {
    if (x === '.-'){
        return 'A';
    } else if (x === '-...'){
        return 'B';
    } else if (x === '-.-.'){
        return 'C';
    } else if (x === '-..'){
        return 'D';
    } else if (x === '.'){
        return 'E';
    } else if (x === '..-.'){
        return 'F';
    } else if (x === '--.'){
        return 'G';
    } else if (x === '....'){
        return 'H';
    } else if (x === '..'){
        return 'I';
    } else if (x === '.---'){
        return 'J';
    } else if (x === '-.-'){
        return 'K';
    } else if (x === '.-..'){
        return 'L';
    } else if (x === '--'){
        return 'M';
    } else if (x === '-.'){
        return 'N';
    } else if (x === '---'){
        return 'O';
    } else if (x === '.--.'){
        return 'P';
    } else if (x === '--.-'){
        return 'Q';
    } else if (x === '.-.'){
        return 'R';
    } else if (x === '...'){
        return 'S';
    } else if (x === '-'){
        return 'T';
    } else if (x === '..-'){
        return 'U';
    } else if (x === '...-'){
        return 'V';
    } else if (x === '.--'){
        return 'W';
    } else if (x === '-..-'){
        return 'X';
    } else if (x === '-.--'){
        return 'Y';
    } else if (x === '--..'){
        return 'Z';
    } else if (x === '.----'){
        return '1';
    } else if (x === '..---'){
        return '2';
    } else if (x === '...--'){
        return '3';
    } else if (x === '....-'){
        return '4';
    } else if (x === '.....'){
        return '5';
    } else if (x === '-....'){
        return '6';
    } else if (x === '--...'){
        return '7';
    } else if (x === '---..'){
        return '8';
    } else if (x === '----.'){
        return '9';
    } else if (x === '-----'){
        return '0';
    } else{
        return '';
    }
}

function charToMorse(x) {
    if (x === 'A'){
        return '.-';
    } else if (x === 'B'){
        return '-...';
    } else if (x === 'C'){
        return '-.-.';
    } else if (x === 'D'){
        return '-..';
    } else if (x === 'E'){
        return '.';
    } else if (x === 'F'){
        return '..-.';
    } else if (x === 'G'){
        return '--.';
    } else if (x === 'H'){
        return '....';
    } else if (x === 'I'){
        return '..';
    } else if (x === 'J'){
        return '.---';
    } else if (x === 'K'){
        return '-.-';
    } else if (x === 'L'){
        return '.-..';
    } else if (x === 'M'){
        return '--';
    } else if (x === 'N'){
        return '-.';
    } else if (x === 'O'){
        return '---';
    } else if (x === 'P'){
        return '.--.';
    } else if (x === 'Q'){
        return '--.-';
    } else if (x === 'R'){
        return '.-.';
    } else if (x === 'S'){
        return '...';
    } else if (x === 'T'){
        return '-';
    } else if (x === 'U'){
        return '..-';
    } else if (x === 'V'){
        return '...-';
    } else if (x === 'W'){
        return '.--';
    } else if (x === 'X'){
        return '-..-';
    } else if (x === 'Y'){
        return '-.--';
    } else if (x === 'Z'){
        return '--..';
    } else if (x === '1'){
        return '.----';
    } else if (x === '2'){
        return '..---';
    } else if (x === '3'){
        return '...--';
    } else if (x === '4'){
        return '....-';
    } else if (x === '5'){
        return '.....';
    } else if (x === '6'){
        return '-....';
    } else if (x === '7'){
        return '--...';
    } else if (x === '8'){
        return '---..';
    } else if (x === '9'){
        return '----.';
    } else if (x === '0'){
        return '-----';
    } else{
        return '';
    }
}

function LearnAlphabet() {
    var [index, setIndex] = React.useState(0);
    var currentLetter = list[index];
    var currentMorse = charToMorse(currentLetter);

    var dotAudio = new Audio('./Assets/Sounds/dot.mp3');
    var dashAudio = new Audio('./Assets/Sounds/dash.mp3');

    var [input, setInput] = React.useState('');
    var output = morseToChar(input);

    const displayLetter = useRef(null);
    const displayMorse = useRef(null);

    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);

    if (input.length > 6){
        setInput('');
    }
    if (input === currentMorse){
        setIndex(prevState => prevState + 1);
    }

    // tracks keycodes for space button  and enter button input 
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode === 32) {
            setInput(input + '.');
        } else if (evt.keyCode === 13) {
            setInput(input + '-');
        }
    };

    return (
        <div style={{backgroundColor: '#01214f', height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
            <div style={{gridArea: 'middle'}}>
                <div>
                    <h1 style={{lineHeight: 0, color: '#ff8e97', fontSize: '15vh'}}>{currentLetter}</h1>
                    <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '7vh'}}>{currentMorse}</p>
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
                                            setInput(input + '.');
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

export default LearnAlphabet;