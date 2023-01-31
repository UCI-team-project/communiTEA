import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import { Button, Checkbox, Form, Input } from 'antd'
import Auth from '../../utils/auth.js'
import './login.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar'
import FooterComponent from '../../Components/footer/footer'

export default function Login() {
  const [formState, setFormState] = useState({
    name: '',
    password: '',
  })
  const [Login, { error, data }] = useMutation(LOGIN_USER)
  /**
   * TODO: integrate the error prop to conditional render an an error component
   */
  useEffect(() => {
    document.title = 'CommuniTEA - Login'
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
      <div className='profile-container'>
        <Navbar navItem={'login'} />
      </div>
      <div className='container'>
        <h1 className='title'>Login Page</h1>
        <p className='text'>
          Find the best boba in your area. Give them a review to help your
          fellow boba-nians in finding the best boba in the area. 😉
        </p>
        <form className='form-container' onSubmit={handleFormSubmit}>
          <input
            className='input-field'
            type='text'
            autoComplete='off'
            name='name'
            value={formState.name}
            onChange={handleInputChange}
            placeholder='Enter Username'
          />

          <input
            className='input-field'
            type='password'
            name='password'
            value={formState.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <span className='btn-container'>
            <Button type='primary' htmlType='submit' block>
              Login
            </Button>
          </span>
          <div className='alternative-option-section'>
            <h4 className='alt-el'>Don't have an account yet?</h4>
            <Link to='/register'>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </form>
      </div>
      <FooterComponent />
    </>
  )
}
