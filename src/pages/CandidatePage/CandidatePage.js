import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../utils/context";
import CandidateReport from "../../components/Candidate/CandidateReport/CandidateReport";
import CandidateModal from "../../components/Candidate/CandidateModal/CandidateModal";
import CandidateInfo from "../../components/Candidate/CandidateInfo/CandidateInfo";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./candidatePage.scss";

const CandidatePage = () => {
  const { data, isReportClicked, setIsReportClicked, reportId, setReportId } =
    useContext(DataContext);
  const { id } = useParams();

  const chosenCandidate = data.candidates.find((e) => e.id == id);
  const chosenCandidateReports = data?.reports.filter(
    (e) => e.candidateId == id
  );

  if (!chosenCandidate) return <ErrorPage />;

  return (
    <>
      <div className="candidatePage-main">
        <CandidateInfo chosenCandidate={chosenCandidate} />

        <h2>Reports</h2>
        <div className="reports">
          {chosenCandidateReports.map((e) => {
            return (
              <CandidateReport
                isSquare={true}
                clickModal={setIsReportClicked}
                report={e}
                setReportId={setReportId}
              />
            );
          })}
        </div>

        {isReportClicked && (
          <CandidateModal
            clickModal={setIsReportClicked}
            report={chosenCandidateReports}
            reportId={reportId}
          />
        )}
        {isReportClicked && <div className="modal-background"></div>}
      </div>
    </>
  );
};

export default CandidatePage;
