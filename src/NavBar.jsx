import React, { useState } from 'react';
import NavMenu from './NavMenu';

export default function NavBar ({ username, setClosed, loggedIn, setLoggedIn, setHighscore, setHighscoreDisplay }) {
  const [openNav, setOpenNav] = useState(false);

  const handleOpen = (event) => {
    setOpenNav(!openNav);
  }

  const handleClick = (event) => {
    event.preventDefault();

  }

  return (
    <div className='navigation'>
      <div className='nav-menu'>
        <i onClick={handleOpen} className="options fa-solid fa-bars" />
        {openNav ? <NavMenu setClosed={setClosed} loggedIn={loggedIn} setHighscore={setHighscore} setHighscoreDisplay={setHighscoreDisplay} setLoggedIn={setLoggedIn}/> : null}
      </div>
      {loggedIn
        ? <p className='display-name'>{username}</p>
        : <p className='display-name'>Guest</p>
      }
    </div>
  )
}