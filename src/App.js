import React, { useState } from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import LogInModal from "./components/LogInModal/LogInModal";
import useData from "./utils/useData";
import AdminMainPage from "./pages/AdminMainPage/AdminMainPage"

import "./App.scss";

const App = () => {
  const data = useData();
  const [candidate, setCandidate] = useState({});
  const [isLogIn, setLogIn] = useState (sessionStorage.getItem("accessToken"))
  const chooseCandidate = function (e) {
    setCandidate(e);
  };
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <DataContext.Provider value={{ data, searchValue, setSearchValue, isLogIn, setLogIn }}>
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
              path="/candidate/id=:id"
              element={<CandidatePage candidate={candidate} />}
            ></Route>
            <Route exact path="/login" element={<LogInModal />}></Route>
            <Route exact path="/admin" element={<AdminMainPage chooseCandidate={chooseCandidate} />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
