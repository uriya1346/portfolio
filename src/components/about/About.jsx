import React from 'react'
import './about.css'
import ME from '../../assets/img7.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about_content">
       <div className= "about_cards">
          <article className='about_card'>
          <FaAward className='about_icon'/>
           <h5>Experience</h5>
          <small>1+ Years Working</small>
          </article>
          <article className='about_card'>
          <FiUsers className='about_icon'/>
           <h5>Cooperatives</h5>
          <small>20+ Projects</small>
          </article>
          <article className='about_card'>
          <VscFolderLibrary className='about_icon'/>
           <h5>Projects</h5>
          <small>15+ Completed</small>
          </article>
        </div>
        <p>I have recently completed a "Full Stack Development" course in Ort Singalovsky Tel-Aviv. always looking to learn and improve my skills.
          <br></br>
          ★looking for my next challenge★
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
   </div>
    </section>

  )
}

export default About