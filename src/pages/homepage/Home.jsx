import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Navbar/>
          <div className="widgets">
            <Widget type = "user"/>
            <Widget type = "order"/>
            <Widget type = "earning"/>
            <Widget type = "balance"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
