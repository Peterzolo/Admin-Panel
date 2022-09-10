import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import userAvatar from "../../images/user-avatar.png";

import "./Newpage.scss";
const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topNew">
          <h2>Add New user</h2>
        </div>
        <div className="bottomNew">
          <div className="bottom-left">
            <img src={userAvatar} alt="user-avatar" className="avatarImage" />
          </div>

          <div className="bottom-right">Bottom Right</div>
        </div>
      </div>
    </div>
  );
};

export default New;
