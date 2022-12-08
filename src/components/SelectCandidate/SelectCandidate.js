import React from 'react'
import CandidateCard from '../Candidate/CandidateCard/CandidateCard';

const SelectCandidate = (props) => {
  return (
    <>
    <div className="candidateCardsContainer">
    {props.search.map((e, i) => {
        return (
            <CandidateCard
            key={i}
            candidate={e}
            chooseCandidate={props.chooseCandidate}
            />
            );
        })}
  </div>
        </>
  )
}

export default SelectCandidate