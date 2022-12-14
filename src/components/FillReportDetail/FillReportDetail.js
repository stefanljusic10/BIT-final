import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../utils/context";
import nextPhasesInterview from "../../utils/nextPhasesInterview";
import "./fillReportDetail.scss";

const FillReportDetail = ({ selectedCandidate, selectedCompany, report, setReport }) => {
  const { data } = useContext(DataContext);
  
  const nextPhases = nextPhasesInterview(
    selectedCandidate.id,
    selectedCompany.companyId,
    data.reports
  );
  useEffect(() => {
    setReport({
      ...report,
      candidateId: selectedCandidate.id,
      candidateName: selectedCandidate.name,
      companyName: selectedCompany.companyName,
      companyId: selectedCompany.companyId
    })
  }, [])
  
  

  return (
    <form className="fillReportDetail">
      <label>
        <p>Interview date:</p>
        <input
          type="date"
          onChange={(e) =>
            setReport({ ...report, interviewDate: e.target.value })
          }
        />
      </label>
      <label>
        <p>Phase:</p>
        <select
          defaultValue={'select phase'}
          onChange={(e) => setReport({ ...report, phase: e.target.value })}
        >
          <option disabled>select phase</option>
          {nextPhases.map((phase) => (
            <option key={phase}>{phase}</option>
          ))}
        </select>
      </label>
      <label>
        <p>Status:</p>
        <select
          defaultValue={'select status'}
          onChange={(e) => setReport({ ...report, status: e.target.value })}
        >
          <option disabled>select status</option>
          <option>passed</option>
          <option>declined</option>
        </select>
      </label>
      <label>
        <p>Notes:</p>
        <textarea
          placeholder="type your note..."
          onChange={(e) => setReport({ ...report, note: e.target.value })}
        ></textarea>
      </label>
    </form>
  );
};

export default FillReportDetail;
