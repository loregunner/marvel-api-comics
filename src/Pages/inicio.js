import React from 'react';

import Header from '../Components/header';
import Body from '../Components/body';
import BodyInferior from '../Components/bodyInferior';
import Footer from '../Components/footer';
import Popup from '../Components/popup';
import BodyComics from '../Components/bodyComics';

function Inicio() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [bodyComics, setBodyComics] = React.useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div>
      <Header></Header>
      {bodyComics === true ? (
        <BodyComics></BodyComics>
      ) : (
        <div>
          <Body></Body>
          <BodyInferior togglePopup={togglePopup}></BodyInferior>
          <Popup
            tittle='INGRESAR'
            visible={popupOpen}
            togglePopup={togglePopup}
            setBodyComics={setBodyComics}
            setPopupOpen={setPopupOpen}
            popupOpen={popupOpen}></Popup>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}

export default Inicio;
