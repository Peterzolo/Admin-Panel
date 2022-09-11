import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ListTable from "../../components/table/ListTable";
import Widget from "../../components/widget/Widget";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="chart">
          <Featured />
          <Chart aspect={3 / 2} title="Monthly Sales Report [ 1st half] 2022" />
        </div>
        <hr className="hr" />
        <div className="listContainer">
          <div className="list-title">Latest Transactions</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
