import React from 'react'
import "./index.css";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    
<>
<Header />
<Nav />
<About />
<Experience />
<Services />
<Portfolio />

<Contact />
<Footer />
</>
  )
}

export default App