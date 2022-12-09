import React, { useState, useContext, useEffect } from "react";
import "./adminWizzardPage.scss";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import SelectCandidate from "../../components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../components/SelectCompany/SelectCompany";
import Process from "../../components/Process/Process";
import ProcessSelected from "../../components/ProcessSelected/ProcessSelected";

const AdminWizzardPage = (props) => {
  const [step, setStep] = useState(1);
  const [candidateSelected, setCandidateSelected] = useState();
  const { data, searchValue } = useContext(DataContext);
  const search = data.candidates.filter((e) =>
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );


    console.log(candidateSelected);
  

  return (
    <>
      <div className="adminWizzard1">
        <div className="selectContainer">
          <Process step={step} />
          <ProcessSelected />
        </div>
        <div className="candidateContainer">
          <div>
            <Search />
          </div>
          {step === 1 && <SelectCandidate setCandidateSelected={setCandidateSelected} search={search} />}
          {step === 2 && <SelectCompany search={search} />}
          <div className="buttonContainer">
            {step !== 1 && (
              <button className="backButton" onClick={() => setStep(step - 1)}>
                BACK
              </button>
            )}
            <button className="nextButton" onClick={() => setStep(step + 1)}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;