import React from 'react';
import '../../App.css';

function LearnAlphabet() {
    return (
        <div>
            <h1>Learn the Alphabet in Morse</h1>
            <h1 id="letter">A</h1>
            <h1 id="morseCode">•-</h1>
            <button onClick="processDot()" id="dotButton">•</button>
            <button onClick="processDash()" id="dashButton">-</button>
        </div>
    );
}

function proccessDot() {
    var x = document.getElementById("dotButton");
    
}

function processDash() {
    var x = document.getElementById("dashButton");
}

function changeLetter() {
    var x = document.getElementById("letter");
}

export default LearnAlphabet;