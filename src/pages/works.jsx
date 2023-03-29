import React from 'react'
import { WorksCard } from '../components/works-card'
import { worksData } from '../static/worksData'

const cards = worksData.map((work, key) => {
  const handleViewWorkButton = () => {
    window.open(work.url, '_blank')
  }
  const props = {
    key,
    ...work,
    imageLeft: key % 2 === 0,
    handleViewWorkButton,
    imageSource: require(`../images/${work.imageFileName}`),
  }
  return <WorksCard {...props} />
})

export const WorksPage = ({ propRef, worksData }) => {
  return (
    <section className='works-content' ref={propRef}>
      <h1>
        Selected <strong>Works</strong>
      </h1>
      <div className='work-card-list'>{cards}</div>
    </section>
  )
}