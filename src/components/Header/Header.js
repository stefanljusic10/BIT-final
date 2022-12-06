import React, { useContext } from "react";
import DataContext from "../../utils.js/context";
import './header.scss'

const Header = () => {
  const data = useContext(DataContext)
  console.log(data);
  return (
    <header id='header'>
      <h1>Interviews Reports</h1>
      <ul>
        <li>Candidates</li>
        <li>Log in</li>
      </ul>
    </header>
  );
};

export default Header;
