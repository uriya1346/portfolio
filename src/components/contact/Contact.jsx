import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dextuty', 'template_zpjnfud', form.current, 'kyexmZY3HTBCh4cHd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Thank you, I will get back to you soon")
      e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
         <h5>uria1346@gmail.com</h5>
           <a href="mailto:uria1346@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
        <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
         <h5>Uriya Davidi</h5>
           <a href="https://m.me/100002918316416" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
        <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
         <h5>+972-53-301-6070</h5>
           <a href="https://wa.me/+972533016070" target="_blank">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name' placeholder="Your Full Name" required />
       <input type="email" name='email' placeholder='Your Email' required />
       <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>

  )
}

export default Contact