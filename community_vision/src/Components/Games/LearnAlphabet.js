import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';

var t;
var resetTimer = 2000; //reset timer in milliseconds

function morseToCharacter(x) {
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

function LearnAlphabet() {
    var [input, setInput] = React.useState('');
    var output = morseToCharacter(input);
    clearTimeout(t);
    t = setTimeout(function(){
        setInput('')
    }, resetTimer);
    var currentMorse = '.-';
    var currentLetter = morseToCharacter(currentMorse);

    return (
        <div style={{backgroundColor: '#01214f',height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
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
                                    <button style={{backgroundColor: '#ffaba6', width: '100%', height: '10vh', fontSize: '5vh'}} onClick={() => setInput(input + '.')}>.</button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <button style={{backgroundColor: '#ffaba6', width: '100%', height: '10vh', fontSize: '5vh'}} onClick={() => setInput(input + '-')}>-</button>
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