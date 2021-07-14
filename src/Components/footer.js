import React from 'react';

import img from './Imagenes/logo.png';
import facebook from './Imagenes/facebook.png';
import linkedln from './Imagenes/linkedln.png';
import insta from './Imagenes/insta.png';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <p>Realizado por Lorena Rippe</p>
        <img className='img' alt='img' src={img}></img>
        <div className='social'>
         <img className='facebook' alt='img' src={facebook}></img>
         <img className='instagran' alt='img' src={insta}></img>
         <img className='linkedln' alt='img' src={linkedln}></img>
     </div>
      </div>
    </footer>
  );
}

export default Footer;
