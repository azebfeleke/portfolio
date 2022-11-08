import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'


const services = () => {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className='container services__container'>
      <article className="service">
        <div className='service__head'>
          <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>From idea to launch</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>Web design services</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>software solutions that are seamless both inside and outside</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>Cross-platform experiences design</p>
            </li>

            
            
            </ul>

      </article>




      <article className="service">
        <div className='service__head'>
          <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>From idea to launch</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>Customized web app development attract more users</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>PHP development.</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon'/>
              <p>WordPress development.</p>
            </li>

            
            
            </ul>

      </article>


     </div>




    </section>
  )
}

export default services