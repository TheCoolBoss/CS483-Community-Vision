import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Container} from "@material-ui/core";
import React, {useState} from "react";
import useSound from "use-sound";
import dashSound from "../../Assets/Sounds/dash.mp3";
import dotSound from "../../Assets/Sounds/dot.mp3";

class Buttons extends React.Component
{
    render()
    {
        return (
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
        )
    }
}

export default Buttons