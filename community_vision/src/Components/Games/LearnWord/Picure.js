import React from 'react';
import { Transition, animated} from 'react-spring/renderprops';

const Picture = (props) => {
    let [picHeight, setPicHeight] = React.useState('40vh');
    let [picWidth, setPicWidth] = React.useState('25vw');

    React.useEffect (() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 700) {
                setPicHeight('30vh');
                setPicWidth('20vw');
            }
            else {
                setPicHeight('40vh');
                setPicWidth('25vw');
            }
        })
    })
    

    const img = props.img;
    return (
    <Transition
        native
        reset
        unique
        items={img}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
    >
        {show => show && (props => 
            <animated.image style={props}>
                <img src={img} alt={props.currentWord} style={{width: picWidth, height: picHeight}}/>
            </animated.image>
        )}
    </Transition>
    )
}

export default Picture;

