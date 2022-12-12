import React, { useContext } from "react";
import CandidateReport from "../../components/Candidate/CandidateReport/CandidateReport";
import CandidateModal from "../../components/Candidate/CandidateModal/CandidateModal";
import DataContext from "../../utils/context";
import "./adminMainPage.scss";

const AdminMainPage = () => {
  const { data, isReportClicked, setIsReportClicked, reportId, setReportId } =
    useContext(DataContext);
  const listOfReports = data?.reports;

  return (
    <>
      <div className="admin-wrapper">
        {listOfReports.map((e) => (
          <CandidateReport
            key={e.id}
            report={e}
            clickModal={setIsReportClicked}
            setReportId={setReportId}
          />
        ))}
        {isReportClicked && (
          <CandidateModal
            clickModal={setIsReportClicked}
            report={listOfReports}
            reportId={reportId}
          />
        )}
      </div>
    </>
  );
};

export default AdminMainPage;
