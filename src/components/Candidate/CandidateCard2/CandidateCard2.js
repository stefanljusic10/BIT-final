import React from "react";
import { useNavigate } from "react-router-dom";
import "./candidateCard2.scss"

const CandidateCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="candidate-card2"
        onClick={()=>props.setCandidateSelected(props.e.id)}
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