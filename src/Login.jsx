import React, { useState } from 'react';
import axios from 'axios';

export default function Login ({ username, setUsername, password, setPassword, setLoggedIn, setClosed, setSigningIn }) {

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(password);
    console.log(username);
    axios.get('http://localhost:3005/api/login', {params: {"login": username, "password": password}})
      .then((response) => {
        setLoggedIn(true);
        setClosed(true);
      })
      .catch((error) => {
        alert('Username or password were incorrect');
      });
  }

  const handleExit = (event) => {
    setClosed(true);
  }

  const handleSigningIn = (event) => {
    setSigningIn(true);
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <i onClick={handleExit} className="exit fa-solid fa-circle-xmark" />
        <h2 className='title'>Login</h2>
        <form onSubmit={handleLogin}>
          <div id='username-group'>
            <label htmlFor='username'>Username: </label>
            <input id='username' onChange={updateUsername} value={username} placeholder='natwashere'></input>
          </div>
          <div id='password-group'>
            <label htmlFor='password'>Password: </label>
            <input id='password' onChange={updatePassword} value={password} type='password'></input>
          </div>
          <div id='button-group'>
            <button className='login-button' type='submit'>Login</button>
            <button type='button' className='login-button' onClick={handleSigningIn}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}