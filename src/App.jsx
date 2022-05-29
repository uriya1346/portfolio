import React from 'react'
import About from './components/about/About'
import Experiense from './components/experience/Experiense'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
// import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
    <Header />
    <Nav />    
    <About />
    <Experiense />
    <Services />
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </>
  )
}

export default App