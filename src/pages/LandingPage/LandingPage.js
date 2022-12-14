import React, { useContext, useEffect } from "react";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import Search from "../../components/Search/Search";
import "./landingPage.scss";

const LandingPage = () => {
  const { data, searchValue, setCurrentPage } = useContext(DataContext);
  const search = data.candidates.filter((e) => e.name.toLowerCase().includes(searchValue.toLowerCase()));
  const renderCandidateCards = search.map((e) => <CandidateCard key={e.id} candidate={e} />);

  useEffect(() => {
    setCurrentPage("Candidates");
  }, []);

  return (
    <>
      <div id="searchWrap">
        <h2>Candidates</h2>
        <Search />
      </div>
      <div className="candidate-card-container">{renderCandidateCards}</div>
    </>
  );
};

export default LandingPage;
