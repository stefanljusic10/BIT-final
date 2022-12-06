import React from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import useData from "./utils/useData";
import "./App.scss";

const App = () => {
  const data = useData()

  return (
    <>
      <DataContext.Provider value={data}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/candidate" element={<CandidatePage />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
