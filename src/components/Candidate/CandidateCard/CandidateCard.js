import React from "react";
import { useNavigate } from "react-router-dom";

const CandidateCard = ({ candidate }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="candidate-card"
        onClick={() => navigate(`/candidate/id=${candidate.id}`)}
      >
        <img src={candidate.avatar} alt={candidate.name} />
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
      </div>
    </>
  );
};

export default CandidateCard;
