import useSound from 'use-sound';
import dashSound from "../../Assets/Sounds/dash.mp3";
import dotSound from "../../Assets/Sounds/dot.mp3";
import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

//Help received from https://stackoverflow.com/questions/46656476/rendering-empty-space-in-react
//for making empty elements take space

//Gets game values fom local storage
export function initial(type){
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
        return 'white';
    } else if(type === 'fontColor'){
        return 'black';
    } else if (type === 'buttonColor') {
        return 'gray';
    } else if (type === 'alphabetRaceHS'){
        return 0;
    }
}

//Reset input on input > 5
export function resetInputLength(input, setInput)
{
    if (input.length > 5) {
        setInput('');
    }
}

//Clear input after timer expires
export function resetInputTime(t, input, setInput, resetTimer)
{
    t = setTimeout(() =>
        {
            setInput('');
        }
        , resetTimer);
    return t;
}

//Button code
export function Buttons(props)
{
    const input = props.input;
    const [playDash] = useSound(
        dashSound,
        { volume: props.volume / 100 }
    );
    const [playDot] = useSound(
        dotSound,
        { volume: props.volume / 100 }
    );

    return(
        <div style={{gridArea: 'middle'}}>
            <Container>
                <Grid container justify='center' spacing={0}>
                    <Grid item sm={5}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            textAlign: 'right'
                        }}>{props.output2}</p>
                    </Grid>
                    <Grid item xs={0}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh'
                        }}> &nbsp; </p>
                    </Grid>
                    <Grid item sm={5}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            textAlign: 'left'
                        }}>{props.input2}</p>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <button id="dotButton" style={{
                                    backgroundColor: props.buttonColor,
                                    width: '100%',
                                    height: '20vh',
                                    fontSize: '20vh',
                                    color: props.fontColor
                                }} onMouseDown={function(){
                                    props.newInput(input + '•');
                                    playDot();
                                }}>•
                                </button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <button id="dashButton" style={{
                                    backgroundColor: props.buttonColor,
                                    width: '100%',
                                    height: '20vh',
                                    fontSize: '20vh',
                                    color: props.fontColor
                                }} onMouseDown={function(){
                                    props.newInput(input + '-');
                                    playDash();
                                }}>-
                                </button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>);
}
