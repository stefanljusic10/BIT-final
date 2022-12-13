import React, { useContext } from 'react'
import DataContext from '../../utils/context'
import nextPhasesInterview from '../../utils/nextPhasesInterview'
import './fillReportDetail.scss'

const FillReportDetail = ({ selectedCandidate, selectedCompany }) => {
  const { data } = useContext(DataContext)
  const nextPhases = nextPhasesInterview(selectedCandidate.id, selectedCompany, data.reports)

  return (
    <form className='fillReportDetail'>
        <label>
          <p>Interview date:</p>
          <input type='date' />
        </label>
        <label>
          <p>Phase:</p>
          <select>
            {nextPhases.map(phase => <option key={phase}>{phase}</option>)}
          </select>
        </label>
        <label>
          <p>Status:</p>
          <select>
            <option>passed</option>
            <option>declined</option>
          </select>
        </label>
        <label>
          <p>Notes:</p>
          <textarea placeholder='type your note...'></textarea>
        </label>
    </form>
  )
}

export default FillReportDetail