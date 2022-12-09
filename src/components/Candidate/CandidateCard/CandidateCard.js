import React from "react";
import { useNavigate } from "react-router-dom";
import './candidateCard.scss'

const CandidateCard = ({ candidate }) => {
  const navigate = useNavigate();

  return (
    <div className="candidate-card" onClick={() => navigate(`/candidate/id=${candidate.id}`)}>
      <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg" alt={candidate.name} />
      <p>{candidate.name}</p>
      <p>{candidate.email}</p>
    </div>
  );
};

export default CandidateCard;
