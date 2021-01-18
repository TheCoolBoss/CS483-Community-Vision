import React , {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import spacebar from '../../Assets/Images/spacebar.png';
import enterButton from '../../Assets/Images/enterButton2.jpg';

const tutorialData = {
    medTutContent : [
        {
            "text": "Welcome to the Word Game Medium Intermediate Level!", 
            "showSpace": "none", 
            "showEnter": "none"
        },
        {
            "text": "This game will teach you about the Morse code of certain words",
            "showSpace": "none",
            "showEnter": "none"
        },
        {
            "text": "This game consists of two buttons at the bottom of the page",
            "showSpace": "none",
            "showEnter": "none"
        },
        {
            "text": "Along with the picture and its definition at the top of the page",
            "showSpace": "none",
            "showEnter": "none"
        },
        {
            "text": "This button is used for the dots and can be accessed through the space button or by clicking here!",
            "showSpace": "block",
            "showEnter": "none"
        },
        {
            "text": "This button is used for the dashes and can be accessed through the space button or by clicking here!",
            "showSpace": "none",
            "showEnter": "block"
        },
        {
            "text": "Enter the morse of the underlined character until you go through all the letters and move on to the next word",
            "showSpace": "none",
            "showEnter": "none"
        },
        {
            "text": "There are a total 26 words, each starts with a different character",
            "showSpace": "none",
            "showEnter": "none"
        },
        {
            "text": "Complete all 26 words to beat the game, have fun!",
            "showSpace": "none",
            "showEnter": "none"
        }
    ]
};

function WordGameTutorial(props) {
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
                    reset(props.background);
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
                {isToggled ? <TutorialContent level={props.level} background={props.background}/> : null}
            </animated.div>
        </div>
    );
}

function TutorialContent(props) {
    var [index, setIndex] = useState(0);
    const medTutLength = tutorialData.medTutContent.length;
    var tutorialText;
    var spaceDisplay;
    var enterDisplay;

    if(props.level === 'medium') {
        tutorialText = tutorialData.medTutContent[index].text;
        spaceDisplay = tutorialData.medTutContent[index].showSpace;
        enterDisplay = tutorialData.medTutContent[index].showEnter;
    }
    else {
        tutorialText = 'Nothing to see here';
        spaceDisplay = 'none';
        enterDisplay = 'none';
    }

    if (enterDisplay === 'block') {
        document.getElementById('dashButton').style.backgroundColor = 'yellow';
    }
    else {
        document.getElementById('dashButton').style.backgroundColor = props.background;
    }

    if (spaceDisplay === 'block') {
        document.getElementById('dotButton').style.backgroundColor = 'yellow';
    }
    else {
        document.getElementById('dotButton').style.backgroundColor = props.background;
    }

    return (
        <div className="radiocontent" >
            <a href="#" alt="Home">
            </a>
            <p id="tutorialText" value="Change Text">{tutorialText}</p>
            <img src={spacebar} alt="Spacebar" id="spaceImage" style={{ display: spaceDisplay }}></img>
            <img src={enterButton} alt="Enter Button" id="enterImage" style={{ display: enterDisplay }}></img>
            <button onClick={function () {
                if(index === medTutLength - 1) {
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
function reset(defaultColor) {
    document.getElementById('dotButton').style.backgroundColor = defaultColor;
    document.getElementById('dashButton').style.backgroundColor = defaultColor;
}

export default WordGameTutorial;