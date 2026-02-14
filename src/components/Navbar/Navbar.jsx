import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1 className='logo'>MyBlog</h1>
            <ul className='nav-links'>
            <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
