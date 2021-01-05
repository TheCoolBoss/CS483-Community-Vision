import React from 'react'

function EndGame() {
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
        top: '25vh'
    };
    return (
        <div style={{backgroundColor: 'rgba(120, 120, 120, 0.7)' , height: '90vh', width: '100vw'}}>
            <div style={btnContainerStyle}>
                <button style={buttonStyle}>Next Level</button>
                <button style={buttonStyle}>Replay</button>
                <button style={buttonStyle}>Home Page</button>
            </div>
        </div>
    );
}

export default EndGame;