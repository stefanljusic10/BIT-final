import React from "react";
import CandidateCard from "./SelectCandidateCard/SelectCandidateCard";
import "./selectCandidate.scss";

const SelectCandidate = ({ search, setCandidateSelected, candidateSelected }) => {
  return (
      <div className="candidateCardsContainer">
        {search.map((e) => (
          <CandidateCard isSelected={candidateSelected?.id===e.id}
            candidateSelected={candidateSelected}
            setCandidateSelected={setCandidateSelected}
            key={e.id}
            candidate={e}
          />
        ))}
      </div>
  );
};

export default SelectCandidate;