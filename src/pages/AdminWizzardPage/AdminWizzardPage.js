import React, {useContext} from "react";
import "./adminWizzardPage.scss";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";

const AdminWizzardPage = (props) => {
  const { data, searchValue } = useContext(DataContext);
  const search = data.candidates.filter((e) =>
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
    <div id="adminWizzard1">
      <div id="selectContainer">
        <div>
          <div>1</div>Select Company
        </div>
        <div>
          <div>2</div>Select Company
        </div>
        <div>
          <div>3</div>Fill Report Details
        </div>
      </div>
      <div id="candidateContainer">

        <div>
          <Search />{" "}
        </div>
        <div id="candidateCardsContainer">
        
        {search.map((e, i) => {
          return (
            <CandidateCard
            key={i}
            candidate={e}
            chooseCandidate={props.chooseCandidate}
            />
            );
          })}
        
      </div>
      </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;
