import React from "react";
import { useContext } from "react";
import DataContext from "../../../utils/context";
import moment from "moment";
import ViewDelete from "./ViewDelete/ViewDelete";
import Item from "./Item/Item";
import "./candidateReport.scss";

const CandidateReport = ({
  report,
  clickModal,
  setReportId,
  isSquare = false,
}) => {
  const { isLogged } = useContext(DataContext);
  const interviewDate = moment(report.interviewDate).format("LL");
  const statusClass =
    report.status === "passed" ? "status passed" : "status declined";

  return (
    <div className={!isSquare ? "candidateReport" : "candidateReport-user"}>
      <div className={!isSquare ? "box" : "box-user"}>
        <Item
          itemClass={"company"}
          name={report.companyName}
          placeholder={"Company"}
        />
        <Item
          itemClass={"candidate"}
          name={report.candidateName}
          placeholder={"Candidate"}
        />
        <Item
          itemClass={"date"}
          name={interviewDate}
          placeholder={"Interview Date"}
        />
        <Item
          itemClass={statusClass}
          name={report.status}
          placeholder={"Status"}
        />
        <ViewDelete
          report={report}
          clickModal={clickModal}
          setReportId={setReportId}
        />
      </div>
    </div>
  );
};

export default CandidateReport;
