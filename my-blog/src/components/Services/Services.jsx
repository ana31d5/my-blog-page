import React from 'react'
import './services.css'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = "services">

      <h5> What I offer </h5>
      <h2> Services </h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                What services that i provide
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              User stories.
              </p>

            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
              User flow charts, diagrams.
              </p>

            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Wireframes.
              </p>

            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Content strategy.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Information architecture.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Brand and design system development.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Design technology consulting.
              </p>

            </li>

          </ul>

        </article>

        {/* END OF UI/UX DESIGN */}

        <article className='service'>
          <div className='service__head'>
            <h3> Web Development </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                What services that I provide
              </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              
              Brochure website creation.

              </p>

            </li>


            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Booking and payment systems and integrations.
              </p>

            </li>


            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Custom website coding and extensions.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Content management system integration for easy content upload and distribution.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Database driven websites.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              eCommerce functionality.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              HTML5 website development for impactful visuals.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              HTML5 website development for impactful visuals.
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              JavaScript and React component development
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Website backend login creation
              </p>

            </li>

          </ul>

        </article>

        {/* END OF WEB DESIGN */}



        <article className='service'>
          <div className='service__head'>
            <h3> Content Creation </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
                What services that I provide
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Technical research
              </p>

            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Trend analysis
              </p>

            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
               Blog writing
              </p>

            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Image procurement
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              Editing each blog up to 3x based on your team's feedback
              </p>

            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>
              SEO tagging/optimisation/keyword mapping 
              </p>

            </li>

          </ul>

        </article>

        {/* END CONTENT CREATION */}


      </div>
      
      </section>
  )
}

export default Services