import React from "react";
import { useNavigate } from "react-router-dom";

const CandidateCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="candidate-card"
        onClick={() => {
          navigate("/candidate");
        }}
      >
        <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"></img>
        <p>{props.candidate.name}</p>
        <p>{props.candidate.email}</p>
      </div>
    </>
  );
};

export default CandidateCard;
