import React, {useState, useRef, useEffect} from 'react';

function StopWatch(){

  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalIdref = useRef(null);
  const startTimeRef = useRef(0);

  function start(){

  }

  function stop(){

  }

  function reset(){

  }

  function formatTime(){
    return '00:00:00';
  }

  return(
    <>
    <div className='stopwatch'>
      <div className='display'>{formatTime()}</div>
      <div className='controls'>
        <button className='start-button' onClick={start}>Start</button>
        <button className='stop-button'onClick={stop}>Stop</button>
        <button className='reset-button' onClick={reset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default StopWatch;