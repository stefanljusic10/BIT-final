import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import DataContext from "../../utils/context";
import "./logInModal.scss";

const LogInModal = () => {
  const data = useContext(DataContext)
  console.log(data.users);

  const validateLoggedUser = (email, password) => {
    
  }

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
        <input type="text" placeholder="Username" className="userName"></input>
        <input
          type="password"
          placeholder="Enter password"
          className="password"
        ></input>
        <button>Log In</button>
      </form>
    </div>,
    document.getElementById("login-modal")
  );
};

export default LogInModal;
