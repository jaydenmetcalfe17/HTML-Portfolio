import React from 'react'

const StackBox = ({tool}) => {
  return (
    <div className="text-sm flex border p-2 items-center bg-[#baced8] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.05)]">{tool}</div>
  )
}

export default StackBox