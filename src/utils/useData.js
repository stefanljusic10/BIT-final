import { useEffect, useState } from "react";
import fetchData from "./fetchData";

const useData = () => {
  const [candidates, setCandidates] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [reports, setReports] = useState([]);
  const [refreshReports, setRefreshReports] = useState(false)

  useEffect(() => {
    fetchData("candidates", setCandidates);
    fetchData("companies", setCompanies);
  }, []);

  useEffect(() => {
    fetchData("reports", setReports);
  }, [refreshReports]);

  return { candidates, companies, reports, refreshReports, setRefreshReports };
};

export default useData;
