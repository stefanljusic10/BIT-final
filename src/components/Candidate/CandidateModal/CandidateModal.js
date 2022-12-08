import React from "react";
import moment from "moment";
import "./candidateModal.scss";

const CandidateModal = (props) => {
  console.log(props.report, props.reportId);
  const chosenReport = props.report.find((e) => e.id == props.reportId);
  console.log(chosenReport);
  return (
    <>
      <div className="report-modal">
        <span onClick={() => props.clickModal(false)} className="close">
          X
        </span>
        <h2 className="candidate-name">{chosenReport.candidateName}</h2>

        <div className="report-info">
          <div className="companyName">
            <span>Company</span>
            <h5>{chosenReport.companyName}</h5>
          </div>

          <div className="interviewDate">
            <span>Interview Date</span>
            <h5>{moment(chosenReport.interviewDate).format("LL")}</h5>
          </div>

          <div className="phase">
            <span>Phase</span>
            <h5>{chosenReport.phase}</h5>
          </div>

          <div className="statusRep">
            <span>Status</span>
            <h5>{chosenReport.status}</h5>
          </div>
        </div>

        <div className="notes">
          <h5>Notes</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            sapiente odit expedita ipsam doloribus consequuntur provident, sint
            deserunt beatae labore vero quo ullam asperiores dolor fugit odio ut
            non veritatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque sapiente odit expedita ipsam doloribus consequuntur
            provident, sint deserunt beatae labore vero quo ullam asperiores
            dolor fugit odio ut non veritatis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eaque sapiente odit expedita ipsam
            doloribus consequuntur provident, sint deserunt beatae labore vero
            quo ullam asperiores dolor fugit odio ut non veritatis.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default CandidateModal;
