import React from 'react'
import Tilt from 'react-parallax-tilt';

const InfoBox = ({title, media, tagline, bullets}) => {
  
    return (
        <Tilt
            tiltMaxAngleX={1.5}
            tiltMaxAngleY={1.5}
            perspective={1200}
            transitionSpeed={1500}
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={0.98}
            tiltReverse={true}
        >
            <div className="w-full h-full relative z-0 rounded-lg bg-lightBlueBox p-5 shadow-[0_8px_24px_rgba(0,0,0,0.10),0_4px_12px_rgba(0,0,0,0.08)]">
                
                <div className="flex flex-col items-center mb-6">
                    {media}
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl text-primaryBlue">{title}</h2>
                    {tagline}
                </div>
                <div className="flex p-5">
                    {bullets}
                </div>
            </div>
        </Tilt>
        
    )}

export default InfoBox