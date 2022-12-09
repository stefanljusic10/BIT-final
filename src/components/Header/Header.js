import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../utils/context";
import "./header.scss";

const Header = () => {
  const { isLogged, setIsLogged } = useContext(DataContext)

  const logOut = () => {
    sessionStorage.clear();
    setIsLogged(false);
  };

  return (
    <header id="header">
      <h1>{!isLogged ? "Interviews Reports" : "Reports Administration"}</h1>

      <ul>
        <Link to={!isLogged ? "/" : "/admin"}>
          <li>{!isLogged ? "Candidates" : "Reports"}</li>
        </Link>
        <Link to={!isLogged ? "/login" : "/createReports"}>
          <li>{!isLogged ? "Log in" : "Create Reports"}</li>
        </Link>
        {isLogged && (
          <Link to="/">
            <li onClick={() => logOut()}>Log out</li>
          </Link>
        )}
      </ul>
    </header>
  );
};

export default Header;
