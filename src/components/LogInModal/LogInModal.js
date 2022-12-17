import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import DataContext from "../../utils/context";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import validateLogin from "../../utils/validateLogin";
import "./logInModal.scss";

const LogInModal = () => {
  const [logData, setLogData] = useState({ email: "", password: "" });
  const [isValidLogData, setIsValidLogData] = useState(true);
  const { setIsLogged } = useContext(DataContext);
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <div id="loginModal">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>
      <form>
        <label className={isValidLogData ? "error-label close-error-label" : "error-label"}>
          *Required
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={isValidLogData ? "email" : "email email-error"}
          onChange={(e) =>
            setLogData({ ...logData, [e.target.name]: e.target.value })
          }
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className={isValidLogData ? "password" : "password password-error"}
          onChange={(e) =>
            setLogData({ ...logData, [e.target.name]: e.target.value })
          }
        ></input>
        <Button
          name="Log in"
          btnClass="loginButton"
          method={(e) =>
            validateLogin(
              e,
              logData.email,
              logData.password,
              setIsValidLogData,
              setIsLogged,
              navigate
            )
          }
        />
      </form>
    </div>,
    document.getElementById("modal")
  );
};

export default LogInModal;
