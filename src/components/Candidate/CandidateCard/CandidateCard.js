import React from "react";

const CandidateCard = (props) => {
  return (
    <>
      <div className="candidate-card">
        <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"></img>
        <p>{props.candidate.name}</p>
        <p>{props.candidate.email}</p>
      </div>
    </>
  );
};

export default CandidateCard;
