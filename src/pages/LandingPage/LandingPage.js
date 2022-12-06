import React, { useContext } from "react";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";
import "./landingPage.scss";
import Search from "../../components/Search/Search"

const LandingPage = () => {
  const {data, setData, searchValue} = useContext(DataContext);

  const search = data.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase()))
  console.log(search);
  
  return (
    <>
     <div id="searchWrap">
      <h2>Candidates</h2>
      <Search />
      </div>
      <div className="candidate-card-container">
        {search.map((e, i) => {
          return <CandidateCard key={i} candidate={e} />;
        })}
      </div>
    </>
  );
};

export default LandingPage;
