import React from 'react';
import { Transition, animated} from 'react-spring/renderprops';

const Picture = (props) => {
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
                <img src={img} alt="Current Picture" style={{width: '25vw', height: '40vh'}}/>
            </animated.image>
        )}
    </Transition>
    )
}

export default Picture;

