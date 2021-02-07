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
      position: 'relative',
      marginTop: '-3vh',
      height: '90vh',
      width: '100vw',
      color: fontColor,
      backgroundColor: backgroundColor
    }}>
      <h1 style={{ fontWeight: 900 }}>Who We Are</h1>

      <p >The Community Vision Assitive Technology (AT) Lab is an education and 
      resource center in Portland, Oregon that promotes accessibility & inclusive 
      in our community. We collaborate with people with disabilities, families, 
      caregivers, professionals, and community partners. We want more people to 
      see, access, and feel comfortable with AT. The Lab offers AT Consultations,
      Trainings & Workshops, Social Groups, a free Loan Closet, Equipment, Scholarships
      and more. </p>

      <p>To learn more, visit us at: </p>
      <p><a href="https://cv-atlab.org/" target="_blank">www.cv-atlab.org</a></p>
      <p>or</p>
      <p><a href="http://www.facebook.com/CVATLab" target="_blank">www.facebook.com/CVATLab</a></p>

      <h2 style={{ fontWeight: 900 }}>Why Morse?</h2>

      <p>Morse code is an old technolody that is having a resurgence in the world
      AT. Many children with physical dissabilities, especially those who use adaptive
      switches, have difficulty accessing the alphabet and, therefore, are not often taught 
      the shills they need to read and write. Morse code offers a quicker way to access
      the alphabet with the use of only 2 switches. A simple 'dot' and 'dash' can open 
      the world of letters and literacy. This website offers games to learn Morse Code. 
      Remember, children learn and explore the alphabet when they are very young, so it is
      never too early to start playing with Morse!</p>
    </div>
  );
})

export default About;
