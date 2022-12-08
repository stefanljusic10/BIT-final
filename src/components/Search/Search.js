import React, { useContext } from "react";
import DataContext from "../../utils/context";
import "./search.scss";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(DataContext);

  return (
    <input
      type="text"
      id="search"
      placeholder="Search..."
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
    />
  );
};

export default Search;
