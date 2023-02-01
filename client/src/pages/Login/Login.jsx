import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import { Button, Checkbox, Form, Input } from 'antd'
import Auth from '../../utils/auth.js'
import style from './login.module.css'
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
      <div className={style.loginContainer}>
        <Navbar navItem={'login'} />
      </div>
      <div className={style.container}>
        <h1 className={style.title}>Login</h1>
        <p className={style.text}>
          Find the best boba in your area. Give them a review to help your
          fellow boba-nians in finding the best boba in the area. 😉
        </p>
        <form className={style.formContainer} onSubmit={handleFormSubmit}>
          <input
            className={style.inputField}
            type='text'
            autoComplete='off'
            name='name'
            value={formState.name}
            onChange={handleInputChange}
            placeholder='Enter Username'
          />

          <input
            className={style.inputField}
            type='password'
            name='password'
            value={formState.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <span className={style.btnContainer}>
            <Button type='primary' htmlType='submit' block>
              Login
            </Button>
          </span>
          <div className={style.alternativeOptionSection}>
            <h4 className={style.altEl}>Don't have an account yet?</h4>
            <Link to='/signup'>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </form>
      </div>
      <FooterComponent />
    </>
  )
}
