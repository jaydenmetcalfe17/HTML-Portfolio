import React from 'react'

const Video = ({source}) => {
  return (
    <div>
        <video src={source} width="600" height="300" controls="controls"/>
    </div>
  )
}

export default Video