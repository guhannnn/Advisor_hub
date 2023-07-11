import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {


    if(username && isValidPassword(password))
    {
        navigate('/p')
    }

    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

   
    let isValid = true;

    if (username.trim() === "") {
      
      setUsernameError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
   
      setPasswordError("Password is required");
      isValid = false;
    }
    else if (!isValidPassword(password)) {
      
      setPasswordError("Invalid  format");
      isValid = false;
    }

   
    if (isValid) {
     
      console.log("Form submitted");
    }
  };
  const isValidPassword = (password) => {
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
    return passwordRegex.test(password);
  };
      return (
        <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required onChange={handleUsernameChange}/>
            <input type="password" placeholder="Password" required onChange={handlePasswordChange}/>
            <input type="password" placeholder="Repeat password"required /> 
             <input type="email" placeholder="Email address" required/>
             <input type="number" placeholder="Mobile Number" required/>
            <button onClick={handleSubmit}>Next</button>
            <p className="message">
              Already registered? <Link to="/">Sign In</Link>
              
            </p>
          </form>
         
        </div>
     </div> 
      );
    }
  
    export default Register;