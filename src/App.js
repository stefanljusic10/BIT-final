import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils.js/context";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [candidate, setCandidate] = useState({});

  const chooseCandidate = function (e) {
    setCandidate(e);
  };

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route
              exact
              path="/"
              element={<LandingPage chooseCandidate={chooseCandidate} />}
            ></Route>
            <Route
              exact
              path="/candidate"
              element={<CandidatePage candidate={candidate} />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
