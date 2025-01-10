import React, {useState, useEffect} from 'react';
import "../../styles/ProjectStyles/DigitalClock.css"

function DigitalClock(){
  const [time,setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval( () => {
      setTime(new Date());
    },1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function formatDate(){
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = `${days[time.getDay()]}-${time.getDate()}-${months[time.getMonth()]}-${time.getFullYear()}`;

    // let formatedDate = new Intl.DateTimeFormat(
    //   'en-US',{
    //     weekday: 'long',
    //     day: "2-digit",
    //     month: "long",   
    //     year: "numeric"
    //   }
    // ).format(time);


    return (date);
  }

  

  function formatTime(){
    let hours = time.getHours();
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = String(hours % 12 || 12).padStart(2, '0');

    return (`${hours}:${minutes}:${seconds} ${meridiem}`);
  }

  return(
    <div className='clock-body'>
      <div className='clock-container'>
        <div className='clock'>
          <span>{formatTime()}</span>
        </div>
        <div className='date'>
          <span>{formatDate()}</span>
        </div>
      </div>

    </div>
    
    
  )
}

export default DigitalClock;