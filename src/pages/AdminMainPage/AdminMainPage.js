import React, { useContext } from "react";
import "./adminMainPage.scss";
import Search from "../../components/Search/Search";
import DataContext from "../../utils/context";
import CandidateCard from "../../components/Candidate/CandidateCard/CandidateCard";

const AdminMainPage = (props) => {
  const { data } = useContext(DataContext);
  return (
    <>
      <Search />
      <div>AdminMainPage</div>
      <div className="candidate-card-container">
        {data.map((e, i) => {
          return (
            <CandidateCard
              key={i}
              candidate={e}
                chooseCandidate={props.chooseCandidate}
            />
          );
        })}
      </div>
    </>
  );
};

export default AdminMainPage;
