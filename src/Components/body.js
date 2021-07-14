import React from 'react';

import './index.scss';
import img from './Imagenes/marvel.jpeg' 

function Body() {
  return (
      <div className='body'>
          <div>
        <img className='imgBody' alt='img' src={img}></img>
      </div>
      </div>
        );
}

export default Body;