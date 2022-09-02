import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10" style={{ backgroundColor: "#f0f0f0" }}>
          <h3>Right</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
