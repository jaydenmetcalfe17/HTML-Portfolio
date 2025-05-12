import { React, useState } from "react";
import Slide from "./Slide";
import '../assets/styles/slideshow.scss'

const slideImages = [
    '/public/images/Italy_carousel.JPG',
    '/public/images/pab_picnic_carousel.JPG',
    '/public/images/Me_red_carousel.JPG',
    '/public/images/Red_chair_carousel.jpg',
    '/public/images/PAB_sunset_carousel.jpg',
    '/public/images/saas_carousel.JPG',
    '/public/images/stresa_carousel.JPG',
    '/public/images/sun_peaks_carousel.JPG',
];

const Slideshow = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex >= slideImages.length) newIndex = 0;
        if (newIndex < 0) newIndex = slideImages.length - 1;
        setSlideIndex(newIndex);
    };
    
    const goToSlide = (n) => {
        setSlideIndex(n);
    };

  return (
    <>
        <div className="slideshow">
            {slideImages.map((image, index) => (
            <Slide
                key={index}
                image={image}
                visible={slideIndex === index}
            />
            ))}

            <button className="prev" onClick={() => nextSlide(-1)}>
            &#10094;
            </button>
            <button className="next" onClick={() => nextSlide(1)}>
            &#10095;
            </button>
        </div>

        <div style={{ textAlign: 'center' }}>
            {slideImages.map((_, i) => (
            <span
                key={i}
                className={`dot ${slideIndex === i ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
                style={{ cursor: 'pointer', padding: '4px' }}
            >
            </span>
            ))}
      </div>   
    </>
  );
};

export default Slideshow;
