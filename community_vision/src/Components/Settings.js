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
import TextField from '@material-ui/core/TextField';

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

function valuetext(value) {
    return `${value}°C`;
  }

function  Settings() {
    const classes =  useStyles();
    //ToDo: add functionality to volume slider and sound off button click change slider value to 0
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue)  => {
        setValue(newValue);
    };

    //ToDo: need to adjust sizing so that the page is relative to rescaling and not pixel specific
    return (
        <div style={{position: 'relative', alignContent: 'center'}} className={classes.root}>
            <h1>Choose Your Game Settings</h1>
            <Grid container spacing={3} style={{position: 'relative', marginRight: '10px', marginLeft: '5px'}}>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Sound
                        <HearingIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <br></br>
                    <input type="radio" id="onButton" name="soundButton" value="" checked="checked"></input>
                    <label for="onButton">Sound On</label>
                    <input type="radio" id="offButton" name="soundButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="offButton">Sound Off</label>
                    <Grid container spacing={2}>
                        <Grid item>
                        <VolumeDown />
                        </Grid>
                        {/* insert sample sound levels here */}
                        <Grid item xs>
                            <Slider 
                                defaultValue={50}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={100}
                            />
                        </Grid>
                        <Grid item>
                        <VolumeUp />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Color Packages
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <br></br>
                    <input type="radio" id="defaultColorButton" name="colorButton" value="" checked="checked"></input>
                    <label for="defaultColorButton">Default</label>
                    <input type="radio" id="greyScaleButton" name="colorButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="greyScaleButton">Grey Scale</label>
                    <input type="radio" id="oneColorButton" name="colorButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">One-Color</label>
                    <br></br>
                    <br></br>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Background Color
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="hexCodeBackground" label="Custom Hex Code" />
                    </form>
                    <input type="radio" id="blackBackground" name="backgroundButton" value="" checked="checked" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Black</label>
                    <input type="radio" id="greyBackground" name="backgroundButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Grey</label>
                    <input type="radio" id="whiteBackground" name="backgroundButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">White</label>
                    <input type="radio" id="yellowBackground" name="backgroundButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Yellow</label>
                    <br></br>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Speed
                        <AccessAlarmsIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <Slider 
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={100}
                        style={{marginBottom: '-70px'}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Font Size
                        <FontDownloadIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <Grid container spacing={2}>
                        <Grid  item>
                            <h2 style={{marginTop: '55px', marginBottom: '-70px'}}>A</h2>
                        </Grid>
                        <Grid item xs>
                            <Slider 
                                defaultValue={50}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={100}
                                style={{marginBottom: '-70px'}}
                            />
                        </Grid>
                        <Grid  item>
                            <h2 style={{fontSize: '10vh', marginTop: '5px', marginBottom: '-30px'}}>A</h2>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Paper className={classes.paper} style={{color:"black"}}>
                        Font Color
                        <ColorLensIcon style={{marginLeft: '5px', marginBottom: '-5px'}}/>
                    </Paper>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="hexCodeFont" label="Custom Hex Code"  />
                    </form>
                    <input type="radio" id="blackFont" name="fontButton" value="" checked="checked" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Black</label>
                    <input type="radio" id="whiteFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">White</label>
                    <input type="radio" id="redFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Red</label>
                    <input type="radio" id="greenFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Green</label>
                    <input type="radio" id="yellowFont" name="fontButton" value="" style={{marginLeft: '30px'}}></input>
                    <label for="oneColorButton">Yellow</label>
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