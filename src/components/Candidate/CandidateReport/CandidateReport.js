import React from "react";
import moment from "moment";
import ViewDelete from "./ViewDelete/ViewDelete";
import Item from "./Item/Item";
import "./candidateReport.scss";

const CandidateReport = ({ report }) => {
  const interviewDate = moment(report.interviewDate).format("LL")
  const statusClass = (report.status === "passed") ? "status passed" : "status declined"

  return (
    <div className="wrapper">
      <div className="candidateReport">
        <Item itemClass={'company'} name={report.companyName} placeholder={'Company'} />
        <Item itemClass={'candidate'} name={report.candidateName} placeholder={'Candidate'} />
        <Item itemClass={'date'} name={interviewDate} placeholder={'Interview Date'} />
        <Item itemClass={statusClass} name={report.status} placeholder={'Status'} />
        <ViewDelete report={report} />
      </div>
    </div>
  );
};

export default CandidateReport;
