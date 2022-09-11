import "./Sidebar.scss";
import Logo from "../../images/new-boostar-logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ApiIcon from "@mui/icons-material/Api";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import BiotechIcon from "@mui/icons-material/Biotech";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/modeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar-container">
      <div className="top">
        <span className="logo">
          <Link to="/">
            <img src={Logo} alt="" width="50" className="logo-image" />
          </Link>
        </span>
      </div>
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <div className="list-item">Dashboard</div>
          </li>
          <li>
            <Link
              to="/user"
              style={{
                textDecoration: "none",
                color: "#2e2e2e",
                textAlign: "center",
              }}
            >
              <PeopleIcon className="icon" />
              <div className="list-item">Users</div>
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              style={{
                textDecoration: "none",
                color: "#2e2e2e",
                textAlign: "center",
              }}
            >
              <InventoryIcon className="icon" />
              <div className="list-item">Product</div>
            </Link>
          </li>
          <p className="title">Business</p>
          <li>
            <PaymentIcon className="icon" />
            <div className="list-item">Payment</div>
          </li>
          <li>
            <AirportShuttleIcon className="icon" />
            <div className="list-item">Delivery</div>
          </li>
          <li>
            <ApiIcon className="icon" />
            <div className="list-item">Api</div>
          </li>
          <p className="title">Info</p>
          <li>
            <DocumentScannerIcon className="icon" />
            <div className="list-item">Documentation</div>
          </li>
          <li>
            <BiotechIcon className="icon" />
            <div className="list-item">Bio</div>
          </li>
          <li>
            <NotificationsOffIcon className="icon" />
            <div className="list-item">Notification</div>
          </li>

          <li>
            <AssessmentIcon className="icon" />
            <div className="list-item">Statistic</div>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <div className="list-item">Setting</div>
          </li>
          <p className="title">Users</p>
          <li>
            <AccountCircleIcon className="icon" />
            <div className="list-item">Profile</div>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <div className="list-item">Logout</div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="mode">Mode</div>
        <div className="mode-wrapper">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          >
            light
          </div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          >
            Dark
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
