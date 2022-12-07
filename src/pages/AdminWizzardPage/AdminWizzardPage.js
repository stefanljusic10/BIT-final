import React from "react";
import "./adminWizzardPage.scss";
import Search from "../../components/Search/Search";

const AdminWizzardPage = () => {
  return (
    <>
      <div id="selectContainer">
        <div>
          <div>1</div>Select Company
        </div>
        <div>
          <div>2</div>Select Company
        </div>
        <div>
          <div>3</div>Fill Report Details
        </div>
      </div>
      <div id="candidateContainer">
        <div>
          <Search />{" "}
        </div>
      </div>
    </>
  );
};

export default AdminWizzardPage;
