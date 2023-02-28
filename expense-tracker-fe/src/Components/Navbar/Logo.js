import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="Resource/Images/logo.png"
          style={{
            width: "70px",
            height: "100%",
            borderRadius: "50%",
            justifyContent: "space-around",
          }}
        />
      </Link>
    </div>
  );
};
export default Logo;
