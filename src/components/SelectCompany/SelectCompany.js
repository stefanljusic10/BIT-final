import React, { useContext } from "react";
import DataContext from "../../utils/context";
import "./selectCompany.scss";

const SelectCompany = ({ setSelectedCompany }) => {
  const { data, searchValue } = useContext(DataContext);
  const searchCompany = data.companies.filter(company => company.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  return (
    <div>
      {searchCompany.map((company) => (
        <div
          onClick={() => setSelectedCompany(company)}
          className="selectCompany"
          key={company.id}
        >
          {company.name}
        </div>
      ))}
    </div>
  );
};

export default SelectCompany;
