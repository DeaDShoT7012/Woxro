import React from 'react'
import './Home.css'
import Header from './Header'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Header/>
      <section>
        <div className='service-container'>
          <div className='service-heading'>
              <center>
                <strong>SERVICES WE DELIVER</strong>
              </center>
          </div>
          <div className='service-mainheading'>
            <center>
              <h2>Preparing for your success, we provide truly<br/> prominent IT solutions.</h2>
            </center>
          </div>
        </div>
      </section>
      <section>
        <div className='service-box'>
          <a className='links'>
            <div style={{background:'#e7f0f7'}} className='card-cont'>
              <div>
                <img className='card-img1' src='https://woxro.com/public/assets/png/services/webdesigning.png' alt='Web Designing'/>
              </div>
              <div className='card-head'>
                <p>Web Designing</p>
              </div>
              <div className='card-subhead'>
                <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
              </div>
            </div>
          </a>
          <a className='links'>
            <div style={{background:'#f6f5f3'}} className='card-cont'>
              <div>
                <img className='card-img1' src='https://woxro.com/public/assets/png/services/webapplication.png' alt='Web Designing'/>
              </div>
              <div className='card-head'>
                <p>Web Application</p>
              </div>
              <div className='card-subhead'>
                <p>We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.</p>
              </div>
            </div>
          </a>
          <a className='links'>
            <div style={{background:'#f6f5f9'}} className='card-cont'>
              <div>
                <img className='card-img1' src='https://woxro.com/public/assets/png/services/mobileappdevelopment.png' alt='Web Designing'/>
              </div>
              <div className='card-head'>
                <p>Mobile App Development</p>
              </div>
              <div className='card-subhead'>
                <p>We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.</p>
              </div>
            </div>
          </a>
          <a className='links'>
            <div style={{background:'#fcf0e4'}} className='card-cont'>
              <div>
                <img className='card-img1' src='	https://woxro.com/public/assets/png/services/ecommercedevelopment.png' alt='Web Designing'/>
              </div>
              <div className='card-head'>
                <p>Ecommerce Development</p>
              </div>
              <div className='card-subhead'>
                <p>For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.</p>
              </div>
            </div>
          </a>
          <a className='links'>
            <div style={{background:'#f9f1f6'}} className='card-cont'>
              <div>
                <img className='card-img1' src='https://woxro.com/public/assets/png/services/digitalmarketing.png' alt='Web Designing'/>
              </div>
              <div className='card-head'>
                <p>Digital Marketing</p>
              </div>
              <div className='card-subhead'>
                <p>We bring together expertise in digital marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.</p>
              </div>
            </div>
          </a>
          <a className='links'>
            <div style={{background:'#effbfb'}} className='card-cont'>
              <div>
                <img className='card-img1' src='	https://woxro.com/public/assets/png/services/graphic.png' alt='Web Designing'/>
              </div>
              <div className='card-head'>
                <p>Graphic Designing</p>
              </div>
              <div className='card-subhead'>
                <p>We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth. </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <Contact/>
    </div>
  )
}

export default Home