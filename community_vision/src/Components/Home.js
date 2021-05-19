import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { initial } from "./Games/Common/Functions";
import { CardActionArea } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Home = forwardRef((props, ref) => {

  const history = useHistory();
  function moveTo(input) {
    history.push(input);
  }

  const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
  const [fontColor, setFontColor] = useState(() => initial('fontColor'));
  const [dropdown, setDropdown] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      update(value) {
        setBackgroundColor(initial('backgroundColor'));
        setFontColor(initial('fontColor'));
        setDropdown(value);
      }
    }),
  )
  
  return (
    <div style={{
      position: 'relative',
      zIndex: 0,
      height: '90vh',
      width: '100vw',
      backgroundColor: backgroundColor
    }}>

      {/* styling for the home page */}
      <div style={{
        alignSelf: 'center',
        alignItems: 'center'
      }}>
        {/* title */}
        <h1 style={{
          fontSize: '10vh',
          color: fontColor,
          //color: '#003087',
          bottom: '-1vh',
          userSelect: 'none',
          cursor: 'default',
          fontWeight: 900,
          margin: 0,
          lineHeight: '100%',
          paddingTop: '2vh'
        }}>
          Play Morse!</h1>
        {/* welcome statement */}
        <Grid container justify='center' alignItems='flex-start'>
          <Grid item xs={11} style={{ height: '20%' }}>
            <h1 style={{ height: '100%', color: fontColor, fontWeight: 900, userSelect: 'none', cursor: 'default', lineHeight:'100%' }}>
              Welcome to Community Vision Morse Code Games!
              </h1>
          </Grid>
          <Grid item xs={8} style={{ height: '20%', paddingBottom: '6vh' }}>
            {/* directs it to the about page */}
            <Card style={{ minHeight: '100%' }} onMouseUp={() => {
              if (!dropdown) {
                moveTo('/about');
              }
            }}>
              <CardActionArea>
                <button style={{ height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderWidth: "2vh", borderColor: "red" }}>About</button>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={8} style={{ height: '20%', paddingBottom: '6vh' }}>
            {/* directs it to the getting started page */}
            <Card style={{ minHeight: '100%' }} onMouseUp={() => {
              if (!dropdown) {
                moveTo('/gettingStarted');
              }
            }}>
              <CardActionArea>
                <button style={{ height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderWidth: "2vh", borderColor: 'lightgreen' }}>Getting Started</button>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={8} style={{ height: '20%', paddingBottom: '6vh' }}>
            {/* play games button, directs it to the games page */}
            <Card style={{ minHeight: '100%' }} onMouseUp={() => {
              if (!dropdown) {
                moveTo('/settings');
              }
            }}>
              <CardActionArea>
                <button style={{ height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderColor: 'blue', borderWidth: "2vh" }}>Play Games!</button>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={8} style={{ height: '20%', paddingBottom: '6vh' }}>
            {/* play games button, directs it to the games page */}
            <Card style={{ minHeight: '100%' }} onMouseUp={() => {
              if (!dropdown) {
                window.open('https://docs.google.com/forms/d/1-Fy6sjP-xcLqWLefGCBUbdbZIKBPwEkvyng9boBpO58/edit', '_blank');
              }
            }}>
              <CardActionArea>
                <button style={{ height: '100%', width: '100%', fontSize: '5vh', fontWeight: 900, userSelect: 'none', cursor: 'pointer', borderColor: 'yellow', borderWidth: "2vh" }}>Give us Feedback!</button>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
})

export default Home;
