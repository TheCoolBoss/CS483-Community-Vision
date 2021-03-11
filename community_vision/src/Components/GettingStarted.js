import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';
import buttons from '../Components/Assets/Images/buttons.png'
import { initial } from "./Games/Common/Functions"


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
        color: 'black',
        backgroundColor: 'white',
        paddingBottom: "10vw"
        
        
      }}>
        <h1 style={{ fontWeight: 900, fontSize: "50px"}}>Lets Get Started!</h1>

        <h2 style={{ fontWeight: 900, fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>How to type with Morse on this Website:</h2>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }} >Morse code is made up of a combination of 'dots' and 'dashes' to create letters
            and numbers. Click here for a<a href="https://cvision.org/wp-content/uploads/2021/02/Morse-Code-Guide.pdf" target="_blank">PDF of a Morse code guide.</a></p>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>Dot and dash are activated by <i>keyboard commands:</i></p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>Space = 'dot'</p>
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>Enter = 'dash'</p>
        
        <h2 style={{ fontWeight: 900, fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>Using Switches</h2>
  
        <p style={{ textAlign:"left" , paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px"}}>
          You will need a switch interface that can produce keyboard command to use
          switches on this website. If you have a switch interface and 2 switches, set 
          your switch interface keyboard commands to 'space' and 'enter'.
        </p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "Left", fontSize: "20px"}}>If you are using left and right sides of the body for switch placement, place
          the switches like this:
        </p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>'space' (dot) - Left side</p>
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>'enter' (dash) - Right side</p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>
          This placement will visually match how the 'dot' and 'dash' are placed on the
          screen.
        </p>

        <img src={buttons} alt="Buttons" id="buttonsimage" width="500" height="100"></img>

        <h2 style={{ fontweight: 900, fontSize: "40px", textAlign: "Left", paddingLeft: "10vw" }}>Settings:</h2>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>Each person may do better with different speeds, volume, color combinations, or font
          sizes so our settings let you customize:
        </p>

        <ol style={{ paddingLeft: "10vw", paddingRight: "15vw", textAlign: "left", fontSize: "20px"}}>
          <li>Color of background, buttons, and text</li>
          <li>Size of Text</li>
          <li>Sound Level</li>
          <li>How quickly switches need to be hit to make a letter</li>
        </ol>

        <h2 style={{ fontweight: 900, fontSize: "40px", textAlign: "left", paddingLeft: "10vw"}}>Description of the Games</h2>

        <h2 style={{fontweight: 600, color: "blue", textAlign: "Left", paddingLeft: "10vw", fontSize: "30px"}}><i>Beginning Levels</i></h2>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>"Learn Switches" is a simple way for 
        users to figure out which switch makes a 'dot' and which switch makes a 'dash'</p>
  
        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>"Sandbox Game" let you 
        explore 'dots' and 'dashes' to make letters without any specific targets.</p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>"Learn Letters" game provide 
        visual cues on how to make letters using Morse Code.</p>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>"Learn Numbers" game provides 
        vidual cues on how to make numbers using Morse code.</p>

        <h2 style={{ fontweight: 900, color: "blue", fontSize: "30px", textAlign: "left", paddingLeft: "10vw"}}><i>Intermediate Levels</i></h2>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>
        "Learning Words" provides visual cues 
        on how to use Morse code to combine letters to make words.</p>

        <h2 style={{ fontweight: 900, color: "blue", fontSize: "30px", textAlign: "left", paddingLeft: "10vw"}}><i>Advanced Levels</i></h2>

        <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px", textAlign: "left"}}>"Learn Letters" or "Learn Words"
        as above but without any visual cues on the 'dot' and 'dash' combinations
        so you have to rely on your Morse code knowledge/memory!</p> 
  

      </div>
    );
  })
  
  export default GettingStarted;