import React from "react";
import { useNavigate } from "react-router-dom";
import './candidateCard.scss'

const CandidateCard = ({ candidate }) => {
  const navigate = useNavigate();

  return (
    <div className="candidate-card" onClick={() => {navigate(`/candidate/id=${candidate.id}`)}}>
      <img src="https://hccryde.syd.catholic.edu.au/wp-content/uploads/sites/148/2019/05/Person-icon.jpg" alt={candidate.name} />
      <p>{candidate.name}</p>
      <p>{candidate.email}</p>
    </div>
  );
};

export default CandidateCard;
