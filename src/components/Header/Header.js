import React from "react";
import { useNavigate } from "react-router-dom";
import './header.scss'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header id='header'>
      <h1>Interviews Reports</h1>
      <ul>
        <li onClick={() => navigate('/candidate')}>Candidates</li>
        <li>Log in</li>
      </ul>
    </header>
  );
};

export default Header;
