import React from 'react'
import './fillReportDetail.scss'

const FillReportDetail = ({ candidateSelected }) => {
  return (
    <form className='fillReportDetail'>
        {candidateSelected.name}
    </form>
  )
}

export default FillReportDetail