import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import FullscreenExitTwoToneIcon from "@mui/icons-material/FullscreenExitTwoTone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Avatar from "../../images/Avatar.png";
import "./Navbar.scss";
import { DarkModeContext } from "../../context/modeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="links">
          <div className="link-item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="link-item">
            <DarkModeTwoToneIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="link-item">
            <FullscreenExitTwoToneIcon className="icon" />
          </div>
          <div className="link-item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">10</div>
          </div>
          <div className="link-item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">8</div>
          </div>
          <div className="link-item">
            <ListAltIcon className="icon" />
          </div>
          <div className="link-item">
            <img src={Avatar} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
