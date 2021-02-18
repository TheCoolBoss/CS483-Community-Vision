import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';

function initial(type) {
    if (localStorage.getItem(type) != null) {
      return localStorage.getItem(type);
    }
    if (type === 'backgroundColor') {
      return 'blue';
    } else if (type === 'fontColor') {
      return 'white';
    }
}

const GettingStarted = forwardRef((props, ref) => {
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    useImperativeHandle(
      ref,
      () => ({
        update() {
          setBackgroundColor(initial('backgroundColor'));
          setFontColor(initial('fontColor'));
        }
      }),
    )
    return (
      <div style={{
        position: 'relative',
        marginTop: '-3vh',
        height: '90vh',
        width: '100vw',
        color: fontColor,
        backgroundColor: 'white',
        
        
      }}>
        <h1 style={{ fontWeight: 900 }}>Lets Get Started!</h1>

        <h2 style={{ fontWeight: 900 }}>How to type with Morse on this Website:</h2>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}} >Morse code is made up of a combination of 'dots' and 'dashes' to create letters
            and numbers. Click here for a <u>PDF of a Morse code guide.</u></p>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>Dot and dash are activated by <i>keyboard commands:</i></p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>Space = 'dot'</p>
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>Enter = 'dash'</p>
        
        <h2 style={{ fontWeight: 900 }}>Using Switches</h2>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>You will need a switch interface that can produce keyboard command to use
          switches on this website. If you have a switch interface and 2 switches, set 
          you switch interface keyboard commands to 'space' and 'enter'.
        </p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>If you are using left and right sides of the body for switch placement, place
          the switches like this:
        </p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>'space' (dot) - Left side</p>
        <p>'enter' (dash) - Right side</p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>This placement will visually match how the 'dot' and 'dash' are placed on the
          screen.
        </p>

        {/* place picture of buttons here*/}

        <h3 style={{ fontweight: 900 }}>Settings:</h3>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>Each person may do better with different speeds, volume, color combinations, or font
          sizes so our settings let you customize:
        </p>

        <ol style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>
          <li>Color of background, buttons, and text</li>
          <li>Size of Text</li>
          <li>Sound Level</li>
          <li>How quickley switches need to be hit to make a letter</li>
        </ol>

        <h4 style={{ fontweight: 900}}>Description of the Games</h4>

        <h5 style={{fontweight: 600, color: "blue"}}><i>Beginning Levels</i></h5>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>"Blank" is a simple way for 
        users to figure out which switch makes a 'dot' and which switch makes a 'dash'</p>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>The Sandbox games let you 
        explore 'dots' and 'dashes' to make letters without any specific targets.</p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>The Learning Letters game provide 
        visual cues on how to make letters using Morse Code.</p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>The Learning Numbers game provides 
        vidual cues on how to make numbers using Morse code.</p>

        <h6 style={{ fontweight: 900, color: "blue"}}><i>Intermediate Levels</i></h6>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>Learning Words provides visual cues 
        on how to use Morse code to combine letters to make words.</p>

        <h7 style={{ fontweight: 600, color: "blue"}}><i>Advanced Levels</i></h7>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw"}}>Learning Letters or LEarning Words
        as above but without any visual cues on the 'dot' and 'dash' combinations
        so you have to rely on your Morse code knowledge/memory!</p> 

        {/* <img src={morse} alt="Morse" id="morseimage" width="500" height="333" style={{ display: "none" }}></img> */}
  
      </div>
    );
  })
  
  export default GettingStarted;