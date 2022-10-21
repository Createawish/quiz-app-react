import React, {useEffect, useState} from 'react';

const Timer = () => {
    const [timer,setTimer] = useState(30)


    useEffect(()=>{
        const interval = setInterval(()=>{}, 1000)
        setTimer(prev=> prev-1)
    },[])


    return timer;
};

export default Timer;