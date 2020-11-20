import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { SketchPicker } from 'react-color';
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
        return 'blue';
    } else if(type === 'fontColor'){
        return 'white';
    }
}

function Settings() {
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
    localStorage.setItem('volume', volume);
    localStorage.setItem('size', size);
    localStorage.setItem('speed', (3-speed).toFixed(1));
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('fontColor', fontColor);
    const fSize = size +'vh';
    const fMargin = -size/5 +'vh';
    const isChecked = (type, color) => {
        if(type === color){
            return true;
        } else if(type === 'theme'){
            if(color === 'grayScale' && backgroundColor === 'gray' && fontColor === 'black'){
                return true;
            } else if(color === 'protan' && backgroundColor === '#A7B8F8' && fontColor === '#AE9C45'){
                return true;
            } else if(color === 'deutran' && backgroundColor === '#030303' && fontColor === '#D0A15D'){
                return true;
            } else if(color === 'tritan' && backgroundColor === '#89CFF0' && fontColor === '#FC0FC0'){
                return true;
            }
        }
        return false;
    };

    return (
        <div style={{position: 'relative',
            marginTop: '1.1vh',
            width: '100vw'}}>
            <Grid style={{ marginBottom: '1vh'}} container>
                <Grid style={{ marginLeft: '2px'}} container direction='column' xs={6} spacing={1}>
                    <Grid item>
                        <Card style={{ borderRadius: '0px', minHeight: '0vh' }}>
                            <h1 style={{ fontSize: '3vw', marginTop: '-0.2vh' }}>CHOOSE GAME VOLUME</h1>
                            <Grid container spacing={0} alignItems='center'>
                                <Grid item xs={1}>
                                    <VolumeDown />
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={volume} onChange={changeVolume}
                                        valueLabelDisplay='auto' marks
                                        step={10} min={0} max={100}
                                        scale={x => x + '%'} />
                                </Grid>
                                <Grid item xs={1}>
                                    <VolumeUp />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card style={{ borderRadius: '0px', minHeight: '0vh' }}>
                            <h1 style={{ fontSize: '3vw', marginTop: '-0.2vh' }}>CHOOSE TEXT SIZE</h1>
                            <Grid container spacing={0} alignItems='center' style={{marginTop: '-8vh'}}>
                                <Grid item xs={1} />
                                <Grid item xs={7}>
                                    <Slider value={size} onChange={changeSize}
                                        valueLabelDisplay='auto' marks
                                        step={1} min={19} max={29} />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={3}>
                                    <h1 style={{ fontSize: fSize, margin: fMargin }}>A</h1>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card style={{ borderRadius: '0px', minHeight: '0vh' }}>
                            <h1 style={{ fontSize: '3vw', marginTop: '-0.2vh'}}>CHOOSE GAME SPEED</h1>
                            <Grid container spacing={0} alignItems='center'>
                                <Grid item xs={1}>
                                    <VolumeDown />
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={speed} onChange={changeSpeed}
                                        valueLabelDisplay="auto" marks
                                        step={0.2} min={0.5} max={2.5}
                                        scale={x => (3 - x).toFixed(1)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <VolumeUp />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Grid style={{ marginLeft: '2px'}} container direction='column' xs={6} spacing={1}>
                    <Grid item>
                        <Card style={{ borderRadius: '0px', minHeight: '0vh' }}>
                            <h1 style={{ fontSize: '3vw', marginTop: '-0.2vh' }}>PICK A THEME!</h1>
                            <Grid container direction='row'>
                                <Grid container direction='column' alignItems='center' xs={3}>
                                    <Grid item>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplate: '1fr 1fr / 1fr',
                                            gridTemplateAreas: '"1" "2"',
                                            width: '6vh',
                                            height: '6vh',
                                            marginLeft: '-1.5vh'
                                        }} onClick={function () {
                                            changeBackgroundColor('gray');
                                            changeFontColor('black');
                                        }}>
                                            <div style={{ gridArea: '1', backgroundColor: 'gray', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '1', backgroundColor: 'LightGray', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: 'white', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: 'gray', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ marginTop: '1vh', marginBottom: '-0.5vh', cursor: 'default' }} onClick={function () {
                                            changeBackgroundColor('gray');
                                            changeFontColor('black');
                                        }}>Grayscale</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked('theme', 'grayScale')} type="radio" id="grayScaleTheme" name="theme" value="grayScale"
                                            onClick={() => {
                                                changeBackgroundColor('gray');
                                                changeFontColor('black');
                                            }} />
                                    </Grid>
                                </Grid>
                                <Grid container direction='column' alignItems='center' xs={3}>
                                    <Grid item>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplate: '1fr 1fr / 1fr',
                                            gridTemplateAreas: '"1" "2"',
                                            width: '6vh',
                                            height: '6vh',
                                            marginLeft: '-1.5vh'
                                        }} onClick={function () {
                                            changeBackgroundColor('#A7B8F8');
                                            changeFontColor('#AE9C45');
                                        }}>
                                            <div style={{ gridArea: '1', backgroundColor: '#AE9C45', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '1', backgroundColor: '#6073B1', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: '#A7B8F8', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: '#052955', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ marginTop: '1vh', marginBottom: '-0.5vh', cursor: 'default' }} onClick={function () {
                                            changeBackgroundColor('#A7B8F8');
                                            changeFontColor('#AE9C45');
                                        }}>Protan</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked('theme', 'protan')} type="radio" id="protanTheme" name="theme" value="blue"
                                            onClick={() => {
                                                changeBackgroundColor('#A7B8F8');
                                                changeFontColor('#AE9C45');
                                            }} />
                                    </Grid>
                                </Grid>
                                <Grid container direction='column' alignItems='center' xs={3}>
                                    <Grid item xs={3}>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplate: '1fr 1fr / 1fr',
                                            gridTemplateAreas: '"1" "2"',
                                            width: '6vh',
                                            height: '6vh',
                                            marginLeft: '-1.5vh'
                                        }} onClick={function () {
                                            changeBackgroundColor('#030303');
                                            changeFontColor('#D0A15D');
                                        }}>
                                            <div style={{ gridArea: '1', backgroundColor: '#030303', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '1', backgroundColor: '#D0A15D', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: '#A48978', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: '#030303', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ marginTop: '1vh', marginBottom: '-0.5vh', cursor: 'default' }} onClick={function () {
                                            changeBackgroundColor('#030303');
                                            changeFontColor('#D0A15D');
                                        }}>Deutran</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked('theme', 'deutran')} type="radio" id="deutranTheme" name="theme" value="blue"
                                            onClick={() => {
                                                changeBackgroundColor('#030303');
                                                changeFontColor('#D0A15D')
                                            }} />
                                    </Grid>
                                </Grid>
                                <Grid container direction='column' alignItems='center' xs={3}>
                                    <Grid item xs={3}>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplate: '1fr 1fr / 1fr',
                                            gridTemplateAreas: '"1" "2"',
                                            width: '6vh',
                                            height: '6vh',
                                            marginLeft: '-1.5vh'
                                        }} onClick={function () {
                                            changeBackgroundColor('#89CFF0');
                                            changeFontColor('#FC0FC0');
                                        }}>
                                            <div style={{ gridArea: '1', backgroundColor: '#89CFF0', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '1', backgroundColor: '#FFC0CB', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: 'white', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                            <div style={{ gridArea: '2', backgroundColor: '#FC0FC0', width: '3vh', height: '3vh', borderStyle: 'solid' }} />
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ marginTop: '1vh', marginBottom: '-0.5vh', cursor: 'default' }} onClick={function () {
                                            changeBackgroundColor('#89CFF0');
                                            changeFontColor('#FC0FC0');
                                        }}>Tritan</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked('theme', 'tritan')} type="radio" id="tritanTheme" name="theme" value="blue"
                                            onClick={() => {
                                                changeBackgroundColor('#89CFF0');
                                                changeFontColor('#FC0FC0')
                                            }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card style={{ borderRadius: '0px', minHeight: '0vh' }}>
                            <h1 style={{ fontSize: '3vw', marginTop: '-0.2vh' }}>CHOOSE BACKGROUND COLOR</h1>
                            <Grid container direction='row'>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'blue' }} onClick={() => changeBackgroundColor('blue')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }} onClick={() => changeBackgroundColor('blue')}>BLUE</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked(backgroundColor, 'blue')} type="radio" id="blueBackgroundColor" name="backgroundColor" value="blue" onClick={() => changeBackgroundColor('blue')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'red' }} onClick={() => changeBackgroundColor('red')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }} onClick={() => changeBackgroundColor('red')}>RED</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked(backgroundColor, 'red')} type="radio" id="redBackgroundColor" name="backgroundColor" value="red" onClick={() => changeBackgroundColor('red')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'green' }} onClick={() => changeBackgroundColor('green')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }} onClick={() => changeBackgroundColor('green')}>GREEN</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked(backgroundColor, 'green')} type="radio" id="greenBackgroundColor" name="backgroundColor" value="green" onClick={() => changeBackgroundColor('green')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker color={backgroundColor} onColorChange={(value) => changeBackgroundColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }}>Custom color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card style={{ borderRadius: '0px', minHeight: '0vh' }}>
                            <h1 style={{ fontSize: '3vw', marginTop: '-0.2vh' }}>CHOOSE COLOR FOR WORDS</h1>
                            <Grid container direction='row'>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'white' }} onClick={() => changeFontColor('white')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }} onClick={() => changeFontColor('white')}>WHITE</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked(fontColor, 'white')} type="radio" id="whiteFontColor" name="fontColor" value="white" onClick={() => changeFontColor('white')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'black' }} onClick={() => changeFontColor('black')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }} onClick={() => changeFontColor('black')}>BLACK</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked(fontColor, 'black')} type="radio" id="blackFontColor" name="fontColor" value="black" onClick={() => changeFontColor('black')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'lightgray' }} onClick={() => changeFontColor('lightgray')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default' }} onClick={() => changeFontColor('lightgray')}>GRAY</p>
                                    </Grid>
                                    <Grid item>
                                        <input checked={isChecked(fontColor, 'lightgray')} type="radio" id="lightgrayFontColor" name="fontColor" value="lightgray" onClick={() => changeFontColor('lightgray')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker color={fontColor} onColorChange={(value) => changeFontColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', }}>Custom color!</p>
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
      color: this.props.color
    };

    componentDidUpdate(prevProps){
        if(this.props.color !== prevProps.color){
            this.setState({ color: this.props.color })
        }
    }

    handleClick = () => {
      this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
  
    handleClose = () => {
      this.setState({ displayColorPicker: false })
    };
  
    handleChange = (color) => {
      this.props.onColorChange(color.hex)
    };
  
    render() {
  
      const styles = reactCSS({
        'default': {
          color: {
            width: '5vh',
            height: '5vh',
            borderRadius: '2px',
            background: this.state.color,
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