import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import DataContext from "../../utils/context";

const Header = () => {
  const { isLogIn, setLogIn } = useContext(DataContext);
  return (
    <header id="header">
      
      <div></div>
      <h1>{isLogIn? "Interviews Reports" : "Reports Administration"}</h1>

      <ul>
        <Link to={isLogIn ? "/" : "/admin"}>
          <li>{isLogIn? "Candidates" : "Reports"}</li>
        </Link>
        <Link to={isLogIn ? "/login" : "/createReports"}>
          <li>{isLogIn? "Log in" : "Create Reports"}</li>
        </Link>
      {!isLogIn && <Link to="/"><li onClick={()=>setLogIn()} >Log out</li></Link>}
      </ul>
    </header>
  );
};

export default Header;
