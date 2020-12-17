import useSound from 'use-sound';
import dashSound from "../../Assets/Sounds/dash.mp3";
import dotSound from "../../Assets/Sounds/dot.mp3";
import {useState} from "react";



//Gets game values fom local storage
export function initial(type){
    if(localStorage.getItem(type) != null){
        return localStorage.getItem(type);
    }
    if(type === 'volume'){
        return 50;
    } else if(type === 'size'){
        return 29;
    } else if(type === 'speed'){
        return 1.5;
    } else if(type === 'backgroundColor'){
        return 'blue';
    } else if(type === 'fontColor'){
        return 'white';
    }
}

//Keyboard event handler
//Currently doesn't work
export function useEvents(evt) {
    const [playDash] = useSound(dashSound);
    const [playDot] = useSound(dotSound);
    const [input, setInput] = useState('');

    evt = evt || window.event;
    if (evt.keyCode === 32) {
        setInput(input + '•');
        playDot();
    } else if (evt.keyCode === 13) {
        setInput(input + '-');
        playDash();
    }
}