import React, { useContext } from "react";
import DataContext from "../../utils/context";
import "./selectCompany.scss";

const SelectCompany = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      {data.companies.map(e => <div className="selectCompany" key={e.id}>{e.name}</div>)}
    </div>
  );
};

export default SelectCompany;
