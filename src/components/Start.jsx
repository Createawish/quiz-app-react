import React from 'react';

const Start = ({setUsername}) => {
    return (
        <div className='start'>
            <input placeholder='enter you Username' className='startInput'/>
            <button className='startButton'>Start</button>
        </div>
    );
};

export default Start;