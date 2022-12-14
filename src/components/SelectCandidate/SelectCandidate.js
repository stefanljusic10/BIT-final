import React from "react";
import SelectCandidateCard from "./SelectCandidateCard/SelectCandidateCard";
import "./selectCandidate.scss";

const SelectCandidate = ({ search, candidateSelected, setCandidateSelected }) => {
  return (
      <div className="candidateCardsContainer">
        {search.map((e) => (
          <SelectCandidateCard isSelected={candidateSelected?.id===e.id}
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