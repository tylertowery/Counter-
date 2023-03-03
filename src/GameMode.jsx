import React from 'react';

export default function GameMode ({ normal, setNormal, gauntlet, setGauntlet }) {

  const handleNormal = (event) => {
    event.preventDefault();
    setGauntlet(false);
    setNormal(true);
  }

  const handleGauntlet = (event) => {
    event.preventDefault();
    setNormal(false);
    setGauntlet(true);
  }

  let normalSelected;
  if (normal) {
    normalSelected = 'selected';
  } else {
    normalSelected = 'nope';
  }

  return (
    <div className='game-modes'>
      <h2>Game Modes</h2>
      <button className={normalSelected} onClick={handleNormal}>Normal</button>
      <button className={gauntlet  ? 'selected' : 'nope'} onClick={handleGauntlet}>Gauntlet</button>
    </div>
  )
}