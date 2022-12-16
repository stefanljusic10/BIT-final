import React from "react";
import './selectCandidateCard.scss'

const SelectCandidateCard = ({ candidate, isSelected, setSelectedCandidate }) => {
  return (
    <div
      className={`selectCandidateCard ${isSelected ? "selectedCandidateCardActive" : ""}`}
      onClick={() => setSelectedCandidate(candidate)}
    >
      <img src="https://hccryde.syd.catholic.edu.au/wp-content/uploads/sites/148/2019/05/Person-icon.jpg" alt="slika" />
      <div className="nameEmail">
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </div>
  );
};

export default SelectCandidateCard;
