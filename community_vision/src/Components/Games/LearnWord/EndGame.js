import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {Transition} from "react-spring/renderprops";


function EndGame(props) {
    //background to match the current background in settings
    var backgroundColor;
    if(props.background === undefined) {
        backgroundColor = 'red';
    }
    else {
        backgroundColor = props.background;
    }

    //font color to match current font color in settings
    var fontColor;
    if(props.fontColor === undefined) {
        fontColor = 'white';
    }
    else {
        fontColor = props.fontColor;
    }

    //get the current level
    var currLevel;
    if(props.level === undefined) {
        currLevel = 'none';
    }
    else {
        currLevel = props.level;
    }

    //Complete level message display
    const msg = 'Congratulations, you completed ' + currLevel + ' level!!'

    const endScreen = props.end;
    const backToGames = props.backToGames;
    const setEndScreen = props.setEndScreen;

    //Set levels
    var nextLevelPath;
    var button1Content;
    if (currLevel === 'beginner') {
        nextLevelPath = '/learnWordMedium';
        button1Content = 'Play Next Level';
    }
    else if (currLevel === 'medium') {
        nextLevelPath = '/learnWordAdvanced';
        button1Content = 'Play Next Level';
    }
    else {
        nextLevelPath = '/games';
        button1Content = 'Games Page'
    }

    return (
        <Transition
                items={endScreen}
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
                            <Grid container justify='center' alignItems='center' style={{ height: '100%', width: '100%', zIndex: 1 }}>
                                <Grid item xs={9} style={{ userSelect: 'none', color: fontColor }}>
                                    <Card>
                                        <h1 style={{
                                            marginBottom: '0vh',
                                            fontSize: '8vh'
                                        }}>Yay!
                                        </h1>
                                        <br />
                                        <p style={{
                                            marginTop: '0vh',
                                            paddingLeft: '2vw',
                                            paddingRight: '2vw',
                                            fontSize: '8vh',
                                            marginBottom: '0vh'
                                        }}>{msg}
                                        </p>
                                    </Card>
                                </Grid>
                                <Grid item xs={4} style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', cursor: 'pointer', height: '100%', width: '100%' }}
                                            onMouseDown={function () {
                                                backToGames();
                                            }}>
                                            Other Games (•)
                                        </button>
                                    </Card>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4} style={{ userSelect: 'none' }}>
                                    <Card>
                                        <button style={{ fontSize: '8vh', cursor: ' pointer', height: '100%', width: '100%' }}
                                            onMouseDown={function () {
                                                setEndScreen(false);
                                            }}>
                                            More Practice (-)
                                        </button>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        : props => <div />
                }
            </Transition>
    );
}

export default EndGame;