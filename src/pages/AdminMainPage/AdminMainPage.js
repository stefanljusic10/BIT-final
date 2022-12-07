import React,{ useContext, useState }  from 'react'
import { BrowserRouter, Routes, Rout } from 'react-router-dom'
import CandidateReport from '../../components/Candidate/CandidateReport/CandidateReport'
import DataContext from '../../utils/context'
import useData from '../../utils/useData'
// import CandidateReport from "../../components/Candidate/CandidateReport"

import "./adminMainPage.scss"

const AdminMainPage = () => {
    const {data} = useContext(DataContext)
    console.log(data);
  return (
    <>
     {data.reports.map(e => <CandidateReport key={e.id} report={e} />)}

        
    </>
  )
}

export default AdminMainPage