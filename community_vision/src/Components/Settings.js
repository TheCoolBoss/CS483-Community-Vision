import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function  Settings() {
    return (
        <div style={{position: 'relative'}}>
            <h1>Choose Your Game Settings</h1>
            <h1>Mute</h1>
            <Link className='nav-link' to="/games">
                <button>Play!</button>
            </Link>
            
        </div>
    )
}

export default Settings;