import React, { useEffect, useState } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/core/Slider';
import volumeDown from '../Components/Assets/Images/noSound.png';
import volumeUp from '../Components/Assets/Images/sound.png';
import hare from '../Components/Assets/Images/hare.png';
import tortoise from '../Components/Assets/Images/tortoise.png';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { initial } from "./Games/Common/Functions";


function Settings(props) {
    const [volume, setVolume] = useState(() => initial('volume'));
    const changeVolume = (event, newValue) => {
        localStorage.setItem('volume', newValue);
        setVolume(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [size, setSize] = useState(() => initial('size'));
    const changeSize = (event, newValue) => {
        localStorage.setItem('size', newValue);
        setSize(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [speed, setSpeed] = useState(() => 4.5 - initial('speed'));
    const changeSpeed = (event, newValue) => {
        localStorage.setItem('speed', (4.5 - newValue).toFixed(1));
        setSpeed(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const changeBackgroundColor = (newValue) => {
        localStorage.setItem('backgroundColor', newValue);
        setBackgroundColor(newValue);
        props.updateNavBackgroundColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const changeDotButtonColor = (newValue) => {
        localStorage.setItem('dotButtonColor', newValue);
        setDotButtonColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const changeDashButtonColor = (newValue) => {
        localStorage.setItem('dashButtonColor', newValue);
        setDashButtonColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const changeFontColor = (newValue) => {
        localStorage.setItem('fontColor', newValue);
        setFontColor(newValue);
        props.updateNavFontColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const fSize = size + 'vh';
    const fMargin = -size / 4 + 'vh';
    const isChecked = (type, color) => {
        if (type === color) {
            return true;
        } else if (type === 'theme') {
            if (color === 'default' && backgroundColor === '#e8e8e8' && fontColor === 'black' && dotButtonColor === 'yellow' && dashButtonColor === 'red') {
                return true;
            }
        }
        return false;
    };

    return (
        <div style={{
            position: 'relative',
            marginTop: '1.5vh',
            top: '0vh',
            marginBottom: '2vh',
            width: '100vw'
        }}>
            <Card borderRadius='1vh'>
                <Grid style={{ marginBottom: '1vh' }} container>
                    <Grid style={{ marginLeft: '2px' }} container direction='column' xs={6} spacing={1}>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Game Volume</h1>
                            <Grid container spacing={0} alignItems='center' style={{ marginTop: '-1vh' }}>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={volumeDown} alt="volumeDown" id="volumeDownimg" width="15" height="20"></img>
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={volume} onChange={changeVolume}
                                        valueLabelDisplay='auto' marks
                                        step={10} min={0} max={100}
                                        scale={x => x + '%'} />
                                </Grid>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={volumeUp} alt="volumeUp" id="volumeUpimg" width="20" height="20"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Game Speed</h1>
                            <Grid container spacing={0} alignItems='center' style={{ marginTop: '-1vh' }}>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={tortoise} alt="tortoise" id="tortoiseimg" width="20" height="20"></img>
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={speed} onChange={changeSpeed}
                                        valueLabelDisplay="auto" marks
                                        step={0.2} min={0.5} max={4}
                                        scale={x => (4.5 - x).toFixed(1)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={hare} alt="hare" id="hareimg" width="20" height="20"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Text Size</h1>
                            <Grid container spacing={0} alignItems='center' style={{ marginTop: '-2vh' }}>
                                <Grid item xs={1} />
                                <Grid item xs={10}>
                                    <Slider value={size} onChange={changeSize}
                                        valueLabelDisplay='auto' marks
                                        step={1} min={19} max={29} />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={2} />
                                <Grid item xs={4}>
                                    <h1 style={{ fontSize: fSize, margin: fMargin, cursor: 'default', userSelect: 'none' }}>a</h1>
                                </Grid>
                                <Grid item xs={4}>
                                    <h1 style={{ fontSize: fSize, margin: fMargin, cursor: 'default', userSelect: 'none' }}>A</h1>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ marginLeft: '2px' }} container direction='column' xs={6} spacing={1}>
                        <Grid item>
                            <Grid container direction='row' alignItems='center' justify='center'>
                                <Grid item>
                                    <input style={{ cursor: 'pointer' }} checked={isChecked('theme', 'default')} type="radio" id="defaultTheme" name="theme" value="default"
                                        onClick={() => {
                                            changeBackgroundColor('#e8e8e8');
                                            changeFontColor('black');
                                            changeDotButtonColor('yellow');
                                            changeDashButtonColor('red');
                                        }} />
                                </Grid>
                                <Grid item>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplate: '1fr 1fr / 1fr',
                                        gridTemplateAreas: '"1" "2"',
                                        width: '6vh',
                                        height: '6vh',
                                        marginBottom: '-1vh'
                                    }} onClick={function () {
                                        changeBackgroundColor('#e8e8e8');
                                        changeFontColor('black');
                                        changeDotButtonColor('yellow');
                                        changeDashButtonColor('red');
                                    }}>
                                        <button style={{ gridArea: '1', backgroundColor: 'gray', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                        <button style={{ gridArea: '1', backgroundColor: 'LightGray', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                        <button style={{ gridArea: '2', backgroundColor: 'white', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                        <button style={{ gridArea: '2', backgroundColor: 'gray', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <h1 style={{ marginTop: '1vh', marginBottom: '-0.5vh', cursor: 'pointer', userSelect: 'none' }} onClick={function () {
                                        changeBackgroundColor('#e8e8e8');
                                        changeFontColor('black');
                                        changeDotButtonColor('yellow');
                                        changeDashButtonColor('red');
                                    }}>Default</h1>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Background Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'blue', cursor: 'pointer' }} onClick={() => changeBackgroundColor('blue')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeBackgroundColor('blue')}>Blue</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(backgroundColor, 'blue')} type="radio" id="blueBackgroundColor" name="backgroundColor" value="blue" onClick={() => changeBackgroundColor('blue')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'red', cursor: 'pointer' }} onClick={() => changeBackgroundColor('red')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeBackgroundColor('red')}>Red</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(backgroundColor, 'red')} type="radio" id="redBackgroundColor" name="backgroundColor" value="red" onClick={() => changeBackgroundColor('red')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'green', cursor: 'pointer' }} onClick={() => changeBackgroundColor('green')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeBackgroundColor('green')}>Green</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(backgroundColor, 'green')} type="radio" id="greenBackgroundColor" name="backgroundColor" value="green" onClick={() => changeBackgroundColor('green')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={backgroundColor} onColorChange={(value) => changeBackgroundColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}>Custom color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Dot Button Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'blue', cursor: 'pointer' }} onClick={() => changeDotButtonColor('blue')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeDotButtonColor('blue')}>Blue</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(dotButtonColor, 'blue')} type="radio" id="blueDotButtonColor" name="dotButtonColor" value="blue" onClick={() => changeDotButtonColor('blue')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'red', cursor: 'pointer' }} onClick={() => changeDotButtonColor('red')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeDotButtonColor('red')}>Red</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(dotButtonColor, 'red')} type="radio" id="redDotButtonColor" name="dotButtonColor" value="red" onClick={() => changeDotButtonColor('red')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'green', cursor: 'pointer' }} onClick={() => changeDotButtonColor('green')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeDotButtonColor('green')}>Green</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(dotButtonColor, 'green')} type="radio" id="greenDotButtonColor" name="dotButtonColor" value="green" onClick={() => changeDotButtonColor('green')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={dotButtonColor} onColorChange={(value) => changeDotButtonColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}>Custom color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Dash Button Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'blue', cursor: 'pointer' }} onClick={() => changeDashButtonColor('blue')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeDashButtonColor('blue')}>Blue</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(dashButtonColor, 'blue')} type="radio" id="blueDashButtonColor" name="dashButtonColor" value="blue" onClick={() => changeDashButtonColor('blue')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'red', cursor: 'pointer' }} onClick={() => changeDashButtonColor('red')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeDashButtonColor('red')}>Red</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(dashButtonColor, 'red')} type="radio" id="redDashButtonColor" name="dashButtonColor" value="red" onClick={() => changeDashButtonColor('red')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'green', cursor: 'pointer' }} onClick={() => changeDashButtonColor('green')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeDashButtonColor('green')}>Green</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(dashButtonColor, 'green')} type="radio" id="greenDashButtonColor" name="dashButtonColor" value="green" onClick={() => changeDashButtonColor('green')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={dashButtonColor} onColorChange={(value) => changeDashButtonColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}>Custom color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Text Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'white', cursor: 'pointer' }} onClick={() => changeFontColor('white')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeFontColor('white')}>White</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(fontColor, 'white')} type="radio" id="whiteFontColor" name="fontColor" value="white" onClick={() => changeFontColor('white')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'black', cursor: 'pointer' }} onClick={() => changeFontColor('black')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeFontColor('black')}>Black</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(fontColor, 'black')} type="radio" id="blackFontColor" name="fontColor" value="black" onClick={() => changeFontColor('black')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column'>
                                    <Grid item>
                                        <button style={{ height: '5vh', width: '5vh', backgroundColor: 'lightgray', cursor: 'pointer' }} onClick={() => changeFontColor('lightgray')}></button>
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'pointer', userSelect: 'none' }} onClick={() => changeFontColor('lightgray')}>Gray</p>
                                    </Grid>
                                    <Grid item>
                                        <input style={{ cursor: 'pointer' }} checked={isChecked(fontColor, 'lightgray')} type="radio" id="lightgrayFontColor" name="fontColor" value="lightgray" onClick={() => changeFontColor('lightgray')} />
                                    </Grid>
                                </Grid>
                                <Grid container xs={3} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={fontColor} onColorChange={(value) => changeFontColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}>Custom color!</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div >
    )
}

class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
        color: this.props.color
    };

    componentDidUpdate(prevProps) {
        if (this.props.color !== prevProps.color) {
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
                    marginTop: '-250px',
                    marginLeft: '-180px',
                    zIndex: '10',
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
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                </div>
                { this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                </div> : null}

            </div>
        )
    }
}


export default Settings;