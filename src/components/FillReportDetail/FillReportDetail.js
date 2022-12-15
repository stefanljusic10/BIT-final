import React, { useContext } from 'react'
import DataContext from '../../utils/context'
import nextPhasesInterview from '../../utils/nextPhasesInterview'
import './fillReportDetail.scss'

const FillReportDetail = ({ candidateSelected, companySelected, setInterviewDate, setPhase, setStatus, setNote}) => {
  const { data } = useContext(DataContext)
  const nextPhases = nextPhasesInterview(candidateSelected.id, companySelected, data.reports)
  

  return (
    <form className='fillReportDetail'>
        <label>
          <p>Interview date:</p>
          <input onChange={e => {setInterviewDate(e.target.value)}} type='date' />
        </label>
        <label>
          <p>Phase:</p>
          <select onChange={e => setPhase(e.target.value)}>
            {nextPhases.map(phase => <option key={phase}>{phase}</option>)}
          </select>
        </label>
        <label>
          <p>Status:</p>
          <select onChange={e => setStatus(e.target.value)}t>
            <option>passed</option>
            <option>declined</option>
          </select>
        </label>
        <label>
          <p>Notes:</p>
          <textarea onChange={e => setNote(e.target.value)} placeholder='type your note...'></textarea>
        </label>
    </form>
  )
}

export default FillReportDetail