import React , {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import spacebar from '../../Assets/Images/spacebar.png';
import enterButton from '../../Assets/Images/enterButton.png';

const Radio = () => {
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
                onClick={() => setToggle(!isToggled)}
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
                {isToggled ? <RadioContent /> : null}
            </animated.div>
        </div>
    );
};

const RadioContent = () => {
    var textIndex = 0;
    function updateTutorial() {
        var space = document.getElementById('spaceImage');
        var enter = document.getElementById('enterImage');
    
        if (textIndex == 0) {
            document.getElementById('tutorialText').innerHTML = 'This game consists of two buttons at the bottom of the page';
            textIndex++;
        } else if (textIndex == 1) {
            document.getElementById('tutorialText').innerHTML = 'This button is used for the dots and can be accessed through the space button or by clicking here!';
            document.getElementById('dotButton').style.backgroundColor = "yellow";
            space.style.display = "block";
            textIndex++;
        } else if (textIndex == 2) {
            document.getElementById('dotButton').style.backgroundColor = document.getElementById('dashButton').style.backgroundColor;
            document.getElementById('tutorialText').innerHTML = 'This button is used for the dashes and can be accessed through the enter button or by clicking here!';
            document.getElementById('dashButton').style.backgroundColor = "yellow";
            space.style.display = "none";
            enter.style.display = "block";
            textIndex++;
        } else if (textIndex == 3) {
            document.getElementById('dashButton').style.backgroundColor = document.getElementById('dotButton').style.backgroundColor;
            document.getElementById('tutorialText').innerHTML = 'Enter the correct Morse Code shown here!';
            document.getElementById('sampleMorse').style.border = 'double';
            enter.style.display = "none";
            textIndex++;
        } else if (textIndex == 4) {
            document.getElementById('tutorialText').innerHTML = 'Enter the correct code and move onto the next letter. Have Fun Learning the Morse Alphabet!';
            document.getElementById('sampleMorse').style.border = 'none';
            textIndex = 0;
        }
    }
    return (
        <div className="radiocontent" >
            <a href="#" alt="Home">
            </a>
            <p id="tutorialText" value="Change Text">Welcome to the Learn Alphabet Game! This game teaches you the Morse Code Alphabet! </p>
            <img src={spacebar} alt="Spacebar" id="spaceImage" style={{ display: "none" }}></img>
            <img src={enterButton} alt="Enter Button" id="enterImage" style={{ display: "none" }}></img>
            <button onClick={function () {
                updateTutorial();
            }} style={{ fontSize: '5vh' }}>Next</button>
        </div>
    );
};

export default Radio;