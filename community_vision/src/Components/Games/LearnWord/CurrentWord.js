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
    const notCurrLetterSize = props.notCurrLetterSize;

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
                <span style={{color: '#00FF00', fontSize: notCurrLetterSize, textShadow: "-2px 2px 2px #000, 2px 2px 2px #000, 2px -2px 2px #000, -2px -2px 2px #000"}}>{correct}</span>
                <span style={{color: fontColor}}>{currentLetter}</span>
                <span style={{color: fontColor, fontSize: notCurrLetterSize, opacity: 0.7}}>{currentWord.substr(idx+1)}</span>
            </h1>
            :
            <h1 style={{lineHeight: 0, color: '#00FF00', fontSize: fontSize, textShadow: "-2px 2px 2px #000, 2px 2px 2px #000, 2px -2px 2px #000, -2px -2px 2px #000"}}>{currentWord}</h1>
            }
            <p id='sampleMorse' style={{lineHeight: 0, color: fontColor, fontSize: fontSize, display: display, margin: 0}}>{currentMorse}</p>
        </div>
    );
}

export default CurrentWord;