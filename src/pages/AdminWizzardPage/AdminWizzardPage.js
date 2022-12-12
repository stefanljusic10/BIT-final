import React, { useState, useContext } from "react";
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
  const { data, searchValue } = useContext(DataContext);
  const [step, setStep] = useState(1);
  const [candidateSelected, setCandidateSelected] = useState(false);
  const [companySelected, setCompanySelected] = useState(false);
  const search = data.candidates.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  const searchCompanies = data.companies.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <>
      <div className="adminWizzard">
        <div className="selectContainer">
          <Process step={step} />
          {step > 1 && <ProcessSelected candidateSelected={candidateSelected} companySelected={companySelected} step={step} />}
        </div>
        <div className="candidateContainer">
          {step < 3 && <Search />}
          {step === 1 && <SelectCandidate candidateSelected={candidateSelected} setCandidateSelected={setCandidateSelected} search={search} />}
          {step === 2 && <SelectCompany companySelected={companySelected} setCompanySelected={setCompanySelected} search={searchCompanies} />}
          {step === 3 && <FillReportDetail candidateSelected={candidateSelected} companySelected={companySelected} />}
          <div className="buttonContainer">
            {step > 1 && <Button name="BACK" btnClass='backButton' method={() => {
              setCompanySelected(false) 
              setStep(step - 1)}} />}
            {step < 3 && <Button name="NEXT" btnClass='nextButton' method={() => candidateSelected && setStep(step + 1)} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;