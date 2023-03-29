import React from 'react'

export const HomePage = ({ propRef }) => {
  return (
    <>
      <section className='main-content' ref={propRef}>
        <h1>
          I’m a software engineer specializing in <strong>Node</strong>,{' '}
          <strong>React</strong>, and <strong>AWS</strong>
        </h1>
      </section>
    </>
  )
}
