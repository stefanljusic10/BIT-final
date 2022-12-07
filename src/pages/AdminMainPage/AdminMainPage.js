import React, { useContext }  from 'react'
import CandidateReport from '../../components/Candidate/CandidateReport/CandidateReport'
import DataContext from '../../utils/context'

import "./adminMainPage.scss"

const AdminMainPage = () => {
    const {data} = useContext(DataContext)
    
  return (
    <>
     {data.reports.map(e => <CandidateReport key={e.id} report={e} />)}

        
    </>
  )
}

export default AdminMainPage