import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import "./Widget.scss";
const Widget = ({ type }) => {
  let data;

  const amount = 2000;
  const percentage = 80;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "All users",
        icon: <PeopleOutlineIcon className="icon" style={{backgroundColor : "#faad14", padding : "3px"}} />,
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "All orders here",
        icon: <ShoppingCartOutlinedIcon className="icon"style={{backgroundColor : "#faad14", padding : "3px"}} />,
      };
      break;
    case "earning":
      data = {
        title: "Payment",
        isMoney: true,
        link: "All earnings",
        icon: <MonetizationOnOutlinedIcon className="icon"style={{backgroundColor : "#faad14", padding : "3px"}} />,
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "Balances",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"style={{backgroundColor : "#faad14", padding : "3px"}} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
