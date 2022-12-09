import React, { useState, useContext } from "react";
import "./adminWizzardPage.scss";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import SelectCandidate from "../../components/SelectCandidate/SelectCandidate";
import SelectCompany from "../../components/SelectCompany/SelectCompany";

const NAV = [
  {
    number: 1,
    label: "Select Candidate",
  },
  {
    number: 2,
    label: "Select Company",
  },
  {
    number: 3,
    label: "Fill Report Details",
  },
];

const AdminWizzardPage = (props) => {
  const [step, setStep] = useState(1);
  const { data, searchValue } = useContext(DataContext);
  const search = data.candidates.filter((e) =>
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <div className="adminWizzard1">
        <div className="selectContainer">
          {NAV.map((navItem) => {
            return (
              <div className={step === navItem.number && "activeItem"}>
                <div>{navItem.number}</div>
                {navItem.label}
              </div>
            );
          })}
        </div>
        <div className="candidateContainer">
          <div>
            <Search />
          </div>
          {step === 1 && <SelectCandidate search={search} />}
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