import React, { useContext } from "react";
import DataContext from "../../utils/context";
import "./selectCompany.scss";

const SelectCompany = ({ setSelectedCompany }) => {
  const { data } = useContext(DataContext);
  return (
    <div>
      {data.companies.map((company) => (
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
