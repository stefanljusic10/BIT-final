import React, { useState, useContext, useEffect } from "react";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import SelectCandidate from "../../components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../components/SelectCompany/SelectCompany";
import Process from "../../components/Process/Process";
import ProcessSelected from "../../components/ProcessSelected/ProcessSelected";
import Button from "../../components/Button/Button";
import FillReportDetail from "../../components/FillReportDetail/FillReportDetail";
import "./adminWizzardPage.scss";

const AdminWizzardPage = () => {
  const { data, searchValue, setCurrentPage } = useContext(DataContext);
  const [step, setStep] = useState(1);
  const [candidateSelected, setCandidateSelected] = useState(false);
  const [companySelected, setCompanySelected] = useState(false);
  const [interviewDate, setInterviewDate] = useState();
  const [phase, setPhase] = useState("");
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const search = data.candidates.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  const searchCompanies = data.companies.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(interviewDate, phase, status, note);

  const submitFillReport = () => {
    console.log("next");
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({candidateId: candidateSelected.id ,candidateName: candidateSelected.name, companyId: companySelected.id ,companyName: companySelected.name, interviewDate: interviewDate, phase: phase, status: status, note: note})
  })
  }


  return (
      <div className="adminWizzard">
        <div className="selectContainer">
          <Process step={step} />
          {step > 1 && <ProcessSelected candidateSelected={candidateSelected} companySelected={companySelected} step={step} />}
        </div>
        <div className="candidateContainer">
          {step < 3 && <Search />}
          {step === 1 && <SelectCandidate candidateSelected={candidateSelected} setCandidateSelected={setCandidateSelected} search={search} />}
          {step === 2 && <SelectCompany companySelected={companySelected} setCompanySelected={setCompanySelected} search={searchCompanies} />}
          {step === 3 && <FillReportDetail candidateSelected={candidateSelected} companySelected={companySelected} setInterviewDate={setInterviewDate} setPhase={setPhase} setStatus={setStatus} setNote={setNote} />}
          <div className="buttonContainer">
            {step > 1 && <Button name="BACK" btnClass='backButton' method={() => {
              setCompanySelected(false) 
              setStep(step - 1)}} />}
            {step < 3 && <Button isDisabled={!candidateSelected && step===1 || !companySelected && step===2} name="NEXT" btnClass='nextButton' method={() => setStep(step + 1)} />}
            {step === 3 && <Button method={submitFillReport} name="SUBMIT" btnClass="submitButton" />}
          </div>
        </div>
      </div>
  );
};

export default AdminWizzardPage;