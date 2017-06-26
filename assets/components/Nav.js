import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Nav() {
  return (
    <ul className='react-nav'>
      {/* <li>
        <NavLink exact activeClassName='active' to='/portfolio/react'>Home</NavLink>
      </li> */}
      <li>
        <NavLink activeClassName='active' to='/portfolio/react/calculator'>Calculator</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/portfolio/react/pomodoro'>Pomodoro Clock</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/portfolio/react/simon'>Simon</NavLink>
      </li>
      {/* <li><a href="/portfolio/tictactoe">Tic-Tac-Toe</a></li>
        <li><a href="/portfolio/weather">Local Weather</a></li>
        <li><a href="/portfolio/randomquote">Random Quote Machine</a></li>
        <li><a href="/portfolio/twitch">Twitch Stream</a></li>
      <li><a href="/portfolio/tribute">Tribute Page</a></li> */}
    </ul>
  )
}
