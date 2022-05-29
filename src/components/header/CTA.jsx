import React from 'react'
import CV from '../../assets/resume.docx'

const CTA = () =>{
  return(
    <div className='cta'>
        <a className='btn' href={CV} download>Download Cv</a>
       <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}
export default CTA