import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'

const contact = () => {



  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
       <div className='container contact__container'>
              <div className='contact__options'>
     <article className='contact__option'>
<AiTwotoneMail className='contact__option-icons'/>
      <h4>Email</h4>
       <h5>Azebfelekee@gmail.com</h5>
        <a href="mailto:Azebfelekee@gmail.com">Send a message</a> 
</article>
<article className='contact__option'>
<BsFillTelephoneFill/>
      <h4>Phone Number</h4>
       <h5>0960294986</h5>
        
</article>

        </div>


<form>

<input type="text" name='name' placeholder='Your Full Name' required/>
<input type="email" name='email' placeholder='Your Email' required/>
<textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>

</form>



       </div>

    </section>
  )
}

export default contact

