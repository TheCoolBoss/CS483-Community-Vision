import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';
import buttons from '../Components/Assets/Images/buttons.png'
import { initial } from "./Games/Common/Functions"
import { Link } from 'react-router-dom';


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

    }}>
      <h1 style={{ fontWeight: 900, fontSize: "50px" }}>Typing with Morse on this Website</h1>

      <h2 style={{ fontWeight: 900, fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>How to type with Morse on this Website:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }} >Morse code is made up of a combination of 'dots' and 'dashes' to create letters
            and numbers. Click here for a <a href="https://cvision.org/wp-content/uploads/2021/02/Morse-Code-Guide.pdf" target="_blank">PDF of a Morse code guide.</a></p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>On this website, each activity requires you to type a 'dot or 'dash' using a keyboard,
        switches, or a mouse.</p>

      <h2 style={{ fontWeight: 900, fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>Using a Keyboard:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Dot and dash are activated by <b>keyboard keys:</b></p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Space = 'dot'</p>
      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Enter = 'dash'</p>

      <h2 style={{ fontWeight: 900, fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>Using Switches:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Like using a keyboard, you will use the 'space' and 'enter' keys to
        type 'dot' and 'dash'.</p>


      <p style={{ textAlign: "left", paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px" }}>
        You will need a <b>switch interface</b> that can produce keyboard command to use
          switches. If you have a switch interface and 2 switches, set
          your switch interface keyboard commands to 'space' and 'enter'.
        </p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>If you are using left and right sides of the body for swich placement,
        place the switches like this:</p>


      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "Left", fontSize: "20px" }}>If you are using left and right sides of the body for switch placement, place
      the switches like this:
        </p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>'space' (dot) - Left side</p>
      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>'enter' (dash) - Right side</p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>
        This placement will visually match how the 'dot' and 'dash' are placed on the
        screen.
        </p>

      <img src={buttons} alt="Buttons" id="buttonsimage" width="60%"></img>

      <h2 style={{ fontweight: 900, fontSize: "40px", textAlign: "Left", paddingLeft: "10vw" }}>Using a Mouse:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Simply click on the 'dot' and 'dash' on the screen in each activity.</p>

      <h2 style={{ fontweight: 900, fontSize: "40px", textAlign: "Left", paddingLeft: "10vw" }}>Settings:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Each person may do better with different color combinations, font sizes,
        volume, or speeds so our settings let you customize: </p>

      <ol style={{ paddingLeft: "10vw", paddingRight: "15vw", textAlign: "left", fontSize: "20px" }}>
        <li>Color of background, buttons, and text</li>
        <li>Size of Text</li>
        <li>Sound Level (volume)</li>
        <li>How quickly switches or keys need to be hit to make a letter</li>
      </ol>

      <h2 style={{ fontweight: 900, fontSize: "40px", textAlign: "left", paddingLeft: "10vw" }}>Description of the Games</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>Morse code cues (hints) are provided for every game in Levels 1-3.
        Level 4 games do not give any hints, so you will need to rely on memory/knowledge of Morse code.</p>

      <h2 style={{ fontweight: 600, color: "blue", textAlign: "Left", paddingLeft: "10vw", fontSize: "30px" }}>Level 1, To Start:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>'Explore Dot and Dash' gives a player opportunities to discover how
        to make 'dot' and 'dash; using a keyboard or switches. This is a good place to start to learn how switches (or keystrokes) work on this website.</p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>'Learn Morse Patterns' introduces a player to using Morse code to make
        letters. It starts with the simpliest Morse patterns (example: one 'dot' to make the letter E) and progresses through more complex patterns.</p>

      <h2 style={{ fontweight: 900, color: "blue", fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>Level 1, Next Steps:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>'Learn the Alphabet' and 'Learn Numbers' each walks a player
        through using Morse code to type the whole alphabet or numbers 0-9.</p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px" }}>'Sandbox' games let you explore making 'dot' and 'dash'
        combinations to see what letter you type. There are no target letters or words to produce, only experimentation!</p>

      <h2 style={{ fontweight: 900, color: "blue", fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>Levels 2 & 3:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px", textAlign: "left" }}>'Learn Words' introduces a player to
        Morse code to type whole word. Level 2 asks a player to only type the first letter of the word; Level 3 asks to spell the whole word.</p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px", textAlign: "left" }}>'Race Game' is a game that allow a player
      type in the correct Morse code before the letter reaches the end of the screen. Each time a letter reaches the end of the screen, the
        player will lose a life. Try your best to beat your own high score every time!</p>

      <h2 style={{ fontweight: 900, color: "blue", fontSize: "30px", textAlign: "left", paddingLeft: "10vw" }}>Level 4:</h2>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px", textAlign: "left" }}>Many of the games in Level 4 are similar
        to earlier levels but there are no hints on Level 4, so you need to remember Morse code on your own or have a paper guide beside you to play!</p>

      <Link className='nav-link' to="/" style={{
        backgroundColor: backgroundColor
      }}>
        <button style={{
          width: '40vw',
          fontSize: '5vh',
          fontWeight: 900,
          userSelect: 'none',
          cursor: 'pointer',
          marginBottom: "5vh",
          backgroundColor: 'white'
        }}>Go Back to Home</button>
      </Link>
    </div>
  );
})

export default GettingStarted;