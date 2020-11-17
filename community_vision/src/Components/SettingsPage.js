import React from 'react';
import '../App.css';
import Settings from './Settings'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

function  SettingsPage() {
    return(
        <div>
            <Settings/>
            <Grid justify='center'>
                <Link to="/games">
                    <button style={{width: '50vw',
                        minHeight: '7vh',
                        marginBottom: '1.5vh',
                        fontSize: '6vh',
                        textDecoration: 'none'}}>
                        Play Games!
                    </button>
                </Link>
            </Grid>
        </div>
    );
}
  

export default SettingsPage;