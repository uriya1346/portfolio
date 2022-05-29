import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/rental.png'
import IMG2 from '../../assets/candy.png'
import IMG3 from '../../assets/medical.png'
import IMG4 from '../../assets/first.png'
import IMG5 from '../../assets/exchange.png'
import IMG6 from '../../assets/vod.png'

const data=[
  {
  id: 1,
  image: IMG1,
  title: "Rental&Sale Cars",
  github: 'https://github.com/uriya1346/Rental-Sale-Car',
  demo: 'https://cars-client.netlify.app'
},
  {
  id: 2,
  image: IMG2,
  title: "Candy-Crush",
  github: 'https://github.com/uriya1346/candy-crush',
  demo: 'https://candycrush2.netlify.app'
},
  {
  id: 3,
  image: IMG3,
  title: "Medical SHOP",
  github: 'https://github.com/uriya1346/Medical',
  demo: 'https://medical-client.netlify.app'
},
  {
  id: 4,
  image: IMG4,
  title: "My first project (HTML-CSS)",
  github: 'https://github.com/uriya1346/first-project',
  demo: 'https://race-road.netlify.app'
},
  {
  id: 5,
  image: IMG5,
  title: "Exchange",
  github: 'https://github.com/uriya1346/exchange',
  demo: 'https://exchange1346.netlify.app'
},
  {
  id: 6,
  image: IMG6,
  title: "VOD",
  github: 'https://github.com/uriya1346/vod',
  demo: 'https://reactvod.netlify.app'
}
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
    {
      data.map(({id, image, title, github, demo}) =>{
        return(
          <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live
          Demo</a>
         </div>
        </article>
        )
      })
    }
    </div>
  </section>
  )
}

export default Portfolio