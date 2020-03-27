import React, { useRef } from 'react';
import './Clock.css';

const Clock = () => {
  
  const secondsHand = useRef(null);
  const minuteHand = useRef(null);
  const hourHand = useRef(null);
  
  function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
      if (secondsHand.current !== null) {
        secondsHand.current.style.transform = `rotate(${secondsDegrees}deg)`
      }

    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
      if (minuteHand.current !== null) {
          minuteHand.current.style.transform = `rotate(${minsDegrees}deg)`;
          
      }
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
      if (hourHand.current !== null) {
          hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;
      } 
  }
   setInterval(setDate, 1000);
   setDate();

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="num0">12 <span role="img" aria-label="crab">🦀 </span></div>
        <div className="num3"><span role="img" aria-label="fish">🐠</span> 3</div>
        <div className="num6">6 <span role="img" aria-label="octo">🐙</span></div>
        <div className="num9">9 <span role="img" aria-label="whale">🐳</span></div>
        <div className="hand hour-hand" ref = { hourHand }></div>
        <div className="hand min-hand" ref={ minuteHand }></div>
        <div className="hand second-hand" ref={ secondsHand }></div>
      </div>
    </div>
  )
 }
export default Clock;
