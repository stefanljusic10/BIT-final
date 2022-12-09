import React from "react";
import { useNavigate } from "react-router-dom";
import "./candidateCard2.scss"

const CandidateCard = (props) => {
  return (
    <>
      <div
        className={`candidate-card2 ${props.isSelected ? "candidate-card2-active" : ""}`}
        onClick={()=>{
          props.setCandidateSelected(props.e)
        }}
      >
        <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"></img>
        <div className="nameEmail">
        <p>{props.candidate.name}</p>
        <p>{props.candidate.email}</p>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;