import React, { useState, useContext } from "react";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import SelectCandidate from "../../components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../components/SelectCompany/SelectCompany";
import Process from "../../components/Process/Process";
import ProcessSelected from "../../components/ProcessSelected/ProcessSelected";
import Button from "../../components/Button/Button";
import "./adminWizzardPage.scss";
import FillReportDetail from "../../components/FillReportDetail/FillReportDetail";

const AdminWizzardPage = () => {
  const { data, searchValue } = useContext(DataContext);
  const [step, setStep] = useState(1);
  const [candidateSelected, setCandidateSelected] = useState(false);
  const search = data.candidates.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <div className="adminWizzard">
        <div className="selectContainer">
          <Process step={step} />
          {step > 1 && <ProcessSelected candidateSelected={candidateSelected} />}
        </div>
        <div className="candidateContainer">
          {step < 3 && <Search />}
          {step === 1 && <SelectCandidate setCandidateSelected={setCandidateSelected} search={search} />}
          {step === 2 && <SelectCompany search={search} />}
          {step === 3 && <FillReportDetail candidateSelected={candidateSelected} />}
          <div className="buttonContainer">
            {step > 1 && <Button name="BACK" btnClass='backButton' method={() => setStep(step - 1)} />}
            {step < 3 && <Button name="NEXT" btnClass='nextButton' method={() => candidateSelected && setStep(step + 1)} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;