import React from 'react';
import CandidateCard from './CandidateCard/CandidateCard';
import "./selectCandidate.scss";

const SelectCandidate = ({ search, setCandidateSelected }) => {
  return (
    <>
      <div className="candidateCardsContainer">
        {search.map((e, i) => <CandidateCard setCandidateSelected={setCandidateSelected} key={i} candidate={e} />)}
      </div>
    </>
  )
}

export default SelectCandidate