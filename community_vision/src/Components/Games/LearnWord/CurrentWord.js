import React from 'react';

const CurrentWord = (props) => {
    const fontSize = props.fSize;
    const fontColor = props.fColor;
    const correct = props.correct;
    const currentLetter = props.currentLetter;
    const idx = props.wordIndex;
    const currentWord = props.currentWord;
    const level = props.level;
    const currentMorse = props.currentMorse;
    const isValidLetter = props.isValidLetter;

    let display;
    if(level === 'advanced') {
        display = 'none';
    }
    else {
        display = 'block';
    }


    return (
        <div>
        {isValidLetter
            ?
            <h1 style={{lineHeight: 0, fontSize: fontSize}}>
                <span style={{color: '#00FF00'}}>{correct}</span>
                <span style={{color: fontColor, textDecoration: 'underline'}}>{currentLetter}</span>
                <span style={{color: fontColor}}>{currentWord.substr(idx+1)}</span>
            </h1>
            :
            <h1 style={{lineHeight: 0, color: '#00FF00', fontSize: fontSize}}>{currentWord}</h1>
            }
            <p id='sampleMorse' style={{lineHeight: 0, color: fontColor, fontSize: fontSize, display: display}}>{currentMorse}</p>
        </div>
    );
}

export default CurrentWord;