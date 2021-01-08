import React from 'react'
import {Link} from 'react-router-dom'

function EndGame(props) {
    const buttonStyle = {
        backgroundColor: 'white',
        height: '10%',
        width: '100%',
        fontSize: '3vh',
        marginBottom: 10,
        padding: 10,
        display: 'block'
    };

    const btnContainerStyle = {
        backgroundColor: 'red', 
        padding: 75, 
        display: 'inline-block',
        position: 'relative',
        top: '20vh'
    };

    const overlayStyle = {
        backgroundColor: 'rgba(120, 120, 120, 0.7)',
        height: '90vh',
        width: '100vw',
        position: 'fixed', 
        zIndex: 2
    }

    //Set levels
    var nextLevelPath;
    if (props.level === 'beginner') {
        nextLevelPath = '/learnWordMedium';
    }
    if (props.level === 'medium') {
        nextLevelPath = '/learnWordAdvanced';
    }
    if (props.level === 'advanced') {
        nextLevelPath = '/';
    }

    return (
        <div style={overlayStyle}>
            <div style={btnContainerStyle}>
                <Link to={nextLevelPath}>
                    <button style={buttonStyle}>Next Level</button>
                </Link>
                <button style={buttonStyle} onClick={() => {window.location.reload()}}>Replay</button>
                <Link to='/'>
                    <button style={buttonStyle}>Home Page</button>
                </Link>
            </div>
        </div>
    );
}

export default EndGame;