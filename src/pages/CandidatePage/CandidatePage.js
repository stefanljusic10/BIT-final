import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../utils/context";
import CandidateReport from "../../components/Candidate/CandidateReport/CandidateReport";
import moment from "moment";
import "./candidatePage.scss";
import ErrorPage from "../ErrorPage/ErrorPage";

const CandidatePage = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();

  const chosenCandidate = data.candidates.find((e) => e.id == id);
  const chosenCandidateReports = data?.reports?.filter((e) => e.candidateId == id);
  const email = chosenCandidate?.email.toLowerCase();

  if(!chosenCandidate) 
    return <ErrorPage />

  return (
    <>
      <div className="personal-info">
        <img
          src={chosenCandidate?.avatar}
          alt={chosenCandidate?.name}
        />
        <div className="personal-info-data">
          <div>
            <p>Name:</p>
            <span>{chosenCandidate?.name}</span>
          </div>
          <div>
            <p>Date of birth:</p>
            <span>{moment(chosenCandidate?.birthday).format("LL")}</span>
          </div>
          <div>
            <p>Email:</p>
            <span>{email}</span>
          </div>
          <div>
            <p>Education:</p>
            <span>{chosenCandidate?.education}</span>
          </div>
        </div>
      </div>

      <h2>Reports</h2>
      <div className="reports">
        {chosenCandidateReports.map((e) => {
          return <CandidateReport report={e} />;
        })}
      </div>
    </>
  );
};

export default CandidatePage;
