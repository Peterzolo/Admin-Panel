import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UserImage from "../../images/data1.jpg";
import EditIcon from "@mui/icons-material/Edit";

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
            <h3 className="title">User Data</h3>
            <div className="item">
              <img src={UserImage} alt="image" className="user-image" />
              Details
            </div>
          </div>
          <div className="top-right">Right</div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
