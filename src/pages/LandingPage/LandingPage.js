import React, { useContext } from "react";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import "./landingPage.scss";

const LandingPage = () => {
  const data = useContext(DataContext);

  return (
    <>
      <div className="candidate-card-container">
        {data.candidates.map((e) => {
          return <CandidateCard key={e.id} candidate={e} />;
        })}
      </div>
    </>
  );
};

export default LandingPage;
