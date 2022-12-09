import React, {useState} from 'react';
import CandidateCard2 from '../Candidate/CandidateCard2/CandidateCard2';
import "./selectCandidate.scss";

const SelectCandidate = (props) => {
  return (
    <>
    <div className="candidateCardsContainer">
    {props.search.map((e, i) => {
      return (
        <CandidateCard2 isSelected={props.candidateSelected?.id===e.id} setCandidateSelected={props.setCandidateSelected} e={e}
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