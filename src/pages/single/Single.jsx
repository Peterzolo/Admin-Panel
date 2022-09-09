import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./Single.scss";

const Single = () => {
  return (
    <div className="single-container">
      <Sidebar />
      <div className="sub-container">
        <Navbar />
        Single component
      </div>
    </div>
  );
};

export default Single;
