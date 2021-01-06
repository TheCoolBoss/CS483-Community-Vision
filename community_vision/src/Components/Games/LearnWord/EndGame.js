import React from 'react'
import {Link} from 'react-router-dom'

function EndGame(props) {
    //history instance to navigate pages
    // let history = useHistory();

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
    var currentLevelPath;
    if (props.level === 'beginner') {
        nextLevelPath = '/learnWordMedium';
        currentLevelPath = 'learnWordBeginner';
    }
    if (props.level === 'medium') {
        nextLevelPath = '/learnWordAdvanced';
        currentLevelPath = 'learnWordMedium';
    }
    if (props.level === 'advanced') {
        nextLevelPath = '/';
        currentLevelPath = 'learnWordAdvanced';
    }

    return (
        <div style={overlayStyle}>
            <div style={btnContainerStyle}>
                <Link to={nextLevelPath}>
                    <button style={buttonStyle}>Next Level</button>
                </Link>
                <Link to={currentLevelPath}>
                    <button style={buttonStyle}>Replay</button>
                </Link>
                <Link to='/'>
                    <button style={buttonStyle}>Home Page</button>
                </Link>
            </div>
        </div>
    );
}

export default EndGame;