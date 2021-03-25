import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';
import morse from '../Components/Assets/Images/morse.png'
import appInfo from "../../package.json"
import { initial } from "./Games/Common/Functions"
import { Link } from 'react-router-dom';

//Help received from https://www.reddit.com/r/reactjs/comments/f4bpgf/automatic_versioning_from_run_build_create_react/

const About = forwardRef((props, ref) => {
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
      // the inital styles of the page
      position: 'relative',
      marginTop: '-3vh',
      height: '90vh',
      width: '100vw',
      color: 'black',
    }}>
      <h1 style={{ fontWeight: 900, textSize: "60px" }}>Who We Are</h1>

      <p style={{paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}} >The Community Vision Assitive Technology (AT) Lab is an education and 
      resource center in Portland, Oregon that promotes accessibility & inclusive 
      in our community. We collaborate with people with disabilities, families, 
      caregivers, professionals, and community partners. We want more people to 
      see, access, and feel comfortable with AT. The Lab offers AT Consultations,
      Trainings & Workshops, Social Groups, a free Loan Closet, Equipment, Scholarships
      and more. </p>

      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px"}}>To learn more, visit us at: </p>
      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px"}}><a href="https://cv-atlab.org/" target="_blank">www.cv-atlab.org</a></p>
      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px"}}>or</p>
      <p style={{ paddingLeft: "10vw", paddingRight: "10vw", fontSize: "20px"}}><a href="http://www.facebook.com/CVATLab" target="_blank">www.facebook.com/CVATLab</a></p>

      <h2 style={{ fontWeight: 900, fontSize: "30px" }}>Why Morse?</h2>


      <p style={{paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>Morse code represents numbers and letters using dots, dashes, and spaces and
        was invented in the 1800s to use on a telegraph machine. It was later used as a 
        communication method for some people who did not have speech in the early 1970s. 
        The technology began to improve in the 1990s and is now being used on mobile devices.
        It has even caught the eye of Google in their <u>Hello Morse</u> project.
      </p>

      <img src={morse} alt="Morse" id="morseimage" width="500" height="333"></img>

      <p style={{paddingLeft: "10vw", paddingRight: "10vw", textAlign: "left", fontSize: "20px"}}>Children are now being included in the Morse conversation. Many children with 
        physical disabilities, especially those who use adaptive switches, have difficulty
        accessing the alphabet and therefore, are not often taught the skills they need to 
        read and write. Morse code offers a quicker way to access the alphabet with the use
        of only 2 switches. A simple 'dot' and 'dash' can open the world of letters and 
        literacy. This website offers games to learn Morse code. Remember, children learn 
        and explore the alphabet when they are very young, so it is never too early to 
        start playing with Morse!</p>

      <p style= {{paddingLeft: "10vw", paddingRight: "10vw", textAligh: "center", fontSize: "30px"}}>Have Feedback? Let us know <a href="https://docs.google.com/forms/d/e/1FAIpQLSeeeHIXvEi3zPTDfLuXZ3Sn6FVyqqzSR-Fg536Y_83RtSO_Ew/viewform?usp=sf_link" target="_blank">HERE!</a></p>

        
      <p style={{ userSelect: 'none', cursor: 'default' }}>Version {appInfo.version}</p>
    
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

export default About;
