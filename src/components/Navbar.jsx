import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import BreadcrumbDrawer from './SideBar'


 /* <img src={logo} className="mx-2 w-10" alt="Nagamangala Traders" />*/
const Navbar = () => {
  return (
    <nav className=" mb-2 flex  items-center justify-between py-4 ">
      <div className="flex flex-shrink-0 items-center">
        
      
        <h1 style={{fontWeight:'bold',fontSize:'27px'}}> Traders</h1>
      </div>
      <div className="  m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareTwitter />
      </div>
    </nav>
  );
}

export default Navbar