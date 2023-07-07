import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltIcon from '@mui/icons-material/ListAlt';

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="logo">Admin</span>
        
        </div>
        <hr/>
        <div className="center">
          <ul className="">
                <p className="title">Main</p>
            <li>
                <DashboardIcon className="icon" />
              <span>DashBoard</span>
            </li>

            <li>
                <AccountCircleIcon className="icon" />
              <span>user</span>
            </li>
            <li>
                <Inventory2OutlinedIcon className="icon" />
              <span>Product</span>
            </li>
            <li>
                <ListAltIcon className="icon" />
              <span>order</span>
            </li>
            <p className="title">Other</p>
            <li>
                <ListAltIcon  className="icon"/>
              <span>Notification</span>
            </li>

            <li>
                <ListAltIcon  className="icon"/>
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
