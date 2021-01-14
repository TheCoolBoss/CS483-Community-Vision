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
    var fColor;
    if(props.fontColor === undefined) {
        fColor = 'white';
    }
    else {
        fColor = props.fontColor;
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
        color: fColor,
        marginBottom: 10,
        padding: 10,
        display: 'block'
    };

    //Complete level message display
    const msg = 'Congratulations, you completed ' + props.level + ' level!!'

    //Set levels
    var nextLevelPath;
    var button1Content;
    if (props.level === 'beginner') {
        nextLevelPath = '/learnWordMedium';
        button1Content = 'Play Next Level';
    }
    else if (props.level === 'medium') {
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
                <h1 style={{color: fColor}}>{msg}</h1>
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