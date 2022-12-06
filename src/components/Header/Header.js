import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <Link to='/'>
        <h1>Interviews Reports</h1>
      </Link>
      <ul>
        <Link to='/candidate'>
          <li>Candidates</li>
        </Link>
        <Link to='/login'>
          <li>Log in</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
