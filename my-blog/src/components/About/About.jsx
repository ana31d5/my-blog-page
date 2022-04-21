import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
import { FaAward } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id= "about">
      <h5> Get to Know </h5>
      <h2> About Me </h2>
      
      <div className='container about__container'>
        <div className='about__me'>

          <div className='about__me-image'>
            <img src= {ME} alt='About Me'/>


          </div>
        </div>



        <div className='about__content'>

          <div className='about__cards'>
            <article className='about__card'> 
            <FaAward className='about__icon'/>

            <h5> Experience </h5>
            <small> 2+ Years </small> 
            </article>

            <article className='about__card'> 
            <VscFolderLibrary className='about__icon'/>

            <h5> Projects </h5>
            <small> Pending </small> 
            </article>

            

          </div>

          <p> 
            Recent 1st Class Biochemistry Graduate that 
            has completed a fullstack coding bootcamp.


          </p>

          <a href= "#contact" className='btn btn-primary'> Lets Talk </a>






        </div>



      </div>

    </section>
  )
}

export default About