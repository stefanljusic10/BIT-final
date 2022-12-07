import React from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils/context";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import useData from "./utils/useData";
import "./App.scss";
import LogInModal from "./components/LogInModal/LogInModal";

const App = () => {
  const data = useData();
  const [candidate, setCandidate] = useState({});

  const chooseCandidate = function (e) {
    setCandidate(e);
  };

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
            <Route exact path="/login" element={<LogInModal />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
