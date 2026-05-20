import React from 'react'
import '../assets/styles/slideshow.css'

const Slide = ({ image, visible }) => {
  return (
    <div
      style={{ display: visible ? "block" : "none" }}
      className="w-full aspect-4/3 overflow-hidden rounded-lg"
    >
      <img
        src={image}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Slide