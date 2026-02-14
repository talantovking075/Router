import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1 className='logo'>MyBlog</h1>
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
