import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {HiFolderOpen} from 'react-icons/hi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
      <div className="about__content">
       <div className='about__cards'>
        <article className='about__card'>
        <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
            
          </article>

          <article className='about__card'>
          <FaUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Satisfied</small>
            
          </article>
          <article className='about__card'>
          <HiFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>15+ Completed</small>
            
          </article>
          </div> 
          <p>         I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch
            i can code my own designs or use the customer's design as base.My focus is to generate clean code that's well sturcture for reliability. I have an Experience in building UI/UX designs for different Projects using designing and prototyping tools.
          </p>
          
          
          
          <a href="#contact" className='btn btn-prmary'>Let's Talk</a>
          </div> 
          </div>
      
    
          
    
    </section>
  )
}

export default about