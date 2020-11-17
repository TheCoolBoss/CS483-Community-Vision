import React, { useState } from 'react';
import {animated, useSpring} from "react-spring";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";



class Display extends React.Component
{
    render()
    {
        return (
            <div style={{backgroundColor: '#01214f', height: '90vh', width: '100vw', display: 'grid', gridTemplate: '1fr 10fr 7fr / 1fr', gridTemplateAreas: '"top" "middle" "bottom'}}>
                <div style={{gridArea: 'middle'}} align="center">
                    <div>
                        <animated.h1 style={{lineHeight: 0,
                            color: '#ff8e97',
                            //margin: "auto",
                            fontSize: '25vh'}}>{this.props.currentLetter}</animated.h1>
                        <animated.p style={{lineHeight: 0,
                            color: '#ffaba6',
                            fontSize: '15vh'}}>{this.props.currentMorse}</animated.p>
                        {/* fontSize: '15vh', */}
                        {/* opacity: x.interpolate({ range: [0, 1], output: [0, 1] })}}>{currentLetter}</animated.h1> */}
                        <animated.p style={{lineHeight: 0,
                            color: '#ffaba6',
                            fontSize: '7vh',
                            }}>{this.props.currentMorse}</animated.p>
                    </div>
                </div>
                <div style={{gridArea: 'bottom'}}>
                    <Container>
                        <Grid container justify='center' spacing={0}>
                            <Grid item xs={3} sm={2}>
                                <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '10vh'}}>{this.props.input}</p>
                            </Grid>
                            <Grid item xs={0}>
                                <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '10vh'}}>|</p>
                            </Grid>
                            <Grid item xs={3} sm={2}>
                                <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '10vh'}}>{this.props.output}</p>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' spacing={2}>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dotButton" style={{backgroundColor: '#01214f', width: '100%', height: '20vh', fontSize: '20vh', color: '#ffaba6'}} onClick={function(){

                                        }}>•</button>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardActionArea>
                                        <button id="dashButton" style={{backgroundColor: '#01214f', width: '100%', height: '20vh', fontSize: '20vh', color: '#ffaba6'}} onClick={function(){

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
}

export default Display