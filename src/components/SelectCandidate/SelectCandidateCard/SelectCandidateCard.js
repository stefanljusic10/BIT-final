import React from "react";
import './selectCandidateCard.scss'

const SelectCandidateCard = ({ candidate, isSelected, setSelectedCandidate }) => {
  return (
    <div
      className={`selectCandidateCard ${isSelected ? "selectedCandidateCardActive" : ""}`}
      onClick={() => setSelectedCandidate(candidate)}
    >
      <img src={candidate.avatar} alt={candidate.name} />
      <div className="nameEmail">
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </div>
  );
};

export default SelectCandidateCard;
