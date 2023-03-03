import React, { useState } from 'react';
import axios from 'axios';

export default function SignIn ({ username, setUsername, password, setPassword, setClosed, setSigningIn, setLoggedIn }) {
  const handleExit = () => {
    setClosed(true);
  }

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(password);
    console.log(username);
    axios.post('http://localhost:3005/api/signup', {"login": username, "password": password})
      .then((response) => {
        setLoggedIn(true);
        setClosed(true);
      })
      .catch((error) => {
        alert('Username is already taken');
      });
  }

  const handleLoggingIn = () => {
    setSigningIn(false);
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <i onClick={handleExit} className="exit fa-solid fa-circle-xmark" />
        <h2 className='title'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div id='username-group'>
            <label htmlFor='username'>Username: </label>
            <input id='username' onChange={updateUsername} value={username} placeholder='natwashere'></input>
          </div>
          <div id='password-group'>
            <label htmlFor='password'>Password: </label>
            <input id='password' onChange={updatePassword} value={password} type='password'></input>
          </div>
          <div id='button-group'>
            <button onClick={handleLoggingIn} className='login-button' type='button'>Login</button>
            <button type='submit' className='login-button'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}