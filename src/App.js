import React, { useState } from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import LogInModal from "./components/LogInModal/LogInModal";
import AdminMainPage from "./pages/AdminMainPage/AdminMainPage";
import AdminWizzardPage from "./pages/AdminWizzardPage/AdminWizzardPage";
import useData from "./utils/useData";
import "./App.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  const data = useData();
  const [searchValue, setSearchValue] = useState("");
  const [isLogged, setIsLogged] = useState(sessionStorage.getItem("accessToken"));
  const [reportId, setReportId] = useState();
  const [currentPage, setCurrentPage] = useState("Candidates");

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          searchValue,
          setSearchValue,
          isLogged,
          setIsLogged,
          reportId,
          setReportId,
          currentPage,
          setCurrentPage,
        }}
      >
        <BrowserRouter>
          <Header />
          <main className="main-box">
            <Routes>
              <Route exact path="/" element={<LandingPage />}></Route>
              <Route
                exact
                path="/candidate/id=:id"
                element={<CandidatePage />}
              ></Route>
              <Route exact path="/login" element={<LogInModal />}></Route>
              <Route
                exact
                path="/admin"
                element={isLogged ? <AdminMainPage /> : <LogInModal />}
              ></Route>
              <Route
                exact
                path="/createReports"
                element={isLogged ? <AdminWizzardPage /> : <LogInModal />}
              ></Route>
              <Route path="*" element={<ErrorPage text="Page not found!"/>}></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;
