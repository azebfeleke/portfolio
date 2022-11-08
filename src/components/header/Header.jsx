import React from 'react'
import './header.css'
import  CTA from './CTA'
import ME from '../../assets/header-img.svg'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
<div className="container header__container">
  <h5>Hello I am</h5>
  <h1>Azeb Feleke</h1>
  <h5 className="text-light">FrontEnd Developer/UX Designer</h5></div>

<CTA/>
<HeaderSocials/>


<div className="me">
  <img align =""  src={ME} alt="me"/>
</div>

< a href="#contact" className='scroll__down'>Scroll Down</a>

      </header>
  )
}

export default header