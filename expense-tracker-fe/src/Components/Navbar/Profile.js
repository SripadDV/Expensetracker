import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="/Resource/Images/profile.jpg"
        style={{
          width: "70px",
          height: "100%",
          borderRadius: "50%",
          justifyContent: "space-around",
        }}
      ></img>
    </div>
  );
};

export default Profile;
