import React from 'react';

import './index.scss';
import img from './Imagenes/logo.png';

function Header() {
  return (
    <header>
      <div className='headerFree'>
        <div className='title'>
        <img className='img' alt='img' src={img}></img>
        </div>
        <div className='inicio'><a href="/">INICIO</a></div>
      </div>
    </header>
  );
}

export default Header;