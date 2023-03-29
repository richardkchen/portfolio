import React from 'react'
import { Layout } from './layout'
import { TwoToneText } from './two-tone-text'



export const WorksCard = ({
  imageSource = '',
  imageLeft = true,
  title = '',
  description = '',
  strong = '',
  category = '',
  url = '',
  handleViewWorkButton = null
}) => {
  const PreviewImage = () => (
    <div className='works-preview-img'>
      <img src={imageSource} alt='real estate' />
    </div>
  )

  const PreviewDetails = () => (
    <div className='works-detail'>
      <h5 className='works-title'>{title}</h5>
      <TwoToneText
        className="works-description"
        text={description}
        strong={strong}
      />
      <h6 className='works-category'>{category}</h6>
      <button className='works-demo-button' onClick={handleViewWorkButton}>
        <span>view work</span>
        <img src='./images/chevron-right.png' alt='view work' />
      </button>
    </div>
  )

  const previewItems = [
    <PreviewImage key={'image'} />,
    <PreviewDetails key={'details'} />,
  ]

  return (
    <div className='works-card'>
      {imageLeft ? previewItems : previewItems.reverse()}
    </div>
  )
}
