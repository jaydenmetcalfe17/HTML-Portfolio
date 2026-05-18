import React from 'react'
import '../assets/styles/slideshow.css'

const Slide = ({image, visible}) => {
  return (
    <div
      // className="fade"
      style={{ display: visible ? 'block' : 'none' }}
    >
      <img src={image} className="photo"/>
    </div>
  )
}

export default Slide