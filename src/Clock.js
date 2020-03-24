import React, { useRef } from 'react';
import './Clock.css';

const Clock = () => {
  
  var secondsHand = useRef(null);
  //var minsHand = useRef(null);
  //var hourHand = useRef(null);
  
  function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    
    secondsHand.current = `rotate(${secondsDegrees}deg)`;
    console.log("seconds hand", secondsHand);

  }
   setInterval(setDate, 1000);
   setDate();

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand min-hand"></div>
        <div className="hand second-hand" ref={ secondsHand }></div>
      </div>
    </div>
  )
 }
export default Clock;
