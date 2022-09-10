import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UserImage from "../../images/data1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import Chart from "../../components/chart/Chart";
import DataTable from "../../components/data-table/DataTable";

import "./Single.scss";

const Single = () => {
  return (
    <div className="single-container">
      <Sidebar />
      <div className="sub-container">
        <Navbar />
        <div className="top">
          <div className="top-left">
            <div className="editButton">
              <EditIcon />
            </div>
            <h3 className="title">User Information</h3>
            <hr className="hr" />
            <div className="item">
              <img src={UserImage} alt="image" className="user-image" />
              <div className="details">
                <h1 className="itemTitle">Paul Pope</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">paulpope@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234-8023152954</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elvis Avenue, Lagos</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">country:</span>
                  <span className="itemValue">West Africa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="top-right">
            <Chart
              aspect={3 / 2}
              title="User Transaction for the 1st quarter - 2022"
            />{" "}
          </div>
        </div>
        <hr />
        <div className="single-bottom">
          <h3 className="title">Transaction Summary</h3>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
