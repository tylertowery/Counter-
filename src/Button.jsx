import React, { useState } from 'react';

export default function Button ({ timerStarted, setTimerStarted, timerFinished, setTimerFinished, setNowDate, count, setCount }) {
  const handleStart = (event) => {
    setTimerStarted(true);
    setTimerFinished(false);
    setNowDate(Date.now() + 14000)
  }

  const handleComplete = () => {
    setTimerStarted(false);
  }

  const handleIncrement = (event) => {
    console.log('handling increment');
    setCount(count + 1);
  }

  let button;

  if (timerStarted) {
    return button = <button onClick='handleIncrement'>Click Me!</button>
  } else if (timerFinished) {
    return button = <button onClick='handleRetry'>Retry!</button>
  } else {
    return button = <button onClick='handleStart'>Start</button>
  }
}