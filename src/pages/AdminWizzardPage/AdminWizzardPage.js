import React, { useState, useContext } from "react";
import "./adminWizzardPage.scss";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import { Route } from "react-router-dom";

const AdminWizzardPage = (props) => {
  const [step, setStep] = useState(1);
  const { data, searchValue } = useContext(DataContext);
  const search = data.candidates.filter((e) =>
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <div id="adminWizzard1">
        <div id="selectContainer">
          <div>
            <div>1</div>Select Candidate
          </div>
          <div>
            <div>2</div>Select Company
          </div>
          <div>
            <div>3</div>Fill Report Details
          </div>
        </div>
        <div id="candidateContainer">
          <div>
            <Search />
          </div>
          <div id="candidateCardsContainer">
            {search.map((e, i) => {
              return (
                <CandidateCard
                  key={i}
                  candidate={e}
                  chooseCandidate={props.chooseCandidate}
                />
              );
            })}
          </div>
          <div id="buttonContainer">
            <button id="nextButton" onClick={() => setStep(step + 1)}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;
