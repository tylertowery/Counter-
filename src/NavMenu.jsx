import React from 'react';
import axios from 'axios';

export default function NavMenu ({ setClosed, loggedIn, setLoggedIn, setHighscore, setHighscoreDisplay}) {
  const handleLogout = (event) => {
    setLoggedIn(false);
  }

  const handleLogin = (event) => {
    setClosed(false);
  }

  const handleLeaderboards = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3005/api/highscores')
      .then((response) => {
        let getScores = [];
        response.data.forEach((element) => {
          const entry = {
            name: element.name,
            score: element.score
          }
          getScores.push(entry);

        })
        setHighscore(getScores);
        setHighscoreDisplay(true);
      })
        // .then((result) => {
        //   setHighscoreDisplay(true);
        // })
        // .catch((error) => {
        //   console.log(error.stack);
        // });
      .catch((error) => {
        console.log(error.stack);
      });
  }

  return (
    <div id='expanded-menu'>
      {loggedIn
        ? <button className='nav-button' onClick={handleLogout}>Logout</button>
        : <button className='nav-button' onClick={handleLogin}>Login</button>}
      <button className='nav-button' onClick={handleLeaderboards}>Leaderboards</button>
      <button className='nav-button'>Options</button>
    </div>
  )
}