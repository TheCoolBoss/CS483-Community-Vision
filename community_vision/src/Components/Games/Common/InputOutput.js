import React, {useState} from "react";
import {animated, useSpring} from "react-spring";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

class InputOutput extends React.Component
{
    render()
    {
        return (
            <Grid container justify='center' spacing={0}>
                <Grid item xs={3} sm={2}>
                    <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '10vh'}}>{this.props.currentInput}</p>
                </Grid>
                <Grid item xs={0}>
                    <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '10vh'}}>|</p>
                </Grid>
                <Grid item xs={3} sm={2}>
                    <p style={{lineHeight: 0, color: '#ffaba6', fontSize: '10vh'}}>{this.props.currentOutput}</p>
                </Grid>
            </Grid>
        )
    }
}

export default InputOutput