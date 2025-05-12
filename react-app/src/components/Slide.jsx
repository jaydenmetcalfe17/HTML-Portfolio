import React from 'react'
import '../assets/styles/slideshow.scss'

const Slide = ({image, visible}) => {
  return (
    <div
      className="slides fade"
      style={{ display: visible ? 'block' : 'none' }}
    >
      <img src={image} className="photo"/>
    </div>
  )
}

export default Slide