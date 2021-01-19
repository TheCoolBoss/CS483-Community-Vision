import React from 'react'
import {Link} from 'react-router-dom'

function EndGame(props) {
    //background to match the current background in settings
    var backgroundColor;
    if(props.background === undefined) {
        backgroundColor = 'red';
    }
    else {
        backgroundColor = props.background;
    }

    //font color to match current font color in settings
    var fontColor;
    if(props.fontColor === undefined) {
        fontColor = 'white';
    }
    else {
        fontColor = props.fontColor;
    }

    //get the current level
    var currLevel;
    if(props.level === undefined) {
        currLevel = 'none';
    }
    else {
        currLevel = props.level;
    }

    //Style
    const overlayStyle = {
        backgroundColor: 'rgba(120, 120, 120, 0.7)',
        height: '90vh',
        width: '100vw',
        position: 'fixed', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    }

    const btnContainerStyle = {
        backgroundColor: backgroundColor, 
        padding: 50, 
        display: 'inline-block',
        width: '50%',
        margin: 0
    };

    const buttonStyle = {
        backgroundColor: backgroundColor,
        height: '10%',
        width: '100%',
        fontSize: '7vh',
        color: fontColor,
        marginBottom: 10,
        padding: 10,
        display: 'block'
    };

    //Complete level message display
    const msg = 'Congratulations, you completed ' + currLevel + ' level!!'

    //Set levels
    var nextLevelPath;
    var button1Content;
    if (currLevel === 'beginner') {
        nextLevelPath = '/learnWordMedium';
        button1Content = 'Play Next Level';
    }
    else if (currLevel === 'medium') {
        nextLevelPath = '/learnWordAdvanced';
        button1Content = 'Play Next Level';
    }
    else {
        nextLevelPath = '/games';
        button1Content = 'Games Page'
    }

    return (
        <div style={overlayStyle}>
            <div style={btnContainerStyle}>
                <h1 style={{color: fontColor}}>{msg}</h1>
                <Link to={nextLevelPath}>
                    <button style={buttonStyle}>{button1Content}</button>
                </Link>
                <Link>
                    <button style={buttonStyle} onClick={() => {window.location.reload()}}>Replay This Level</button>
                </Link>
                <Link to='/'>
                    <button style={buttonStyle}>Home Page</button>
                </Link>
            </div>
        </div>
    );
}

export default EndGame;