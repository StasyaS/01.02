import React from 'react';
import s from './Nav.module.css';

import Api_date from './components/Api';
import Game from './components/Game';
import Calculator from './components/Calculator';

console.log(s);


const Nav_menu = () => {
  return (
    <nav className={s.nav}>
      <ol>
        <li className={`${s.firstLi} ${s.active}`}>
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