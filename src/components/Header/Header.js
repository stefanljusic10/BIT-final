import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../utils/context";
import "./header.scss";

const Header = () => {
  const { isLogged, setIsLogged, currentPage, setCurrentPage } =
    useContext(DataContext);

  const logOut = () => {
    sessionStorage.removeItem("accessToken");
    setIsLogged(false);
  };

  return (
    <header id="header">
      <h1>{!isLogged ? "Interviews Reports" : "Reports Administration"}</h1>

      <ul>
        <Link to="/" className={currentPage === "Candidates" ? "active" : ""}>
          <li>Candidates</li>
        </Link>
        {isLogged && (
          <Link
            to="admin"
            className={currentPage === "Reports" ? "active" : ""}
          >
            <li>Reports</li>
          </Link>
        )}
        <Link
          to={!isLogged ? "/login" : "/createReports"}
          className={currentPage === "Create Reports" ? "active" : ""}
        >
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
