import React from 'react';
import '../App.css';
import Settings from './Settings'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

function initial(type){
    if(localStorage.getItem(type) != null){
        return localStorage.getItem(type);
    }
    if(type === 'backgroundColor'){
        return 'blue';
    }
}

function SettingsPage() {
    const [backgroundColor] = React.useState(() => initial('backgroundColor'));
    return(
        <div style={{backgroundColor: backgroundColor, minHeight: '90vh', marginTop: '-1.5vh'}}>
            <Settings/>
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