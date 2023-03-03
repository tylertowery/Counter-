import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Button from './Button.jsx';
import axios from 'axios';

// const CompleteMessage = () => <h3>Finished!</h3>

export default function MainGame ({ username, count, setCount, setUserScore }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [nowDate, setNowDate] = useState(Date.now() + 15000);

  const handleComplete = () => {
    setTimerStarted(false);
    console.log('game is complete');
    axios.post('http://localhost:3005/api/score', {name: username, score: count})
      .then((response) => {
        setUserScore(true);
      })
      .catch((error) => {
        alert('Cannot save scores for Guest');
      });
  }

  const handleStart = (event) => {
    setTimerStarted(true);
    setTimerFinished(false);
    setNowDate(Date.now() + 14000)
  }

  const handleRetry = (event) => {
    setNowDate(Date.now() + 15000);
    setTimerStarted(true);
    setTimerFinished(false);
    setCount(0);
  }

  const handleIncrement = (event) => {
    console.log('handling increment');
    setCount(count + 1);
  }

  const renderer = ({seconds, start, completed, api}) => {
    console.log('renderer is called');
    if (completed) {
      setTimerFinished(true);
      return <h3>Finished!</h3>
    } else {
      return <h3>{seconds}</h3>
    }
  }


  return (
    <div className='main-container'>
      <h1>COUNTER++</h1>
      <div id='main-display'>
        <div className='timer'>
          {timerStarted || timerFinished
            ? <Countdown onComplete={handleComplete} date={nowDate} renderer={renderer} />
            : <h3>15</h3>
          }
        </div>
        <div className='counter'>{count}</div>
        <div className='button-container'>
        {timerStarted
          ? <button className='clicker' onClick={handleIncrement}>Click!</button>
          : timerFinished
            ? <button className='clicker' onClick={handleRetry}>Retry</button>
            : <button className='clicker' onClick={handleStart}>Start</button>}
        </div>
      </div>
    </div>
  )
}
