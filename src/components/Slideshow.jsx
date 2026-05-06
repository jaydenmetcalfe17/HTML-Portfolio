import { React, useState } from "react";
import Slide from "./Slide";
import '../assets/styles/slideshow.scss'

import pabPicnicImg from "../../public/images/pab_picnic_carousel.JPG"
import meRedImg from "../../public/images/Me_red_carousel.JPG"
import redChairImg from "../../public/images/Red_chair_carousel.jpg"
import pabSunsetImg from "../../public/images/PAB_sunset_carousel.jpg"
import saasFeeImg from "../../public/images/saas_carousel.JPG"
import stresaImg from "../../public/images/stresa_carousel.JPG"
import sunPeaksImg from "../../public/images/sun_peaks_carousel.JPG"
import eagleImg from "../../public/images/eagle_carousel.jpeg"
import southDakotaImg from "../../public/images/sun_peaks_carousel.JPG"
import saasFee2025Img from "../../public/images/saasfee2025_1_carousel.JPG"
import saasFeeTrainingImg from "../../public/images/saasfee_training_carousel.JPEG"
import whisGroupImg from "../../public/images/whis_group_carousel.JPG"
import whisSeventhImg from "../../public/images/whis_seventh_carousel.jpeg"


const slideImages = [
   pabPicnicImg,
   meRedImg,
   redChairImg,
   pabSunsetImg,
   saasFeeImg,
   stresaImg,
   sunPeaksImg,
   eagleImg,
   southDakotaImg,
   saasFee2025Img,
   saasFeeTrainingImg,
   whisGroupImg,
   whisSeventhImg,
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
