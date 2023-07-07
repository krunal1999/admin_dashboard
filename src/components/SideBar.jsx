import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/">
            <span className="logo">Admin</span>
          </Link>
        </div>

        <hr />
        <div className="center">
          <ul className="">
            <p className="title">Main</p>
            <li>
              <Link to="/">
                <DashboardIcon className="icon" />
                <span>DashBoard</span>
              </Link>
            </li>

            <li>
              <Link to="/users">
                <AccountCircleIcon className="icon" />
                <span>user</span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <Inventory2OutlinedIcon className="icon" />
                <span>Product</span>
              </Link>
            </li>
            <li>
              <ListAltIcon className="icon" />
              <span>order</span>
            </li>
            <p className="title">Other</p>
            <li>
              <ListAltIcon className="icon" />
              <span>Notification</span>
            </li>

            <li>
              <ListAltIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <ListAltIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">Extra</p>
            <li>
              <ListAltIcon className="icon" />
              <span>Profie</span>
            </li>
            <li>
              <ListAltIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <dic className="bottom">color option</dic>
      </div>
    </>
  );
};

export default SideBar;
