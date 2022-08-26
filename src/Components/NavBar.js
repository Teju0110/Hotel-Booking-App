import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='navBar_Container'>
            <span className='logo'>Booking</span>
            <div className='navBar_Items'>
                <button className='navBar_Button'>Register</button>
                <button className='navBar_Button'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar