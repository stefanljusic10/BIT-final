import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import "./logInModal.scss";

const LogInModal = () => {
  const [logData, setLogData] = useState({ email: "", password: "" });
  const [isValidLogData, setIsValidLogData] = useState(true);
  const navigate = useNavigate();
  console.log(isValidLogData);
  // console.log(data.users);

  const validateLogUserData = (e, emailInput, passwordInput) => {
    e.preventDefault();
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput, password: passwordInput }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.accessToken) {
          setIsValidLogData(true)
          sessionStorage.setItem("accessToken", res.accessToken);
          navigate("/admin");
        }
        else throw('Greskaaaa!')
      })
      .catch((error) => {
        console.log(error);
        setIsValidLogData(false)
      });
  };

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
        <label className={isValidLogData ? "error-label close-error-label" : "error-label"}>*Required</label>
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
        <button
          onClick={(e) =>
            validateLogUserData(e, logData.email, logData.password)
          }
        >
          Log In
        </button>
      </form>
    </div>,
    document.getElementById("login-modal")
  );
};

export default LogInModal;
