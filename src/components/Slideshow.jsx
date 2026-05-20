import { React, useState } from "react";
import Slide from "./Slide";
// import '../assets/styles/slideshow.css'

import pabPicnicImg from "/images/pab_picnic_carousel.JPG"
import meRedImg from "/images/Me_red_carousel.JPG"
import redChairImg from "/images/Red_chair_carousel.jpg"
import pabSunsetImg from "/images/PAB_sunset_carousel.jpg"
import saasFeeImg from "/images/saas_carousel.JPG"
import stresaImg from "/images/stresa_carousel.JPG"
import sunPeaksImg from "/images/sun_peaks_carousel.JPG"
import eagleImg from "/images/eagle_carousel.jpeg"
import southDakotaImg from "/images/southdakota_carousel.JPG"
import saasFee2025Img from "/images/saasfee2025_1_carousel.JPG"
import saasFeeTrainingImg from "/images/saasfee_training_carousel.JPEG"
import whisGroupImg from "/images/whis_group_carousel.JPG"
import whisSeventhImg from "/images/whis_seventh_carousel.jpeg"
import whisAboveClouds from "/images/whis_above_clouds.jpg"


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
   whisAboveClouds
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
    <div className="flex flex-col gap-5">
        <div className="relative max-w-250 mx-auto">
            {slideImages.map((image, index) => (
            <Slide
                key={index}
                image={image}
                visible={slideIndex === index}
            />
            ))}

            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white text-lg font-bold bg-transparent border-0 cursor-pointer transition-colors duration-300 select-none hover:bg-black/80 rounded-r-sm" onClick={() => nextSlide(-1)}>
            &#10094;
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white text-lg font-bold bg-transparent border-0 cursor-pointer transition-colors duration-300 select-none hover:bg-black/80 rounded-l-sm" onClick={() => nextSlide(1)}>
            &#10095;
            </button>
        </div>

        <div style={{ textAlign: 'center' }}>
            {slideImages.map((_, i) => (
            <span
                key={i}
                className={`w-3.75 h-3.75 rounded-full inline-block mx-0.5 transition-colors duration-300 ${ slideIndex === i ? "bg-[#717171]" : "bg-[#bbb] hover:bg-[#717171]"}`}
                onClick={() => goToSlide(i)}
                style={{ cursor: 'pointer', padding: '4px' }}
            >
            </span>
            ))}
      </div>   
    </div>
  );
};

export default Slideshow;
