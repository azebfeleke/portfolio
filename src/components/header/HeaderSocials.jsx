import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {MdMarkEmailRead} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
 <a href='https://linkedin.com' ><BsLinkedin/></a>
 <a href='https://github.com' ><AiFillGithub/></a>
 <a href='https://gmail.com'><MdMarkEmailRead/></a>
    </div>
  )
}

export default HeaderSocials