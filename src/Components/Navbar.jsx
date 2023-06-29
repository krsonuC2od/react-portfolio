import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Navbar() {
  return (
    <>
    <ul className='nav'>
    <li ><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/skill'>Skill</Link></li>
    <li><Link to='/education'>Education</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>

    </ul>
    </>
  )
}

export default Navbar