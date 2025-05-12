import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/styles/navbar.scss"

const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-start py-3 mb-4 border-bottom">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/experience">Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </li>
            </ul>
    </header>
    
  )
}

export default Navbar