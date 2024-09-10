import { useState } from 'react'
import Image from './assets/Image (5).png'
import Spotify from './assets/Spotify.png'
import Google from './assets/Google.png'
import Uber from './assets/Uber.png'
import Microsoft from './assets/Microsoft.png'
import Shopify from './assets/Shopify.png'
import Evernote from './assets/Evernote.png'
import Adobe from './assets/Adobe.png'
import PayPal from './assets/PayPal.png'
import Amazon from './assets/Amazon.png'
import Asana from './assets/asana.png'
import cta from './assets/Untitled design (7).png'
import Work from './assets/Rectangle 160.png'
import discovery from './assets/majesticons_dollar-circle.png'
import strategy from './assets/Strategy.png'
import execution from './assets/Execution.png'
import measurement from './assets/Measurement.png'
import Apple from './assets/Apple.png'
import cococola from './assets/Cocacola.png'
import nike from './assets/Nike.png'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import cta2 from './assets/CTA Banner 2.png'
import './App.scss'


function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className='hero-section'>
      <div className='hero-left'>
        <h1>We Take Care of 
        Your Brand</h1>
        <p>We care about our work and we care about our clients.</p>
        <br></br>
        <div className='hero-form'>
          <input type='email' name='email' placeholder='Enter your email'></input>
          <button>Let's Talk</button>
        </div>
      </div>
      <div className='hero-right'>
        <img src={Image}></img>
      </div>
    </div>

    <div className="companies">
      <h1>Companies We Work With</h1>
      <div className='company-row1'>
        <img src={Spotify}></img>
        <img src={Google}></img>
        <img src={Uber}></img>
        <img src={Microsoft}></img>
        <img src={Shopify}></img>
      </div>

      <div className='company-row2'>
        <img src={Evernote}></img>
        <img src={Adobe}></img>
        <img src={PayPal}></img>
        <img src={Amazon}></img>
        <img src={Asana}></img>
      </div>
    </div>

    <div className='stats'>
      <div className='stats-container'>
        <div className='stat1'>
          <h1>245%</h1>
          <p>More revenues for the Brand</p>
        </div>

        <div className='stat2'>
          <h1>130K+</h1>
          <p>Audience reached</p>
        </div>

        <div className='stat3'>
          <h1>50+</h1>
          <p>Brands trusts us</p>
        </div>

        <div className='stat4'>
          <h1>24+</h1>
          <p>Worldwide Awards</p>
        </div>
      </div>

      <div className='stat-right'>
        <h1>Commitments</h1>
        <p>We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</p>
        <h3>Learn more</h3>
      </div>
    </div>

    <div className='cta'>
      <div className='cta-text'>
        <div className='cta-left'>
          <h1>Elevate Your Brand Today!</h1>
        </div>
        <div className='cta-right'>
          <p>Ready to transform your digital dresence? Let's create magic together! book our services now!</p>
          <button>Book call</button>
        </div>
      </div>
        <img src={cta}></img>
    </div>

    <div className="working">
      <div className='working-left'>
        <h1>How It Works</h1>
        <p>We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
        <img src={Work}></img>
      </div>
      <div className='working-right'>
        <div className='item1'>
          <img src={discovery}></img>
          <div className='item1-text'>
            <h1>Discovery</h1>
            <p>We meet with you to learn about your business, your goals, and your target audience.</p>
          </div>
        </div>

        <div className='item1'>
          <img src={strategy}></img>
          <div className='item1-text'>
            <h1>Strategy</h1>
            <p>We develop a customized marketing strategy that is based on your unique needs and goals.</p>
          </div>
        </div>

        <div className='item1'>
          <img src={execution}></img>
          <div className='item1-text'>
            <h1>Execution</h1>
            <p>We execute our strategy using the latest digital marketing tools and techniques.</p>
          </div>
        </div>

        <div className='item1'>
          <img src={measurement}></img>
          <div className='item1-text'>
            <h1>Measurement</h1>
            <p>We track the results of our campaigns so that we can make adjustments as needed.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='ourwork'>
      <h1>Our Work</h1>
      <p>A Glimpse of Our Portfolio</p>
      <div className='container'>
        <div className='child1'>
          <img src={Apple}></img>
          <p>Apple</p>
        </div>

        <div className='child1'>
          <img src={cococola}></img>
          <p>Coca Cola</p>
        </div>

        <div className='child1'>
          <img src={nike}></img>
          <p>Nike</p>
        </div>
      </div>
      <button>See More</button>
    </div>

    <div className='cta2'>
      <img src={cta2}></img>
    </div>

    <div class="faq-section">
        <div class="faq-left">
            <div class="faq-item">
                <button class="accordion">How do I sign up for the project? <span class="plus-icon">+</span></button>
                <div class="panel">
                    <p>You can sign up by visiting our contact page...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="accordion">What should I prepare before starting? <span class="plus-icon">+</span></button>
                <div class="panel">
                    <p>You should have a business plan and project scope...</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="accordion">Does my company need help for marketing advice? <span class="plus-icon">+</span></button>
                <div class="panel">
                    <p>We offer marketing consultation services...</p>
                </div>
            </div>
        </div>
        <div class="faq-right">
            <h2>How We Can Help You?</h2>
            <p>Follow our newsletter. We will regularly update our latest projects and availability.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Let's Talk</button>
            </form>
            <a href="#" class="more-faq">More FAQ →</a>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
