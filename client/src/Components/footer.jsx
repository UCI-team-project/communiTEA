import React from 'react'

const FooterComponent = () => {
  return (
    <>
      <footer className='footer'>
        <div className='nav-container'>
          <ul>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>Dashboard</li>
          </ul>
        </div>
        <div className='nav-container'>
          <h1 className='nav-title'>CommuniTEA</h1>
        </div>
        <div className='nav-container'>
          <ul>
            <li className='nav-link'>Profile</li>
            <li className='nav-link'>Login</li>
            <li className='nav-link'>Register</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default FooterComponent
