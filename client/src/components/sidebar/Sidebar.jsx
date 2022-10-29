import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import ForumIcon from '@mui/icons-material/Forum';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    
  <div className="sidebar">
   <div className="center">
      <ul>
         <Link style={{ textDecoration: "none" }}>
         <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
         </li>
         </Link>
         <Link to="/adminPanel/campaign" style={{ textDecoration: "none" }}>
         <li>
            <ListIcon className="icon" />
            <span>Campaigns</span>
         </li>
         </Link>
         <Link style={{ textDecoration: "none" }}>
         <li>
            <PersonIcon className="icon" />
            <span>Users</span>
         </li>
         </Link>
         <li>
            <InsertChartIcon className="icon" />
            <span>Reports</span>
         </li>
         <li>
            <ForumIcon className="icon" />
            <span>Complaints</span>
         </li>
         <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
         </li>
      </ul>
   </div>
  </div>
 
 );
};

export default Sidebar