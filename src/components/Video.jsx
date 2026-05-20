import React from 'react'

const Video = ({source}) => {
  return (
    <div>
        <video src={source} width="600" height="300" controls="controls" className="border-white border-8"/>
    </div>
  )
}

export default Video