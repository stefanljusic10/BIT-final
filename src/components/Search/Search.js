import React, { useContext } from "react";
import DataContext from "../../utils.js/context";
import "./search.scss";

const Search = () => {
    const {setSearchValue} = useContext(DataContext)
  return (
    <>
        <input type="text" id="search" placeholer="search" onChange={(e) => setSearchValue(e.target.value)} />
    </>
  );
};

export default Search;
