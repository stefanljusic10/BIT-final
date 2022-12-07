import React, { useContext, useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import DataContext from "../../utils/context";
import "./candidatePage.scss";
import CandidateReport from "../../components/Candidate/CandidateReport/CandidateReport";

const CandidatePage = () => {
  const { data } = useContext(DataContext);

  // useEffect(() => {
  //   ({ data } = useContext(DataContext));
  // }, []);
  const { id } = useParams();

  const chosenCandidate = data?.candidates?.find((e) => e.id == id);
  const email = chosenCandidate?.email.toLowerCase();
  // console.log(chosenCandidate);

  console.log(id, data, chosenCandidate);

  const chosenCandidateReports = data?.reports?.filter(
    (e) => e.candidateId == id
  );
  console.log(chosenCandidateReports);

  return (
    <>
      <div className="personal-info">
        <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"></img>
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
