import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <Link passHref to="/"><span className='navbrand'>Anime World</span></Link>
    </div>
    </>
  )
}

export default Navbar;