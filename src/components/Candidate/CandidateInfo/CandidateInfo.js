import React from "react";
import moment from "moment";
import Item from "../CandidateReport/Item/Item";
import "./candidateInfo.scss";

const CandidateInfo = ({ chosenCandidate }) => {
  const email = chosenCandidate?.email.toLowerCase();
  return (
    <>
      <div className="personal-info">
        <img
          src={chosenCandidate?.avatar}
          alt={chosenCandidate?.name}
        />
        <div className="personal-info-data">
          <Item name="Name:" placeholder={chosenCandidate?.name} />
          <Item
            name="Date of birth:"
            placeholder={moment(chosenCandidate?.birthday).format("LL")}
          />
          <Item name="Email:" placeholder={email} />
          <Item
            name="Education:"
            placeholder={chosenCandidate?.education}
          />
        </div>
      </div>
    </>
  );
};

export default CandidateInfo;
