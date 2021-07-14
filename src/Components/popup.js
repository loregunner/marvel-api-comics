import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './index.scss';

function Popup({ onClose, ...props }) {
  const initialValuesForm = { email: '', nombre: '', celular: '' };
  const [formValues, setFormValues] = useState(initialValuesForm);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e,values) => {
    e.preventDefault();
    if(formValues.nombre === ''  && formValues.email  === '' && formValues.celular === '' || formErrors.nombre  && formErrors.email  && formErrors.celular ){
      props.setPopupOpen(true);
    }else  {setFormValues(initialValuesForm); props.setBodyComics(true);   props.setPopupOpen(false)};
    
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!values.email) {
      errors.email = 'No puede estar vacio';
    } else if (!regex.test(values.email)) {
      errors.email = 'Email invalido';
    }
    if (!values.nombre) {
      errors.nombre = 'No puede estar vacio';
    } else if (values.nombre.length < 7) {
      errors.nombre = 'El nombre debe tener mas de 7 caracteres';
    }
    if (!values.celular) {
      errors.celular = 'No puede estar vacio';
    } else if (!regexNum.test(values.celular)) {
      errors.celular = 'Numero invalido';
    }
    return errors;
  };



  return (
    <Dialog
      aria-labelledby='simple-dialog-title'
      open={props.visible}
      fullWidth={true}
      maxWidth='xs'>
          
      <DialogTitle id='simple-dialog-title' className='ingresa'>INGRESA</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit} noValidate>
          {props.popupOpenFooter !== true ? (
            <div className='form-row' >
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='nombre'
                name='nombre'
                id='nombre'
                value={formValues.nombre}
                onChange={handleChange}
                className={formErrors.nombre && 'input-error'}
              />
              {formErrors.nombre && (
                <span className='error'>{formErrors.nombre}</span>
              )}
            </div>
          ) : null}
          <div className='form-row'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && 'input-error'}
            />
            {formErrors.email && (
              <span className='error'>{formErrors.email}</span>
            )}
          </div>
          {props.popupOpenFooter !== true ? (
            <div className='form-row'>
              <label htmlFor='celular'>Celular</label>
              <input
                type='celular'
                name='celular'
                id='celular'
                value={formValues.celular}
                onChange={handleChange}
                className={formErrors.celular && 'input-error'}
              />
              {formErrors.celular && (
                <span className='error'>{formErrors.celular}</span>
              )}
            </div>
          ) : null}
          <button type='submit' className='buttonSubmit'>
            Enviar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
};

export default Popup;
