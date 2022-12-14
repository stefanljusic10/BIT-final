import React, { useContext, useEffect, useState } from "react";
import CandidateReport from "../../components/Candidate/CandidateReport/CandidateReport";
import CandidateModal from "../../components/Candidate/CandidateModal/CandidateModal";
import Search  from "../../components/Search/Search";
import DataContext from "../../utils/context";
import "./adminMainPage.scss";

const AdminMainPage = () => {
  const { data, reportId, setReportId, setCurrentPage, searchValue } = useContext(DataContext);
  const listOfReports = data?.reports;
  const [isReportClicked, setIsReportClicked] = useState(false);
  const searchReport = listOfReports.filter((e) => e.candidateName.toLowerCase().includes(searchValue.toLowerCase()) ||
  e.companyName.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    setCurrentPage("Reports");
  }, []);

  return (
    <>
      <div className="admin-wrapper">
        <Search />
        {searchReport.map((e) => (
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
        {isReportClicked && <div className="modal-background"></div>}
      </div>
    </>
  );
};

export default AdminMainPage;
