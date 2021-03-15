import useSound from 'use-sound';
import dashSound from "../../Assets/Sounds/dash.mp3";
import dotSound from "../../Assets/Sounds/dot.mp3";
import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import {spacing} from "@material-ui/system";

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
        return 2.5;
    } else if(type === 'backgroundColor'){
        return '#e8e8e8';
    } else if(type === 'fontColor'){
        return 'black';
    } else if (type === 'dashButtonColor') {
        return 'red';
    } else if (type === 'dotButtonColor') {
        return 'yellow';
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

export function Buttons(props)
{
    var t = props.t;
    const input = props.input;
    const [playDash] = useSound(
        dashSound,
        { volume: props.volume / 100 }
    );
    const [playDot] = useSound(
        dotSound,
        { volume: props.volume / 100 }
    );
    return (
        <div style={{ gridArea: 'middle' }}>
            <Container>
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={1}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            pointer: 'default',
                            userSelect: 'none'
                        }}> &nbsp; </p>
                    </Grid>
                    <Grid item sm={10}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            textAlign: 'center',
                            pointer: 'default',
                            userSelect: 'none'
                        }}>{input}</p>
                    </Grid>
                    <Grid item xs={1}>
                        <p style={{
                            lineHeight: 0,
                            color: props.fontColor,
                            fontSize: '10vh',
                            pointer: 'default',
                            userSelect: 'none'
                        }}> &nbsp; </p>
                    </Grid>
                </Grid>
                <Grid container justify='center' spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            {/* button updates */}
                            <CardActionArea>
                                <button id="dotButton" style={{
                                    backgroundColor: props.dotButtonColor,
                                    width: '100%',
                                    height: '20vh',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    fontSize: '35vh',
                                    color: props.fontColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} onMouseDown={function () {
                                    props.setInput(input + '•');
                                    playDot();
                                    clearTimeout(props.t);
                                    t = resetInputTime(props.t, input, props.setInput, props.resetTimer);
                                }}>
                                        <span
                                        >•
                                        </span>
                                </button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <button id="dashButton" style={{
                                    backgroundColor: props.dashButtonColor,
                                    width: '100%',
                                    height: '20vh',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    fontSize: '35vh',
                                    color: props.fontColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} onMouseDown={function () {
                                    props.setInput(input + '-');
                                    playDash();
                                    clearTimeout(t);
                                    t = resetInputTime(t, input, props.setInput, props.resetTimer);
                                }}>
                                    -
                                </button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}



//Button code
export function ButtonsOld(props)
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

export function BackButton()
    {
        return (
            <Link className='nav-link' to="/games">
                <button style={{
                    height: '90%',
                    width: '100%',
                    fontSize: '4vh',
                    fontWeight: 800,
                    userSelect: 'none',
                    cursor: 'pointer',
                    marginBottom: "20px"
                }}>Go back to games</button>
            </Link>
        );
    }
