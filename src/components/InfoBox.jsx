import React from 'react'

const InfoBox = ({title, media, tagline, bullets}) => {
  
  
  
  
    return (
        <div className="relative z-0 rounded-4xl border border-border bg-white p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_20px_60px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1)]">
            
            <div className="flex flex-col items-center">
                {media}
            </div>
            <div>
                <h2 className="font-bold text-base">{title}</h2>
                 {tagline}
            </div>
            <p>{bullets}</p>
            
        </div>
        
    )}

export default InfoBox