import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import './signup.css'


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
        setFormState({...formState,[name]: value,});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // console.log(...formState)

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <h1 className=''>Sign up Page</h1>
      <p className='text'>
        Find the best boba in your area. Give them a review to help your fellow
        boba-nians in finding the best boba in the area. 😉
      </p>
      <form className='form-container' onSubmit={handleFormSubmit}>
        <input
          className='input-field'
          type='text'
          name='username'
          value={formState.username}
          onChange={handleChange}
          placeholder='Enter username'
        />
        <input
          className='input-field'
          type='text'
          name='firstName'
          value={formState.firstName}
          onChange={handleChange}
          placeholder='Enter first name'
        />
        <input
          className='input-field'
          type='text'
          name='lastName'
          value={formState.lastName}
          onChange={handleChange}
          placeholder='Enter last name'
        />
        <input
          className='input-field'
          type='password'
          name='password'
          value={formState.password}
          onChange={handleChange}
          placeholder='Password'
        />
        <button className='form-submit-btn' type='submit'>
            Submit
        </button>
      </form>
    </div>
  )
}

export default Signup;