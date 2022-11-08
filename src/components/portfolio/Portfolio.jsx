import React from 'react'
import './portfolio.css'
import IMG from '../../assets/auction.jpg'
import IMG1 from '../../assets/hotel.jpg'
import IMG2 from '../../assets/charr.webp'



const data =[
{


  id: 1,
  image: IMG,
  title: 'Online Auction',
 github: 'https://github.com/azebfeleke/',
  
},
{

  id: 2,
  image: IMG1,
  title: 'Hotel Management',
  github: 'https://github.com/azebfeleke/',

},
{
  id: 3,
  image: IMG2,
  title: 'Charity Website',
  github: 'https://github.com/azebfeleke/',

}

]
const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

<div className='container portfolio__container'>
  {
    data.map(({id, image, title, github}) =>{
      return(
<article key={id} className='portfolio__item'>
  <div className='portfolio__item-image'>
     <img src={image} alt=""/>

    <h3>{title}</h3>
    <div className='portfolio__item-cta'>
    <a href={github} className='btn'>Github</a>
    </div>
    
  </div>

</article>
      )
    })
  }




</div>


    </section>
  )
}

export default portfolio