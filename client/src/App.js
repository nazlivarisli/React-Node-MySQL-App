/*import React, {useState} from "react";
import Axios from "axios";
//import "./App.css";
import AppStyle from "./styles.css";
import {Link } from "react-router-dom"; //added
*/

import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/login";
import AdminPanel from "./pages/adminPanel/adminPanel";
import Campaign from './pages/campaign/campaign';


function App() {
  return (
    <div className="App">
     
      <Routes>

        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/adminPanel" element={<AdminPanel/>}/>
        <Route exact path="/adminPanel/campaign" element={<Campaign/>}/>

      </Routes>
    </div>
  );
}

export default App;