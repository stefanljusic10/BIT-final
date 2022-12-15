import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import SelectCandidate from "../../components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../components/SelectCompany/SelectCompany";
import Process from "../../components/Process/Process";
import ProcessSelected from "../../components/ProcessSelected/ProcessSelected";
import Button from "../../components/Button/Button";
import FillReportDetail from "../../components/FillReportDetail/FillReportDetail";
import postReport from "../../utils/postReport";
import nextPhaseInterview from "../../utils/nextPhaseInterview";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./adminWizzardPage.scss";

const AdminWizzardPage = () => {
  const { data, searchValue, setCurrentPage } = useContext(DataContext);
  const [step, setStep] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const search = data.candidates.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  const navigate = useNavigate();
  const [report, setReport] = useState({
    candidateId: "",
    candidateName: "",
    companyName: "",
    companyId: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });
  const nextPhase = nextPhaseInterview(
    selectedCandidate.id,
    selectedCompany.id,
    data.reports
  );
  console.log(nextPhase);

  const nextStep = () => {
    if (step === 1 && selectedCandidate) setStep(step + 1);
    if (step === 2 && selectedCompany) setStep(step + 1);
  };

  const validateForm = () => {
    if(report.interviewDate && report.status && report.note.length >= 15)
      postReport(data, report, () => navigate("/admin"))
  }

  useEffect(() => {
    setCurrentPage("Create Reports");
  }, []);

  return (
    <>
      <div className="adminWizzard">
        <div className="selectContainer">
          <Process step={step} />
          {selectedCandidate && (
            <ProcessSelected
              selectedCandidate={selectedCandidate}
              selectedCompany={selectedCompany}
            />
          )}
        </div>
        <div className="candidateContainer">
          {step < 3 && <Search />}
          {step === 1 && (
            <SelectCandidate
              selectedCandidate={selectedCandidate}
              setSelectedCandidate={setSelectedCandidate}
              search={search}
            />
          )}
          {step === 2 && (
            <SelectCompany
              setSelectedCompany={setSelectedCompany}
              search={search}
            />
          )}
          {step === 3 && nextPhase !== 'end-passed' && nextPhase !== 'end-declined' && (
            <FillReportDetail
              selectedCandidate={selectedCandidate}
              selectedCompany={selectedCompany}
              report={report}
              setReport={setReport}
            />
          )}
          {step === 3 && nextPhase === 'end-passed' && <ErrorPage text={'Candidate has passed all phases!'} />}
          {step === 3 && nextPhase === 'end-declined' && <ErrorPage text={'Candidate has been declined!'} />}
          <div className="buttonContainer">
            {step > 1 && (
              <Button
                name="BACK"
                btnClass="backButton"
                method={() => setStep(step - 1)}
              />
            )}
            {step < 3 && (
              <Button name="NEXT" btnClass="nextButton" method={nextStep} />
            )}
            {step === 3 && nextPhase !== 'end-passed' && nextPhase !== 'end-declined' && (
              <Button
                name="SUBMIT"
                btnClass="submitButton"
                method={() => validateForm()}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;
