import React, { useContext } from "react";
import DataContext from "../../utils/context";
import getCompaniesForCandidate from '../../utils/getCompaniesForCandidate'
import "./selectCompany.scss";

const SelectCompany = ({ setSelectedCompany, candidateId }) => {
  const { data, searchValue} = useContext(DataContext);
  const candidateCompanies = getCompaniesForCandidate(candidateId, data.reports)
  const searchCompany = candidateCompanies.filter((e) => e.companyName.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <div>
      {searchCompany.map((company) => (
        <div
          onClick={() => setSelectedCompany(company)}
          className="selectCompany"
          key={company.companyId}
        >
          {company.companyName}
        </div>
      ))}
    </div>
  );
};

export default SelectCompany;
