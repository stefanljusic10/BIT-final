import React from 'react'
import "./processSelected.scss"

const ProcessSelected = ({ candidateSelected, companySelected, step }) => {
  return (
    <div className="processSelected">
      <div className={`candidateName ${step!==1 ? "candidateNameActive" : ""}`}>{candidateSelected.name}</div>
      <div className={`companyName ${step===3 ? "companyNameActive" : ""}`}>{companySelected.name}</div>
    </div>
  )
}

export default ProcessSelected