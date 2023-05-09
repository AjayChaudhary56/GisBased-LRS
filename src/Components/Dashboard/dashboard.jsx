import React from "react";
import p1 from "./img/p1.jpg";
import p2 from "./img/p2.jpg";
import profile from "./img/profile.jpg";
import { Link } from "react-router-dom";
// import EditProfile from "./editProfile";
import "./dashboard.css";
const Dashboard = (props) => {
  return (
    <div className="dashboard-mainContent">
      <div className="dashboard1">
        <div className="dashboard-image">
          <img src={profile} alt="profile pic" />
        </div>
        <div className="dashboard-details">
            <h1>Profile Details</h1>
            <br></br>
            <br></br>
            <br></br>
          <h3>Name: {JSON.parse(localStorage.getItem("firstname") )+ " " + JSON.parse(localStorage.getItem("lastname"))}</h3>
          <h3>Gmail Id: {JSON.parse(localStorage.getItem("email"))}</h3>
          <h3>Phone Number: {JSON.parse(localStorage.getItem("phonenumber"))}</h3>
          <h3>Address: {JSON.parse(localStorage.getItem("address"))}</h3>
          <h3>Citizenship Id: {JSON.parse(localStorage.getItem("citizenship"))}</h3>
          <button><Link to="/dashboardEditProfile">Edit Profile</Link></button>
        </div>
      </div>
      <div className="dashboard2">
        <div className="dashboard2-left">
          <label><h2>Citizenship front</h2></label><br></br>
          <img src={p1} alt="Citizenship front " />
        </div>
        <div className="dashboard2-right">
          {" "}
          <label><h2>Citizenship back</h2> </label><br></br>
          <img src={p2} alt="Citizenship back " />
        </div>
      </div>
      <div className="dashboard3">
          
        <button><Link to='/landRequested'>Information on land Requested to buy </Link></button>
        <button><Link to='/landAccepted'>Information on land accepted to buy</Link></button>
        <button><Link to='/landRejected'>Information on land rejected to buy</Link></button>
      </div>
    </div>
  );
};

export default Dashboard;
