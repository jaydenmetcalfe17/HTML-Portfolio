import { React, useState } from "react";
import Slide from "./Slide";
import '../assets/styles/slideshow.scss'

const slideImages = [
    import.meta.env.BASE_URL + '/images/Italy_carousel.JPG',
    import.meta.env.BASE_URL + '/images/pab_picnic_carousel.JPG',
    import.meta.env.BASE_URL + '/images/Me_red_carousel.JPG',
    import.meta.env.BASE_URL + '/images/Red_chair_carousel.jpg',
    import.meta.env.BASE_URL + '/images/PAB_sunset_carousel.jpg',
    import.meta.env.BASE_URL + '/images/saas_carousel.JPG',
    import.meta.env.BASE_URL + '/images/stresa_carousel.JPG',
    import.meta.env.BASE_URL + '/images/sun_peaks_carousel.JPG',
    import.meta.env.BASE_URL + '/images/eagle_carousel.JPG',
    import.meta.env.BASE_URL + '/images/southdakota_carousel.JPG',
    import.meta.env.BASE_URL + '/images/saasfee2025_1_carousel.JPG',
    import.meta.env.BASE_URL + '/images/saasfee_training_carousel.JPG',
    import.meta.env.BASE_URL + '/images/whis_group_carousel.JPG',
    import.meta.env.BASE_URL + '/images/whis_seventh_carousel.JPG',
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
