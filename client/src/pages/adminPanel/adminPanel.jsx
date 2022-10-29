import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./adminPanel.scss";
const AdminPanel = () => {
  return (
    <div className="dashboard">
      <div className="dashboardContainer">
        <Navbar/>  
        <div>
          <Sidebar/>
        </div>
      </div>
    </div>
    
  );
};

export default AdminPanel;