import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({isAdmin}) => {
  return (
    <header id="header">
      
      <div></div>
      <h1>{!isAdmin? "Interviews Reports" : "Reports Administration"}</h1>

      <ul>
        <Link to={!isAdmin ? "/" : "/admin"}>
          <li>{!isAdmin? "Candidates" : "Reports"}</li>
        </Link>
        <Link to={!isAdmin ? "/login" : "/createReports"}>
          <li>{!isAdmin? "Log in" : "Create Reports"}</li>
        </Link>
      {isAdmin && <Link to="/"><li onClick={() => sessionStorage.clear()} >Log out</li></Link>}
      </ul>
    </header>
  );
};

export default Header;
