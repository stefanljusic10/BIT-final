import React from "react";
import "./selectCompany.scss";

const SelectCompany = ({search, setCompanySelected, companySelected}) => {

  return (
    <div>
      {search.map(e => <div className={`selectCompany ${companySelected?.id===e.id ? "selectCompanyActive" : ""}`} onClick={() => setCompanySelected(e)} key={e.id}>{e.name}</div>)}
    </div>
  );
};

export default SelectCompany;