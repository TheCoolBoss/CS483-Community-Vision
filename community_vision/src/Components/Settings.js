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
    if(type === 'volume'){
        return 50;
    } else if(type === 'size'){
        return 29;
    } else if(type === 'speed'){
        return 1.5;
    } else if(type === 'backgroundColor'){
        return '#0068a6';
    } else if(type === 'fontColor'){
        return 'black';
    }
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
    const [backgroundColor, setBackgroundColor] = React.useState(() => initial('backgroundColor'));
    const changeBackgroundColor = (newValue) => {
        setBackgroundColor(newValue);
    };
    const [fontColor, setFontColor] = React.useState(() => initial('fontColor'));
    const changeFontColor = (newValue) => {
        setFontColor(newValue);
    };
    localStorage.setItem('volume', volume)
    localStorage.setItem('size', size)
    localStorage.setItem('speed', (3-speed).toFixed(1))
    localStorage.setItem('backgroundColor', backgroundColor)
    localStorage.setItem('fontColor', fontColor)
    const fSize = size +'vh'
    const fMargin = -size*3/4 +'vh'
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
                                    valueLabelDisplay='auto' marks
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
                                    valueLabelDisplay='auto' marks
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
                                    valueLabelDisplay="auto" marks
                                    step={0.2} min={0.5} max={2.5}
                                    scale={x => (3-x).toFixed(1)}
                                    />
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
                                        <input type="radio" id="blueBackgroundColor" name="backgroundColor" value="blue" onClick={() => changeBackgroundColor('blue')}/>
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
                                        <input type="radio" id="redBackgroundColor" name="backgroundColor" value="red" onClick={() => changeBackgroundColor('red')}/>
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
                                        <input type="radio" id="greenBackgroundColor" name="backgroundColor" value="green" onClick={() => changeBackgroundColor('green')}/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker/>
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
                                        <input type="radio" id="blueFontColor" name="fontColor" value="blue" onClick={() => changeFontColor('blue')}/>
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
                                        <input type="radio" id="redFontColor" name="fontColor" value="red" onClick={() => changeFontColor('red')}/>
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
                                        <input type="radio" id="greenFontColor" name="fontColor" value="green" onClick={() => changeFontColor('green')}/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker/>
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

class ColorPicker extends React.Component {
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
            marginTop: '-305px',
            marginLeft: '-110px',
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