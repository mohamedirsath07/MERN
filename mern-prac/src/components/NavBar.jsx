import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='link'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/State'>useState</Link>
        <Link to='/Effect'>useEffect</Link>
    </div>
    </>
  )
}

export default NavBar