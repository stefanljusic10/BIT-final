import React from 'react'
import "./processSelected.scss"

const ProcessSelected = ({ candidateSelected }) => {
  return (
    <div className="processSelected">
      {candidateSelected.name}
    </div>
  )
}

export default ProcessSelected