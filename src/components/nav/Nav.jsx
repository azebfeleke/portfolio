import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>

        
        <a href="#" className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
      
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail/></a>



      </nav>
  )
}

export default Nav