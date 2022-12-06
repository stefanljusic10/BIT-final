import React, { useContext } from "react";
import DataContext from "../../utils.js/context";

const Header = () => {
  const data = useContext(DataContext)
  console.log(data);
  return (
    <>
      <div>Header</div>
      <p>Pera je car</p>
    </>
  );
};

export default Header;
