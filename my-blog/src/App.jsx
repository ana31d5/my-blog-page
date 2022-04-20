import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experiences from './components/Experiences/Experience'
import Portofolio from './components/Portofolio/Portofolio'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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