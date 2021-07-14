import React from 'react';

import './index.scss';
import img from './Imagenes/logo.png';
import imgComic from './Imagenes/comics.jpeg';

import Button from '@material-ui/core/Button';

function BodyInferior(props) {
  return (
    <div className='cardInferior'>
      <img className='img' alt='img' src={img}></img>
      <div className='elige'>ELIGE TU COMIC FAVORITO</div>
      <div className='botonIngresar'>
        <Button
          variant='contained'
          className='button'
          onClick={props.togglePopup}>
          INGRESA
        </Button>
      </div>
      <div className='comics'><img className='img' alt='img' src={imgComic}></img></div>
    </div>
  );
}

export default BodyInferior;
