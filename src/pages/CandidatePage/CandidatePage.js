import React from "react";

const CandidatePage = (props) => {
  return (
    <>
      <div className="personal-info">
        <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"></img>
        <div className="personal-info-data">
          <div>
            <p>Name:</p>
            <p>{props.candidate.name}</p>
          </div>
          <div>
            <p>Date of birth:</p>
            <p>{props.candidate.birthday}</p>
          </div>
          <div>
            <p>Email:</p>
            <p>{props.candidate.email}</p>
          </div>
          <div>
            <p>Education:</p>
            <p>{props.candidate.education}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidatePage;
