import React from 'react'

const Course = ({code, name, link}) => {
  return (
    <div>
        <a className="hover:text-primaryBlue" target="_blank" href={link}><b>{code}</b> - {name}</a>
        </div>
  )
}

export default Course