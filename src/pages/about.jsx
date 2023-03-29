import React from 'react'
import { TwoToneText } from '../components/two-tone-text'
import pizzaImage from '../images/pizza.png'
import grandpaImage from '../images/grandpa.png'
import travelImage from '../images/travel.png'

export const AboutPage = ({ propRef, aboutData }) => {
  return (
    <section className='about-content' ref={propRef}>
      <div className='about-text-container'>
        <h5 className='about-title'>a bit about me</h5>
        <TwoToneText
          className='about-description'
          text={`I am a software engineer who is passionette about creating`}
          strong={`beautiful experiences and cost-effective services. Besides building cool apps, I
            love pizza, traveling, and my cat.`}
        />
      </div>
      <div className='about-images-container'>
        <div className='about-images-col1'>
          <img src={pizzaImage} />
        </div>
        <div className='about-images-col2'>
          <img src={grandpaImage} />
          <img src={travelImage} />
        </div>
      </div>
    </section>
  )
}
