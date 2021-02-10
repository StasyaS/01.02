import React from 'react';
import './Nav.css';
import Api from './components/Api'
import Game from './components/Game'
import Calculator from './components/Calculator'


const Nav = () => {
  return (
    <nav className='nav'>
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
  )

}

export default Nav ;