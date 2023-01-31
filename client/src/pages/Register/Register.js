import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../../utils/mutations'
import { Button, Checkbox, Form, Input } from 'antd'
import Navbar from '../../Components/navbar'

import Auth from '../../utils/auth.js'
import FooterComponent from '../../Components/footer/footer'

function Register() {
  const [formState, setFormState] = useState({
    name: '',
    password: '',
  })

  const [register, { error, data }] = useMutation(REGISTER_USER)

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await register({
        variables: { ...formState },
      })
      console.log(data)
      Auth.login(data.register.token)
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
        <h1 className='title'>Register Page</h1>
        <p className='text'>
          Sign up now for more information on trending boba shops from some of
          the greatest boba enthusiasts in your area! 🧋
        </p>
        <form className='form-container' onSubmit={handleFormSubmit}>
          <input
            className='input-field'
            type='text'
            autoComplete='off'
            name='name'
            value={formState.name}
            onChange={handleInputChange}
            placeholder='Create Username'
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
              Register User
            </Button>
          </span>
        </form>
      </div>
      <FooterComponent />
    </>
  )
}

export default Register
