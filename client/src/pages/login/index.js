import React, {useState} from "react";
import Axios from "axios";
import { useNavigate} from "react-router-dom";
import "./styles.css";


function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [LoginStatus,setLoginStatus] = useState(true);
    
  let navigate = useNavigate();
    
  const login = () => {
      
      Axios.post("http://localhost:3080/login", {
            email: email,
            password: password,
        }).then((response) => {
          
         if(!response.data.message){
           
            navigate('/adminPanel/');
          }
          else{
            setLoginStatus(response.data.message);
            console.log({LoginStatus});
          }
          
          }
        );
    };

    return (

   <div className="App">
      <img src="https://media-exp2.licdn.com/dms/image/C4D0BAQEk4_bVc3QEcQ/company-logo_200_200/0/1592240821106?e=2147483647&v=beta&t=I2zU0wTq26uyPt0Nx7lLxkFvwS7PIhth8H400Gl2DXU" alt="logo"></img>
      <div className="login-container">
         <div className="input-container">
            <label> Email address </label>
            <input
               type = "text"
               placeholder="Enter email address"
               onChange={(e) => {setEmail(e.target.value);
            }}
            ></input>
         </div>
         <div className="input-container">
            <label> Password </label>
            <input
               type = "text"
               placeholder="Enter your password"
               onChange={(e) => {setPassword(e.target.value);
            }}
            ></input>
         </div>
         <div className="forgottenPassword">Forgotten Password? </div>
      </div>
      <div className="buttonArea">
         <button className="loginButton" onClick={login}>Login</button>
      </div>
   </div> 

    );
  }


export default Login;