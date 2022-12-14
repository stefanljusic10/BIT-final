import React from "react";
import moment from "moment";
import Item from "../CandidateReport/Item/Item";
import "./candidateInfo.scss";

const CandidateInfo = (props) => {
  const email = props.chosenCandidate?.email.toLowerCase();
  return (
    <>
      <div className="personal-info">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
          alt={props.chosenCandidate?.name}
        />
        <div className="personal-info-data">
          <Item name="Name:" placeholder={props.chosenCandidate?.name} />
          <Item
            name="Date of birth:"
            placeholder={moment(props.chosenCandidate?.birthday).format("LL")}
          />
          <Item name="Email:" placeholder={email} />
          <Item
            name="Education:"
            placeholder={props.chosenCandidate?.education}
          />
        </div>
      </div>
    </>
  );
};

export default CandidateInfo;
