import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../utils/context";
import CandidateReport from "../../components/Candidate/CandidateReport/CandidateReport";
import CandidateModal from "../../components/Candidate/CandidateModal/CandidateModal";
import CandidateInfo from "../../components/Candidate/CandidateInfo/CandidateInfo";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./candidatePage.scss";

const CandidatePage = () => {
  const { data, reportId, setReportId, setCurrentPage } = useContext(DataContext);
  const { id } = useParams();
  const [isReportClicked, setIsReportClicked] = useState(false);

  useEffect(() => {
    setCurrentPage("");
  }, []);

  const chosenCandidate = data.candidates.find((e) => e.id == id);
  const chosenCandidateReports = data?.reports.filter((e) => e.candidateId == id);

  if (!chosenCandidate) return <ErrorPage text='Cadidate not found!' />;

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
                key={e.id}
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
