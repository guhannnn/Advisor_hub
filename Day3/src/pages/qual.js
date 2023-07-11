import React from "react";
import './register.css';
import { Link } from "react-router-dom";
function Profile() {
      return (
        <div className="login-page">
        <div className="form">
        
          <form className="login-form">
            <input type="select" placeholder="Type" />
            <input type="text" placeholder="Qualifiaction" />
            <input type="text" placeholder="Language" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Experience" />
           
            <button><Link to="/"></Link>Register</button>
           
          </form>
        </div>
      </div>
      );
    }
  
    export default Profile;