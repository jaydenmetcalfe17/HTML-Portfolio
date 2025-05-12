import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterBar from '../components/FooterBar'
import '../assets/styles/main.scss'

const MainLayout = () => {
    return (
      <>  
      <Navbar /> 
      <div className="page-content"> 
        <Outlet />
      </div>
      <FooterBar />
    </>
    )
  }
  
  export default MainLayout