import React from 'react'
import "./processSelected.scss"

const ProcessSelected = ({ selectedCandidate, selectedCompany }) => {
  return (
    <div className="processSelected">
      <p>{selectedCandidate.name}</p>
      <p>{selectedCompany}</p>
    </div>
  )
}

export default ProcessSelected