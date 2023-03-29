import React from 'react'
import { TwoToneText } from '../components/two-tone-text'

export const AboutPage = ({ propRef, aboutData }) => {
  const { text, strong, imageSource1, imageSource2, imageSource3 } = aboutData
  return (
    <section className='about-content' ref={propRef}>
      <div className='about-text-container'>
        <h5 className='about-title'>a bit about me</h5>
        <TwoToneText
          className='about-description'
          text={text}
          strong={strong}
        />
      </div>
      <div className='about-images-container'>
        <div className='about-images-col1'>
          <img src={imageSource1} />
        </div>
        <div className='about-images-col2'>
          <img src={imageSource2} />
          <img src={imageSource3} />
        </div>
      </div>
    </section>
  )
}
