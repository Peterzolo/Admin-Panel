import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import userAvatar from "../../images/user-avatar.png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import "./Newpage.scss";
import { useState } from "react";

const initialState = {
  username: "",
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: "",
  country: "",
};

const New = () => {
  const [formdata, setFormdata] = useState(initialState);
  const {
    username,
    fullName,
    email,
    password,
    confirmPassword,
    phone,
    address,
    country,
  } = formdata;
  const handleChange = () => {};
  const handleSubmit = () => {};
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

          <div className="bottom-right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="username"
                  value={fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input
                  type="phone"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Confirm password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  name="country"
                  value={country}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">
                  Image <DriveFolderUploadOutlinedIcon />{" "}
                </label>
                <input type="file" />
              </div>
              <button className="sumbit-button" type="submit">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
