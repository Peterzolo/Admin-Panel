import "./Sidebar.scss";
import Logo from "../../images/Video-logo.jpg";
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

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top">
        <span className="logo">
          <img src={Logo} alt="" width="50" className="logo-image" />
        </span>
      </div>
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon />
            <div>Dashboard</div>
          </li>
          <li>
            <PeopleIcon />
            <div>Users</div>
          </li>
          <li>
            <InventoryIcon />
            <div>Product</div>
          </li>
          <p className="title">Business</p>
          <li>
            <PaymentIcon />
            <div>Payment</div>
          </li>
          <li>
            <AirportShuttleIcon />
            <div>Delivery</div>
          </li>
          <li>
            <ApiIcon />
            <div>Api</div>
          </li>
          <p className="title">Info</p>
          <li>
            <DocumentScannerIcon />
            <div>Documentation</div>
          </li>
          <li>
            <BiotechIcon />
            <div>Bio</div>
          </li>
          <li>
            <NotificationsOffIcon />
            <div>Notification</div>
          </li>

          <li>
            <AssessmentIcon />
            <div>Statistic</div>
          </li>
          <li>
            <SettingsIcon />
            <div>Setting</div>
          </li>
          <p className="title">Users</p>
          <li>
            <AccountCircleIcon />
            <div>Profile</div>
          </li>

          <li>
            <LogoutIcon />
            <div>Logout</div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="mode">Mode</div>
        <div className="mode-wrapper">
          <div className="colorOption">light</div>
          <div className="colorOption">Dark</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;