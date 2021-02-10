import React from 'react';
import './Nav.css';
import Api from './components/Api.jsx'
import Game from './components/Game.jsx'
import Calculator from './components/Calculator.jsx'


const Nav = () => {
  return <nav className='nav'>
    <ol>
      <li>
        <a href="">
          <Game />
        </a>
      </li>
      <li>
        <a href="">
          <Calculator />
        </a>
      </li>
      <li>
        <a href="">
          <Api /> 
        </a>
      </li>
    </ol>
  </nav>
}

export default Nav ;