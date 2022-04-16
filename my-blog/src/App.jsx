import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Experiences from './components/Experiences/experience'
import Portofolio from './components/Portofolio/portofolio'
import Services from './components/Services/services'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Portofolio/>
    <Services/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App