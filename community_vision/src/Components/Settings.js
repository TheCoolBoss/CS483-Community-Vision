import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import HearingIcon from '@material-ui/icons/Hearing';

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
    //ToDo: mute the dot and dash sounds
    var volumeMute = true;
    volumeMute = !volumeMute;
}

function  Settings() {
    const classes =  useStyles();
    //ToDo: add functionality to volume slider and sound off button click change slider value to 0
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue)  => {
        setValue(newValue);
    };

    return (
        <div style={{position: 'relative', alignContent: 'center'}} className={classes.root}>
            <h1>Choose Your Game Settings</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Sound
                        <HearingIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <input type="radio" id="onButton" name="soundButton" value="on" checked="checked"></input>
                    <label for="onButton">Sound On</label>
                    <input type="radio" id="offButton" name="soundButton" value="off" style={{marginLeft: '30px'}}></input>
                    <label for="offButton">Sound Off</label>
                    <Grid container spacing={2}>
                        <Grid item>
                        <VolumeDown />
                        </Grid>
                        <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                        </Grid>
                        <Grid item>
                        <VolumeUp />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Choose Colors
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <input type="radio" id="colorPackOne" name="colorButton" value="" checked="checked"></input>
                    <label for="onButton">Color Pack One</label>
                    <input type="radio" id="colorPackTwo" name="colorButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="offButton">Color Pack Two</label>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Speed
                        <AccessAlarmsIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <Slider speed defaultValue={30} aria-labelledby="speed-slider" />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Font Size
                        <FontDownloadIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
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