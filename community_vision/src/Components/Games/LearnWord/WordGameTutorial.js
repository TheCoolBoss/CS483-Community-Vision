import React , {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import spacebar from '../../Assets/Images/spacebar.png';
import enterButton from '../../Assets/Images/enterButton2.jpg';

const tutorialData = {
    medTutContent : [
        {
            "text": "first", 
            "showSpace": "none", 
            "showEnter": "none"
        },
        {
            "text": "second",
            "showSpace": "block",
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
                {isToggled ? <TutorialContent level={props.level}/> : null}
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