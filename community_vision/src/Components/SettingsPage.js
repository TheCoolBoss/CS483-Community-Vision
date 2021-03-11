import React, { useState } from 'react';
import '../App.css';
import Settings from './Settings'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { initial } from "./Games/Common/Functions";

function SettingsPage(props) {
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    return(
        <div style={{backgroundColor: backgroundColor,
            minHeight: '90vh',
            marginTop: '-1.5vh'}}>
            <Settings updateNavBackgroundColor={setBackgroundColor}
                updateNavFontColor={setFontColor}
                updateSettingsPageState={props.updateAppState}
                updateNavState={() => void 0} />
            <Grid justify='center'>
                <Link to="/games">
                    <button style={{width: '50vw',
                        minHeight: '5vh',
                        marginBottom: '1.5vh',
                        fontSize: '3vw',
                        textDecoration: 'none'}}>
                        Play Games!
                    </button>
                </Link>
            </Grid>
        </div>
    );
}
  

export default SettingsPage;