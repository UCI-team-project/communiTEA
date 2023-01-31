import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import { Button, Checkbox, Form, Input } from 'antd'
import Auth from '../../utils/auth.js'
import './login.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar'
function Login() {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })
  const [Login, { error, data }] = useMutation(LOGIN_USER)

  useEffect(() => {
    document.title = 'Login'
  }, [])

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await Login({
        variables: { ...formState },
      })

      Auth.login(data.login.token)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <Navbar navItem={'login'} />
      <div className='container'>
        <h1 className=''>Login Page</h1>
        <p className='text'>
          Find the best boba in your area. Give them a review to help your
          fellow boba-nians in finding the best boba in the area. 😉
        </p>
        <form className='form-container' onSubmit={handleFormSubmit}>
          <input
            className='input-field'
            type='text'
            autoComplete='off'
            name='username'
            value={formState.username}
            onChange={handleInputChange}
            placeholder='Enter username'
          />

          <input
            className='input-field'
            type='password'
            name='password'
            value={formState.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <button className='form-submit-btn' type='submit'>
            Login User
          </button>
          <div className='alternative-option-section'>
            <h3 className='alt-el'>Don't have an account yet?</h3>
            <Link to='/register' className='alt-btn alt-el'>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
