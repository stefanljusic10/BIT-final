import React, { useContext } from "react";
import CandidateReport from "../Candidate/CandidateReport/CandidateReport";
import DataContext from "../../utils/context";
import "./selectCompany.scss"

const SelectCompany = () => {
  const { data } = useContext(DataContext);
  return (
    <>
    <div className="selectCompany">

      {data.reports.map((e) => (
          <CandidateReport key={e.id} report={e} />
          ))}
          </div>
    </>
  );
};

export default SelectCompany;
