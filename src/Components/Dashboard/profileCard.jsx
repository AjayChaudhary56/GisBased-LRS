import React from "react";
import profile from "./img/profile1.jpg";
import "./dashboard.css";
const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <img src={profile} alt="profile" />
      <div className="desc-23">
        <p>
          
          <span className="bold">Name:</span>
          {props.name}
        </p>

        <p>
         
          <span className="bold">Gmail:</span> {props.gmail}
        </p>
        <p>
        
          <span className="bold">Phone Number:</span> {props.phno}
        </p>
        <p>
         
          <span className="bold">Address:</span> {props.address}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
