import React from "react";
import SelectCandidateCard from "./SelectCandidateCard/SelectCandidateCard";
import "./selectCandidate.scss";

const SelectCandidate = ({ search, selectedCandidate, setSelectedCandidate }) => {
  return (
      <div className="selectCandidate">
        {search.map(candidate => (
          <SelectCandidateCard
            isSelected={selectedCandidate?.id === candidate.id}
            key={candidate.id}
            candidate={candidate}
            setSelectedCandidate={setSelectedCandidate}
          />
        ))}
      </div>
  );
};

export default SelectCandidate;
