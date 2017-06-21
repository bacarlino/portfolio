import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/calculator'>Calculator</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/pomodoro'>Pomodoro</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/simon'>Simon</NavLink>
      </li>
      {/* <li><a href="/portfolio/tictactoe">Tic-Tac-Toe</a></li>
        <li><a href="/portfolio/weather">Local Weather</a></li>
        <li><a href="/portfolio/randomquote">Random Quote Machine</a></li>
        <li><a href="/portfolio/twitch">Twitch Stream</a></li>
      <li><a href="/portfolio/tribute">Tribute Page</a></li> */}
    </ul>
  )
}
