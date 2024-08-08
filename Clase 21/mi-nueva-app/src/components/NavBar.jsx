import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export const NavBar = () => {
  return (
    
            <nav className='navbar'>
                <h1>Mi tienda</h1>

                <ul className='navbar-links'>
                <Link to="/"> <li>Inicio</li></Link> 
                <Link to="/carnes"> <li>Carnes</li></Link>
                <Link to="/verduras"> <li>Verduras</li></Link>
                <Link to="/herramientas">  <li>Herramientas</li></Link>
                </ul>
            </nav>
 
  )
}
