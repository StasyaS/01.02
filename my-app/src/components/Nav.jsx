import React from 'react';
import './Nav.css';
import Api_date from './components/Api';
import Game from './components/Game';
import Calculator from './components/Calculator';


const Nav_menu = () => {
  return (
    <nav className='nav'>
      <ol>
        <li>
          <a href="">
            <Game/>
          </a>
        </li>
        <li>
          <a href="">
            <Calculator/>
          </a>
        </li>
        <li>
          <a href="">
            <Api_date/> 
          </a>
        </li>
      </ol>
    </nav>    
  )

}

export default Nav_menu ;