import React from 'react'
import {Link} from 'react-router-dom'

function EndGame(props) {
    const msg = 'Congratulations, you completed ' + props.level + ' level!!'

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
        backgroundColor: 'red', 
        padding: 50, 
        display: 'inline-block',
        width: '50%',
        margin: 0
    };

    const buttonStyle = {
        backgroundColor: 'white',
        height: '10%',
        width: '100%',
        fontSize: '7vh',
        marginBottom: 10,
        padding: 10,
        display: 'block'
    };

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
                <h1>{msg}</h1>
                <Link to={nextLevelPath}>
                    <button style={buttonStyle}>Play Next Level</button>
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