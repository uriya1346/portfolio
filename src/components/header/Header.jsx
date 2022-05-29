import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/imgContact3.png'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header>
    <div className="container header_container">
     <h5>Hello I'm</h5>
     <h1>Uriya Davidi</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <Headersocials/>

      <div className="me">
      <img src={ME} alt="me" />
      </div>

     <a href="#contact" className='scroll_down'>Scroll Down</a>

   </div>
 </header>
  )
}

export default Header