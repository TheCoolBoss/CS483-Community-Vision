import React, { useState } from 'react';
import '../App.css';
import Settings from './Settings'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { initial } from "./Games/Common/Functions";
import pic from './settings.png'
import Card from '@material-ui/core/Card';

function SettingsPage(props) {
    return (
        <div style={{
            minHeight: '90vh',
            marginTop: '-1.5vh'
        }}>
            <Card>
                <h1 style={{ fontSize: '6vh', marginTop: '2vh', marginBottom: 0, userSelect: 'none' }}>
                    <img style={{ height: '5vh' }} src={pic} alt={pic}></img>
                    Settings
                </h1>
            </Card>
            <Settings updateSettingsPageState={props.updateAppState}
                updateNavState={() => void 0} />
        </div>
    );
}


export default SettingsPage;