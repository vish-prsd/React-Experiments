import React, {useState, useRef, useEffect} from 'react';

function StopWatch(){

  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalIdref = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning){
      intervalIdref.current = setInterval(() => {
        setelapsedTime(Date.now() - startTimeRef.current);
      },10)
    }
    
    return () =>{
      clearInterval(intervalIdref.current);
    };
  
  },[isRunning])

  
  function start(){
    setisRunning(true);
    startTimeRef.current = Date.now() - elapsedTime; 
  }

  function stop(){
    setisRunning(false);
  }

  function reset(){
   
    setelapsedTime(0);
    setisRunning(false);
  }

  function formatTime(){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let miliseconds  = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    miliseconds = String(miliseconds).padStart(2,'0');

    return `${minutes}:${seconds}:${miliseconds}`;
  }

  return(
    <>
    <div className='stopwatch'>
      <div className='display'>{formatTime()}</div>
      <div className='controls'>
        <button className='start-button' onClick={start}>START</button>
        <button className='stop-button'onClick={stop}>STOP</button>
        <button className='reset-button' onClick={reset}>RESET</button>
      </div>
    </div>
    </>
  )
}

export default StopWatch;