import React from 'react'
import { Link } from 'react-router-dom'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import { Layout, Menu } from 'antd'

import Auth from '../utils/auth'

const { Header } = Layout

const Navbar = ({ navItem }) => {
  const navList = ['home', 'dashboard', 'profile', 'login']

  const navListAuth = ['home', 'dashboard', 'profile']

  let nav = navListAuth.map((item, index) => {
    const key = index + 1
    return {
      key,
      label: <Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link>,
    }
  })
  let key = 4
  nav.push({
    key,
    label: (
      <Link to={`/`} onClick={Auth.logout}>
        Logout
      </Link>
    ),
  })

  function populateNav(item) {
    if (item === 'home') {
      return ['1']
    }
    if (item === 'dashboard') {
      return ['2']
    }
    if (item === 'profile') {
      return ['3']
    }
    if (item === 'login') {
      return ['4']
    }
    if (item === 'logout') {
      return ['4']
    }
  }
  /**
   * TODO:
   * - use conditional statements to display the logout link if a user is logged in
   * - else: return the login link
   */
  return (
    <Header>
      <div>
        {Auth.loggedIn() ? (
          <Menu
            theme='light'
            mode='horizontal'
            defaultSelectedKeys={populateNav(navItem)}
            items={nav}

            // temp fix for navbar horizontal collapse, not sure if we want to use this
            // style={{ minWidth: "317px", flex: "auto" }}
          />
        ) : (
          <Menu
            theme='light'
            mode='horizontal'
            /**
             *  this checks what page the user is currently on and will highlight the corresponding link
             *  ex: dashboard page will return defaultSelectedKeys=['2']
             */
            defaultSelectedKeys={populateNav(navItem)}
            items={navList.map((item, index) => {
              const key = index + 1
              return {
                key,
                label: (
                  <Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link>
                ),
              }
            })}
          />
        )}
      </div>
    </Header>
  )
}

export default Navbar
