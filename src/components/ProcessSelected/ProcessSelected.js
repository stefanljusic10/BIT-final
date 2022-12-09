import React from 'react'
import "./processSelected.scss"


const ProcessSelected = (props) => {
  return (
    <>
    <div className="processSelected">Candidate:
    <div className="candidateName">
        <p>{props.candidateSelected.name}</p>
    </div>
    </div>
    </>
  )
}

export default ProcessSelected