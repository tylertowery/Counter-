import React, { useState } from 'react';
import './App.css';
import Login from './Login.jsx';
import NavBar from './NavBar';
import MainGame from './MainGame';
import SignIn from './SignIn';
import GameMode from './GameMode';
import AdSpace from './AdSpace';
import Highscore from './Highscore';
import UserScore from './UserScore';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [closed, setClosed] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const [normal, setNormal] = useState(true);
  const [gauntlet, setGauntlet] = useState(false);
  const [highscore, setHighscore] = useState([]);
  const [highscoreDisplay, setHighscoreDisplay] = useState(false);
  const [userScore, setUserScore] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {userScore
        ? <UserScore count={count} setUserScore={setUserScore}/>
        : null}
      {highscoreDisplay
        ? <Highscore highscore={highscore} setHighscoreDisplay={setHighscoreDisplay}/>
        : null}
      {closed
        ? null
        : signingIn
          ? <SignIn
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setClosed={setClosed}
          setSigningIn={setSigningIn}
          setLoggedIn={setLoggedIn}/>
          : <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setLoggedIn={setLoggedIn}
            setClosed={setClosed}
            setSigningIn={setSigningIn} />
      }
      <NavBar
        highscoreDisplay={highscoreDisplay}
        setHighscore={setHighscore}
        setHighscoreDisplay={setHighscoreDisplay}
        setClosed={setClosed}
        username={username}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <div id='page-view'>
        <GameMode normal={normal} setNormal={setNormal} gauntlet={gauntlet} setGauntlet={setGauntlet}/>
        <MainGame username={username} count={count} setCount={setCount} setUserScore={setUserScore} />
        <AdSpace />
      </div>
    </div>
  );
}
