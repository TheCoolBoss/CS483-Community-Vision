import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {Transition} from "react-spring/renderprops";

const LearnWordsStart = (props) => {
    //Get the props
    const startScreen = props.start;
    const setStartScreen = props.setStart;
    //Set game title and messages to display
    let gameTitle;
    let message;
    if(props.level === "beginner") {
        //Message and title for level 1
        gameTitle = "Learn Words Beginner"
        message = "Type the Morse of the first letter of each word for all 26 words."
    }
    else if(props.level === "medium") {
        //Message and title for level 2
        gameTitle = "Learn Words Intermediate"
        message = "Type the Morse of all the character of the word for all 26 words."
    }
    else if(props.level === "advanced") {
         //Message and title for level 3
         gameTitle = "Learn Words Advanced"
         message = "Type the Morse of all the character of the word for all 26 words."
    }
    else {
        //Default message and title
        gameTitle = "Learn Words"
        message = "Type the morse of all the letters in the alphabet.";
    }
    return (
        <Transition
                items={startScreen}
                duration={500}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {toggle =>
                    toggle
                        ? props => <div style={{
                            position: 'absolute',
                            width: '100vw',
                            height: '90vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1,
                            ...props
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'black',
                                opacity: 0.7
                            }} />
                            <Grid container direction='column' justify='center' alignItems='center' style={{ height: '100%', width: '100%', zIndex: 1 }}>
                                <Grid item style={{ userSelect: 'none', cursor: 'default' }}>
                                    <Card>
                                        <h1 style={{
                                            marginBottom: '0vh',
                                            fontSize: '8vh'
                                        }}>{gameTitle}
                                        </h1>
                                        <br />
                                        <p style={{
                                            marginTop: '0vh',
                                            paddingLeft: '2vw',
                                            paddingRight: '2vw',
                                            fontSize: '4vh'
                                        }}>{message}
                                        </p>
                                    </Card>
                                </Grid>
                                <br />
                                <Grid item style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button id = "start" style={{ fontSize: '8vh', height: '100%', width: '100%', cursor: 'pointer' }}
                                            onMouseDown={function () {
                                                if (startScreen) {
                                                    setStartScreen(false);
                                                }
                                            }}>
                                            Start (-)
                                        </button>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        : props => <div />
                }
            </Transition>
    )
}

export default LearnWordsStart;