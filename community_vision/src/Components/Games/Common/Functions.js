import useSound from 'use-sound';
import dashSound from "../../Assets/Sounds/dash.mp3";
import dotSound from "../../Assets/Sounds/dot.mp3";
import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

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
        return 'blue';
    } else if(type === 'fontColor'){
        return 'white';
    }
}

//Button code
export function Buttons(props)
{
    const input = props.input;
    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);

    return(
        <div style={{gridArea: 'bottom'}}>
            <Container>
                <Grid container justify='center' spacing={0}>
                    <Grid item sm={5}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            textAlign: 'right'
                        }}>{props.input}</p>
                    </Grid>
                    <Grid item xs={0}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh'
                        }}>|</p>
                    </Grid>
                    <Grid item sm={5}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            textAlign: 'left'
                        }}>{props.output}</p>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <button id="dotButton" style={{
                                    backgroundColor: props.backgroundColor,
                                    width: '100%',
                                    height: '20vh',
                                    fontSize: '20vh',
                                    color: props.fontColor
                                }} onClick={function(){
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
                                    backgroundColor: props.backgroundColor,
                                    width: '100%',
                                    height: '20vh',
                                    fontSize: '20vh',
                                    color: props.fontColor
                                }} onClick={function(){
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


//Keyboard event handler
//Currently doesn't work
export function useEvents(evt) {
    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);
    const [input, setInput] = useState('');

    evt = evt || window.event;
    if (evt.keyCode === 32) {
        setInput(input + '•');
        playDot();
    } else if (evt.keyCode === 13) {
        setInput(input + '-');
        playDash();
    }
}