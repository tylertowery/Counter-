import React from 'react';

export default function UserScore ({ count, setUserScore }) {
  const handleExit = (event) => {
    setUserScore(false);
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <i onClick={handleExit} className="exit fa-solid fa-circle-xmark" />
        <h2 className='title'>Score:</h2>
        <h1>{count}</h1>
      </div>
    </div>
  );
}