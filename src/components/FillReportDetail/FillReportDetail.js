import React, { useContext, useEffect } from "react";
import DataContext from "../../utils/context";
import nextPhaseInterview from "../../utils/nextPhaseInterview";
import "./fillReportDetail.scss";

const FillReportDetail = ({ selectedCandidate, selectedCompany, report, setReport }) => {
  const { data } = useContext(DataContext);
  
  const nextPhase = nextPhaseInterview(
    selectedCandidate.id,
    selectedCompany.id,
    data.reports
  );
  useEffect(() => {
    setReport({
      ...report,
      candidateId: selectedCandidate.id,
      candidateName: selectedCandidate.name,
      companyId: selectedCompany.id,
      companyName: selectedCompany.name,
      phase: nextPhase,
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
        <p>Next phase:</p>
        <p>{nextPhase}</p>
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
