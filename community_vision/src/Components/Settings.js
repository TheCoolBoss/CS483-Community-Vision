import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function muteSound() {

}

function  Settings() {
    const classes =  useStyles();

    return (
        <div style={{position: 'relative', alignContent: 'center'}} className={classes.root}>
            <h1>Choose Your Game Settings</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Sound</Paper>
                    <input type="radio" id="onButton" name="soundButton" value="on" checked="checked"></input>
                    <label for="onButton">Sound On</label>
                    <input type="radio" id="offButton" name="soundButton" value="off" style={{marginLeft: '30px'}}></input>
                    <label for="offButton">Sound Off</label>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Choose Colors</Paper>
                    <input type="radio" id="colorPackOne" name="colorButton" value="" checked="checked"></input>
                    <label for="onButton">Color Pack One</label>
                    <input type="radio" id="colorPackTwo" name="colorButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="offButton">Color Pack Two</label>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Speed</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>Font Size</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{backgroundColor: '#ffd700'}}>
                        <Link className='nav-link' to="/games">
                            <button style={{width: '100%', height: '100%', fontSize: '5vh'}}>Play!</button>
                        </Link>
                    </Paper>
                    
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Settings;