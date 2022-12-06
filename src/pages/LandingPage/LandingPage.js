import React, { useContext } from "react";
import DataContext from "../../utils.js/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import "./landingPage.scss";
import Search from "../../components/Search/Search"

const LandingPage = () => {
  const {data} = useContext(DataContext);
  console.log(data);
  return (
    <>
     <div id="searchWrap">
      <h2>Candidates</h2>
      <Search />
      </div>
      <div className="candidate-card-container">
        {data.map((e, i) => {
          return <CandidateCard key={i} candidate={e} />;
        })}
      </div>
    </>
  );
};

export default LandingPage;
