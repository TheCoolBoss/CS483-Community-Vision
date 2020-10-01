import React from 'react';
import '../../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';

/*
* Game that shows a picture and word that associates with that picture
* The user have to put in the correct sequence of morse code
*
* 
* Created : 9/28/2020
* Modified: 9/30/2020
*/

//Variables for time
var t;
var resetTimer = 1500; //reset timer in milliseconds


//Temp function(will move to another .js file)
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
//Temp function(will be move to another .js file)
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


function LearnWord () {
    //Run generate data
    //generateData();

    //Get the data
    var gameData = require('./WordGameData.json');

    var [correct, setCorrect] = React.useState('');         //The correct words that the user got so far
    var [wordIndex, setWordIndex] = React.useState(0);      //Keeping track of current letter in current word
    var [input, setInput] = React.useState('');             //Track user input
    var [gameIndex, setGameIndex] = React.useState(0);      //Index to track the current word
    var currentWord = gameData[gameIndex].name;             //Word that the user needs to type
    var currentLetter = currentWord[wordIndex];             //Current letter to be type
    var currentMorse = charToMorse(currentLetter);          //Current morse code the user is typing
    var output = morseToChar(input);                        //Get current character from user input
    var img = require('' + gameData[gameIndex].imagePath);  //Get the image source

    //Reset input after 1.5 second if no new input is being enter
    clearTimeout(t);
    t = setTimeout(function(){
        setInput('');
    }, resetTimer);
    //Reset input if the length is greater than 6
    if (input.length > 6){
        setInput('');
    }
    
    //Check for matching current morse sequence to current letter
    if (input === currentMorse) {
        setCorrect(correct + currentWord[wordIndex]);
        setInput('');
        setWordIndex(prevState => prevState + 1);
    }

    //Check when the user complete the whole word
    if (correct.localeCompare(currentWord) === 0) {
        //Set the new word
        setGameIndex(prevState => prevState + 1);
        //Reset word index
        setWordIndex(0);
        //Reset correct
        setCorrect('');
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
                    <Container>
                        <img src={img} style={{width: '20%', height: '20%', padding: 0}} />
                        <Grid container justify='center'>
                            <Grid>
                                <p style={{color: '#00FF00', fontSize: 60, padding: 0}}>{correct}</p>
                            </Grid>
                            <Grid>
                                <p style={{color: '#ffaba6', fontSize: 60, padding: 0, textDecoration: 'underline'}}>{currentLetter}</p>
                            </Grid>
                            <Grid>
                                <p style={{color: '#ffaba6', fontSize: 60, padding: 0}}>{currentWord.substr(wordIndex+1)}</p>
                            </Grid>
                        </Grid>
                    </Container>
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
    )
}

export default LearnWord