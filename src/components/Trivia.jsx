import React, {useEffect, useState} from 'react';
import '../App.css';
import useSound from 'use-sound';
import play from '../assets/src_sounds_play.mp3'
import correct from '../assets/src_sounds_correct.mp3';
import wait from '../assets/src_sounds_wait.mp3';
import error from '../assets/src_sounds_wrong.mp3';

const Trivia = ({data,setStop,setQuestionNumber,questionNumber}) => {

    const [question, setQuestion]= useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer')
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [letsWait] = useSound(wait);
    const [errorAnswer] = useSound(error);

    useEffect(()=>{
        letsPlay()
    },[letsPlay])


    const delay = (duration, callback) => {
setTimeout(()=>{
    callback();
}, duration)
    };

    const handleClick = (a) => {
        setSelectedAnswer (a);
        setClassName('answer active');
        delay(3000, ()=>setClassName(a.correct ? 'answer correct' : 'answer error'))
       delay(6000, ()=>{
           if(a.correct){
               correctAnswer()
               delay(1000,() => {
                   setQuestionNumber(prev => prev + 1);
                   setSelectedAnswer(null);
               });
           }else {
               delay(1000,()=> {
                   setStop(true)
               })
           }
       })
    }

    useEffect(()=>{
    setQuestion(data[questionNumber-1])
},[data,questionNumber])

    return (
        <div className='trivia'>
                <div className='question'>{question?.question}</div>
            <div className='answers'>
                    {question?.answers.map(a=>
                        <div className={selectedAnswer === a? className : 'answer' } onClick={()=>handleClick(a)}>{a.text}</div>)}
                </div>
                </div>
    );

}

export default Trivia;