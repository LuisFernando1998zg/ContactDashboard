import React from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const submitValues = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form aria-label="form to add a new contact" className="form" onSubmit={handleSubmit(submitValues)} noValidate>
      <div className='form__segment'>
        <input type="text" placeholder="First Name" id="firstname" className={`form__input ${errors.firtsname ? 'error' : ''}`}
          {...register("firtsname", {
            required: {
              value: true,
              message: "First Name is Required",
            },
          })} />
        {errors.firtsname && (
          <span className='errorMsg'>{errors.firtsname.message}</span>
        )}
      </div>

      <div className='form__segment'>
        <input type="text" placeholder="Last Name" id="lastname" className={`form__input ${errors.lastname ? 'error' : ''}`}
          {...register("lastname", {
            required: {
              value: true,
              message: "Last Name Is Required",
            },
          })} />
        {errors.lastname && (
          <span className='errorMsg'>{errors.lastname.message}</span>
        )}
      </div>

      <div className='form__segment'>
        <input type="email" placeholder="Email" id="email" className={`form__input ${errors.email ? 'error' : ''}`}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email is not valid',
            },
          })} />
        {errors.email && (
          <span className='errorMsg'>{errors.email.message}</span>
        )}
      </div>

      <div className='form__segment'>
        <label htmlFor="checkbox option" className="form__label ">
          <span>Enable like Favorites</span>
          <input type="checkbox" id="checkbox option"
            {...register("favoritesChekbox")}
          />
        </label>
      </div>
      <button type="submit" className="form__button">SAVE</button>
    </form>
  );
};