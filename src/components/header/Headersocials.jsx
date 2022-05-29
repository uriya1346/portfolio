import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/uriya-davidi' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/uriya1346' target="_blank"><FaGithub /></a>
        <a href='https://www.instagram.com/uriya_davidi' target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default Headersocials