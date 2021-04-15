import React, { forwardRef } from 'react';
import CustomWords2 from './CustomWords2';

const preCustomWords = forwardRef((props, ref) => {

    var [customWord, setCustomWord] = React.useState('');
    var [wordsArr, setWordsArr] = React.useState([]);

    const handleEnter = () => {
        var tempArr = wordsArr;
        tempArr.push(customWord);
        setWordsArr(tempArr);
        console.log(wordsArr);
    }

    var [start, setStart] = React.useState(false);

    return (
        
        <div style={{background: 'white'}}>
            {start ?
                <CustomWords2 data={wordsArr}/>
            :
            <div>
                <form>
                    <label>
                        Name:
                        <input id={customWord} type="text" onChange={e => setCustomWord(e.target.value)}/>
                    </label>
                </form>
                <button onClick={() => handleEnter()}>Enter</button>
                <button onClick={() => {
                    setStart(true);
                }}>Start</button>
            </div>
            }
        </div>
    )
});

export default preCustomWords;