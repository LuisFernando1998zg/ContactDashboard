import React, { useState } from 'react';
import './Form.css';
import useInputsStates from '../../hooks/useInputsStates';
import { useContacts } from '../../contexts/ContactsContext';
import defaultAvatar from '../../assets/avatar.jpg'; 


const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const Form = () => {
  const { addNewContact } = useContacts();

  const [isFavorite, setIsFavorite] = useState(false);
  const {
    value: firstnameValue,
    haveErrors: firstnameHaveErrors,
    isValid: firstnameIsValid,
    onChangeInputs: firstnameOnChangeInputs,
    blurHandlerInputs: firstnameBlurHandlerInputs,
    clearInputs: firstnameClearInputs
  } = useInputsStates((str) => str.trim() !== '');

  const {
    value: lastnameValue,
    haveErrors: lastnameHaveErrors,
    isValid: lastnameIsValid,
    onChangeInputs: lastnameOnChangeInputs,
    blurHandlerInputs: lastnameBlurHandlerInputs,
    clearInputs: lastnameClearInputs
  } = useInputsStates((str) => str.trim() !== '');

  const {
    value: emailValue,
    haveErrors: emailHaveErrors,
    isValid: emailIsValid,
    onChangeInputs: emailOnChangeInputs,
    blurHandlerInputs: emailBlurHandlerInputs,
    clearInputs: emailClearInputs
  } = useInputsStates(validateEmail);

  const handleCheckboxChange = (event) => {
    setIsFavorite(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formIsValid) {
      const newContact = {
        first_name: firstnameValue,
        last_name: lastnameValue,
        email: emailValue,
        isFavorite: isFavorite, 
        avatar: defaultAvatar 
      };
      addNewContact(newContact);

      firstnameClearInputs();
      lastnameClearInputs();
      emailClearInputs();
      setIsFavorite(false);
    }
  };

  const formIsValid = firstnameIsValid && lastnameIsValid && emailIsValid;

  return (
    <form aria-label="form to add a new contact" className="form" onSubmit={handleSubmit} noValidate>
      <div className='form__segment'>
        <input 
          type="text" 
          placeholder="First Name"
          className={`form__input ${firstnameHaveErrors ? 'error' : ''}`}
          value={firstnameValue}
          onChange={firstnameOnChangeInputs}
          onBlur={firstnameBlurHandlerInputs}
        />
        {firstnameHaveErrors && (
          <span className='errorMsg'>First name is required</span>
        )}
      </div>

      <div className='form__segment'>
        <input 
          type="text" 
          placeholder="Last Name" 
          className={`form__input ${lastnameHaveErrors ? 'error' : ''}`}
          value={lastnameValue}
          onChange={lastnameOnChangeInputs}
          onBlur={lastnameBlurHandlerInputs}
        />
        {lastnameHaveErrors && (
          <span className='errorMsg'>Last name is required</span>
        )}
      </div>

      <div className='form__segment'>
        <input 
          type="email" 
          placeholder="Email"
          className={`form__input ${emailHaveErrors ? 'error' : ''}`}
          value={emailValue}
          onChange={emailOnChangeInputs}
          onBlur={emailBlurHandlerInputs}
        />
        {emailHaveErrors && (
          <span className='errorMsg'>Email is required</span>
        )}
      </div>

      <div className='form__segment'>
        <label htmlFor="checkbox_option" className="form__label">
          <span>Enable like Favorites</span>
          <input 
            type="checkbox" 
            id="checkbox_option"
            checked={isFavorite}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <button
        className={`form__button ${!formIsValid ? 'disable' : ''}`}
        disabled={!formIsValid}
      >
        SAVE
      </button>
    </form>
  );
};

export default Form;