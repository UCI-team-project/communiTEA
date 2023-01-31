import React from 'react'
import { Link } from 'react-router-dom'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import { Layout, Menu } from 'antd'
const { Header } = Layout

const Navbar = ({ navItem }) => {
  const navList = ['home', 'dashboard', 'profile', 'login']

  console.log(navItem)

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
  }
  return (
    <Header>
      <div className='' />
      <Menu
        theme='light'
        mode='horizontal'
        defaultSelectedKeys={populateNav(navItem)}
        items={navList.map((item, index) => {
          const key = index + 1
          return {
            key,
            label: <Link to={`/${item}`}>{capitalizeFirstLetter(item)}</Link>,
          }
        })}
      />
    </Header>
  )
}

export default Navbar
