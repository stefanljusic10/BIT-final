import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import DataContext from "./utils.js/context";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <DataContext value={data}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="candidate" element={<CandidatePage />}></Route>
          </Routes>
        </BrowserRouter>
      </DataContext>
    </>
  );
};

export default App;
