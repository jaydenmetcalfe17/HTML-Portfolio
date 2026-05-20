import React from 'react'
import { NavLink } from 'react-router-dom'
// import "../assets/styles/navbar.css"

const Navbar = () => {

  const navLinkClasses = ({ isActive }) =>
    `
      px-4 py-2
      font-['Shrikhand']
      text-[20px]
      font-bold
      transition-colors
      duration-200
      ${isActive
        ? 'text-primaryBlue'
        : 'text-primaryWhite hover:text-primaryBlue'}
    `


  return (
    <header className="fixed pt-2 pb-2 top-0 z-1001 w-full min-w-250 bg-primaryRed shadow-[0px_3px_2px_0px_rgba(0,0,0,0.25)]">
      <nav className="flex justify-start py-3 px-4">
            <ul className="flex flex-wrap gap-2">
                <li className="nav-item">
                    <NavLink className={navLinkClasses} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={navLinkClasses} to="/experience">Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={navLinkClasses} to="/projects">Projects</NavLink>
                </li>
            </ul>
      </nav>
    </header>
    
  )
}

export default Navbar