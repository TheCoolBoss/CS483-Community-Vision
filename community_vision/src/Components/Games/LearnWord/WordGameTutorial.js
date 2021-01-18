import React , {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import spacebar from '../../Assets/Images/spacebar.png';
import enterButton from '../../Assets/Images/enterButton2.jpg';

//Get the tutorial data
const tutorialData = require('./TutorialData.json');

function WordGameTutorial(props) {
    var defaultColor;
    if(props.background === null) {
        defaultColor = 'white';
    }
    else {
        defaultColor = props.background;
    }
    const [isToggled, setToggle] = useState(false);
    const menubg = useSpring({background: isToggled ? "#6ce2ff" : "#ebebeb", width: '15vw'});
    const { y } = useSpring({
        y: isToggled ? 180 : 0
    });
    const menuAppear = useSpring({
        transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
        opacity: isToggled ? 1 : 0
    });

    return (
        <div style={{ position: "relative", width: '15vw', margin: "0 auto" }}>
            <animated.button
                style={menubg}
                className="radiowrapper"
                onClick={() => {
                    setToggle(!isToggled);
                    reset(defaultColor, props.fontColor);
                }}
            >
                <div className="radio">
                    <p>Tutorial</p>
                    <animated.p
                        style={{
                            transform: y.interpolate(y => `rotateX(${y}deg)`)
                        }}
                    >
                        ▼
                    </animated.p>
                </div>
            </animated.button>
            <animated.div style={menuAppear}>
                {isToggled ? <TutorialContent level={props.level} background={defaultColor} fontColor={props.fontColor} /> : null}
            </animated.div>
        </div>
    );
}

function TutorialContent(props) {
    //Get the elements 
    const SPACE = document.getElementById('dotButton');
    const ENTER = document.getElementById('dashButton');
    const MORSE = document.getElementById('sampleMorse');

    //Index to keep track of which tab the tutorial is on
    var [index, setIndex] = useState(0);

    //Length of the tutorial content to check for out of bound
    const bgnTutLength = tutorialData.bgnTutContent.length;
    const medTutLength = tutorialData.medTutContent.length;
    const advTutLength = tutorialData.advTutContent.length;

    //variables to store content from the data
    var tutorialText;
    var spaceDisplay;
    var enterDisplay;
    var morseDisplay;

    //Check the level of the game and get the content
    if(props.level === 'beginner') {
        tutorialText = tutorialData.bgnTutContent[index].text;
        spaceDisplay = tutorialData.bgnTutContent[index].showSpace;
        enterDisplay = tutorialData.bgnTutContent[index].showEnter;
        morseDisplay = tutorialData.bgnTutContent[index].showMorse;
    }
    else if(props.level === 'medium') {
        tutorialText = tutorialData.medTutContent[index].text;
        spaceDisplay = tutorialData.medTutContent[index].showSpace;
        enterDisplay = tutorialData.medTutContent[index].showEnter;
        morseDisplay = tutorialData.medTutContent[index].showMorse;
    }
    else if(props.level === 'advanced') {
        tutorialText = tutorialData.advTutContent[index].text;
        spaceDisplay = tutorialData.advTutContent[index].showSpace;
        enterDisplay = tutorialData.advTutContent[index].showEnter;
        morseDisplay = 'none';
    }
    else {
        tutorialText = 'Nothing to see here';
        spaceDisplay = 'none';
        enterDisplay = 'none';
        morseDisplay = 'none';
    }

    //Check to see if the dash button needs to be highlighted
    if (enterDisplay === 'block') {
        ENTER.style.backgroundColor = 'yellow';
    }
    else {
        ENTER.style.backgroundColor = props.background;
    }

    //Check to see if the dot button needs to be highlighted
    if (spaceDisplay === 'block') {
        SPACE.style.backgroundColor = 'yellow';
    }
    else {
        SPACE.style.backgroundColor = props.background;
    }

    //Check to see if the current morse needs to be highlighted
    if (morseDisplay === 'show') {
        MORSE.style.color = 'yellow';
    }
    else {
        MORSE.style.color = props.fontColor;
    }

    return (
        <div className="radiocontent" >
            <p id="tutorialText" value="Change Text">{tutorialText}</p>
            <img src={spacebar} alt="Spacebar" id="spaceImage" style={{ display: spaceDisplay }}></img>
            <img src={enterButton} alt="Enter Button" id="enterImage" style={{ display: enterDisplay }}></img>
            <button onClick={function () {
                if(index === bgnTutLength - 1 && props.level === 'beginner' ) {
                    setIndex(0);
                }
                else if (index === medTutLength - 1 && props.level === 'medium') {
                    setIndex(0);
                }
                else if (index === advTutLength - 1 && props.level === 'advanced') {
                    setIndex(0);
                }
                else {
                    setIndex(prevIndex => prevIndex + 1);
                }
            }} style={{ fontSize: '5vh' }}>Next</button>
        </div>
    );
}

//reset the colors when closing the tutorial tab
function reset(defaultBackgroundColor, defaultFontColor) {
    document.getElementById('dotButton').style.backgroundColor = defaultBackgroundColor;
    document.getElementById('dashButton').style.backgroundColor = defaultBackgroundColor;
    document.getElementById('sampleMorse').style.color = defaultFontColor;
}

export default WordGameTutorial;