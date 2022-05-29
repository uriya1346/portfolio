import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>last projects</h5>
    <h2>Languages that I used in my recent projects</h2>
     <div className="container services_container">
      <article className="service">
         <div className="service_head">
           <h3>Rental & Sale cars</h3>
         </div>
         <ul className='service_list'>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>HTML</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>CSS</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>JavaScript</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>Bootstrap</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>React</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>Node JS</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>MongoDB</p>
           </li>
         </ul>
      </article>
      {/* end of ux/ui */}
      <article className="service">
         <div className="service_head">
           <h3>Exchange</h3>
         </div>
         <ul className='service_list'>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>HTML</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>CSS</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>JavaScript</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>Bootstrap</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>React</p>
           </li>
         </ul>
      </article>
      {/* end of web development */}
      <article className="service">
         <div className="service_head">
           <h3>Medical Shop</h3>
         </div>
         <ul className='service_list'>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>HTML</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>CSS</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>JavaScript</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>Bootstrap</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>React</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>Node JS</p>
           </li>
           <li>
              <BiCheck className='service_1ist-icon' />
               <p>MongoDB</p>
           </li>
         </ul>
      </article>
      {/* end of Content Creation */}
    </div>
   </section>

  )
}

export default Services