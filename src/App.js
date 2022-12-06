import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import useData from "./utils/useData";

import "./App.scss";
import LogInModal from "./components/LogInModal/LogInModal";

const App = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState ("");

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <DataContext.Provider value={{data, searchValue, setSearchValue}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/candidate" element={<CandidatePage />}></Route>
            <Route exact path="/login" element={<LogInModal />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
