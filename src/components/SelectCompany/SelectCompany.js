import React, { useContext } from "react";
import DataContext from "../../utils/context";
import "./selectCompany.scss";

const SelectCompany = ({search}) => {
  // const { data } = useContext(DataContext);
  return (
    <div>
      {search.map(e => <div className="selectCompany" key={e.id}>{e.name}</div>)}
    </div>
  );
};

export default SelectCompany;
