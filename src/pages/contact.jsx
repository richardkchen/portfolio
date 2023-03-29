import React from 'react'

export const ContactPage = ({ propRef, handleEmailClick, contactData }) => {
  const { github, linkedIn } = contactData
  return (
    <section className='contact-content' ref={propRef}>
      <div className='contact-header'>
        <h1 className='contact-title'>
          Get <strong>in Touch</strong>
        </h1>
        <p className='contact-description'>So that we can talk more...</p>
      </div>
      <div className='contact-social-links-container'>
        <button onClick={handleEmailClick}>
          <img src='images/mail.png' alt='mail' />
        </button>
        <a href={github} target='_blank'>
          <img src='images/github.png' alt='github' />
        </a>
        <a href={linkedIn} target='_blank'>
          <img src='images/linkedin.png' alt='linkedin' />
        </a>
      </div>
      <div className='contact-footer'>
        <p>
          Made with ❣️ by <strong>Richard</strong>
        </p>
      </div>
    </section>
  )
}
