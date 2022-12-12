import React from 'react'
import './fillReportDetail.scss'

const FillReportDetail = ({ candidateSelected }) => {
  return (
    <form className='fillReportDetail'>
       
          <label className="interviewDate">
            Interview Date
        <input type="date" />
          </label>
        
        <div className='phase'>
        <div>Phase</div>
        <select>
          <option>Technical</option>
          <option>HR</option>
           </select>
        </div>
        <div className='status'>
        <div>Status</div>
        <select>
          <option>Technical</option>
          <option>HR</option>
           </select>
        </div>
    </form>
  )
}

export default FillReportDetail