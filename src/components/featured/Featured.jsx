import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="top">
        <h3 className="title">Revenue</h3>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-progress">
          <CircularProgressbar value={90} text="90%" strokeWidth={5} />
        </div>
        <div className="sales-info">
          <span className="title-sales">Overall daily sales</span>
          <span className="amount-sales">$5000</span>
        </div>
        <p className="desc">
          Ant Design's color palette also has the ability to further extend.
          After careful elaboration by designers and programmers, we have come
          up with a set of color generation tools that combine the natural
          variation of colors.
        </p>
      </div>
    </div>
  );
};

export default Featured;
