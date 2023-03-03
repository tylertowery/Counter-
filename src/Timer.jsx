import React, { useState } from 'react';
import Countdown from 'react-countdown';

export default function Timer ({ timerStarted, setTimerFinished}) {
  const [nowDate, setNowDate] = useState(Date.now() + 60000);

  const renderer = ({seconds}) => {
    console.log('renderer is called');
    if (seconds === 1) {
      setTimerFinished(true);
    }
    return <h3>{seconds}</h3>
  }

  return (
    <Countdown autoStart={false} date={nowDate} renderer={renderer} />
  )
}