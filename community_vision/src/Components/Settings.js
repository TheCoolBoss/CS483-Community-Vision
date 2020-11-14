import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { SketchPicker, SwatchesPicker } from 'react-color';
import reactCSS from 'reactcss'

function initial(type){
    if(localStorage.getItem(type) != null){
        return localStorage.getItem(type);
    }
    return 50;
}

function  Settings() {
    const [volume, setVolume] = React.useState(() => initial('volume'));
    const changeVolume = (event, newValue) => {
        setVolume(newValue);
    };
    const [size, setSize] = React.useState(() => initial('size'));
    const changeSize = (event, newValue) => {
        setSize(newValue);
    };
    const [speed, setSpeed] = React.useState(() => initial('speed'));
    const changeSpeed = (event, newValue) => {
        setSpeed(newValue);
    };
    localStorage.setItem('volume', volume)
    localStorage.setItem('size', size)
    localStorage.setItem('speed', speed)
    const fSize = size +'vh'
    const fMargin = -size*3/4 + 'vh'
    return (
        <div style={{position: 'relative',
            marginTop: '1.1vh',
            width: '98vw',
            margin: '1.5vh'}}>
            <Grid container justify='space-evenly'>
                <Grid style={{marginTop: '0.5vh'}} container spacing={1} lg={6} md={7} sm={10} xs={12} direction='column'>
                    <Grid item> 
                        <Card style={{borderRadius: '0px', height: '25vh'}}>
                            <h1>HOW LOUD DO YOU WANT IT?</h1>
                            <Grid container spacing={0} alignItems='center'>
                                <Grid item xs={1}>
                                    <VolumeDown/>
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={volume} onChange={changeVolume}
                                    aria-labelledby='discrete-slider' marks
                                    valueLabelDisplay='auto'
                                    step={10} min={0} max={100}/>
                                </Grid>
                                <Grid item xs={1}>
                                    <VolumeUp/>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item> 
                        <Card style={{borderRadius: '0px', height: '25vh'}}>
                            <h1>PICK THE TEXT SIZE!</h1>
                            <Grid container spacing={0} alignItems='center'>
                                <Grid item xs={1}/>
                                <Grid item xs={7}>
                                    <Slider value={size} onChange={changeSize}
                                    aria-labelledby='discrete-slider' marks
                                    valueLabelDisplay='auto'
                                    step={1} min={19} max={29}/>
                                </Grid>
                                <Grid item xs={1}/>
                                <Grid item xs={3}>
                                    <h1 style={{fontSize: fSize, margin: fMargin}}>A</h1>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item> 
                        <Card style={{borderRadius: '0px', height: '25vh'}}>
                            <h1>HOW FAST DO YOU WANT TO PLAY?</h1>
                            <Grid container spacing={0} alignItems='center'>
                                <Grid item xs={1}>
                                    <VolumeDown/>
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={speed} onChange={changeSpeed}
                                    aria-labelledby='discrete-slider' marks
                                    valueLabelDisplay='auto'
                                    step={10} min={0} max={100}/>
                                </Grid>
                                <Grid item xs={1}>
                                    <VolumeUp/>
                                    </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Grid style={{marginTop: '0.5vh'}} container spacing={1} lg={6} md={7} sm={10} xs={12} direction='column'>
                    <Grid item> 
                        <Card style={{borderRadius: '0px', height: '25vh'}}>
                            <h1>PICK A THEME!</h1>
                            <div style={{display: 'grid',
                                gridTemplate: '1fr 1fr / 1fr 1fr',
                                gridTemplateAreas: '"1" "2"',
                                width: '10vh',
                                height: '10vh',
                                marginLeft: '5%'}}>
                                <div style={{gridArea: '1', backgroundColor: 'grey', width: '5vh', height: '5vh', borderStyle: 'solid'}}/>
                                <div style={{gridArea: '1', backgroundColor: 'LightGray', width: '5vh', height: '5vh', borderStyle: 'solid'}}/>
                                <div style={{gridArea: '2', backgroundColor: 'white', width: '5vh', height: '5vh', borderStyle: 'solid'}}/>
                                <div style={{gridArea: '2', backgroundColor: 'grey', width: '5vh', height: '5vh', borderStyle: 'solid'}}/>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item> 
                        <Card style={{borderRadius: '0px', height: '25vh'}}>
                            <h1>CHOOSE BACKGROUND COLOR!</h1>
                            <Grid container direction='row'>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{height: '5vh', width: '5vh', backgroundColor: 'blue'}}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>BLUE</p>
                                    </Grid>
                                    <Grid item>
                                        <input type="radio" id="blue" name="color" value="blue"/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{height: '5vh', width: '5vh', backgroundColor: 'red'}}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>RED</p>
                                    </Grid>
                                    <Grid item>
                                        <input type="radio" id="red" name="color" value="red"/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{height: '5vh', width: '5vh', backgroundColor: 'green'}}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>Green</p>
                                    </Grid>
                                    <Grid item>
                                        <input type="radio" id="green" name="color" value="green"/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <SketchExample/>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>Pick your own color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item> 
                        <Card style={{borderRadius: '0px', height: '25vh'}}>
                            <h1>CHOOSE COLOR FOR WORDS!</h1>
                            <Grid container direction='row'>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{height: '5vh', width: '5vh', backgroundColor: 'blue'}}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>BLUE</p>
                                    </Grid>
                                    <Grid item>
                                        <input type="radio" id="blue" name="color" value="blue"/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{height: '5vh', width: '5vh', backgroundColor: 'red'}}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>RED</p>
                                    </Grid>
                                    <Grid item>
                                        <input type="radio" id="red" name="color" value="red"/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{height: '5vh', width: '5vh', backgroundColor: 'green'}}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>Green</p>
                                    </Grid>
                                    <Grid item>
                                        <input type="radio" id="green" name="color" value="green"/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <SketchExample/>
                                    </Grid>
                                    <Grid item>
                                        <p style={{margin: -2}}>Pick your own color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

class SketchExample extends React.Component {
    state = {
      displayColorPicker: false,
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
    };
  
    handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
  
    handleClose = () => {
      this.setState({ displayColorPicker: false })
    };
  
    handleChange = (color) => {
      this.setState({ color: color.rgb })
    };
  
    render() {
  
      const styles = reactCSS({
        'default': {
          color: {
            width: '5vh',
            height: '5vh',
            borderRadius: '2px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          },
          swatch: {
            background: '#fff',
            borderRadius: '2px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            marginTop: '-300px',
            marginLeft: '-20px',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
  
      return (
        <div>
          <div style={ styles.swatch } onClick={ this.handleClick }>
            <div style={ styles.color } />
          </div>
          { this.state.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.handleClose }/>
            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
          </div> : null }
  
        </div>
      )
    }
}
  

export default Settings;