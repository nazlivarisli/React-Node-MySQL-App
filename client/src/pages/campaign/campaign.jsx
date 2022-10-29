import "./campaign.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CampaignTable from "../../components/table/Table";
import TablePagination from "../../components/table/pagination";


const Campaign = () => {
  return (
   
    <div className="campaign">
    <div className="pageContainer">
      <Navbar/>
      <Sidebar/>  
      <div className="middlePage">
        
          <div className="menu">
            <h1>Campaigns</h1>
            <h3>Subtitle about this section and maybe some help about this page</h3>
              
              <nav>
                <li className="navItem"> Live Unfunded </li>
                <li className="navItem"> Pledged </li>
                <li className="navItem"> Funded </li>
                <li className="navItem"> Withdrawn </li>
                <li className="navItem"> Repaid </li>
                <li className="navItem"> Closed </li>
                
              </nav>
              <hr></hr>
              <CampaignTable/>
              <TablePagination className="pagination"/>
            </div>
            
              
            
          
      </div>
    </div>
  </div>
     
        
      );
    };



export default Campaign;