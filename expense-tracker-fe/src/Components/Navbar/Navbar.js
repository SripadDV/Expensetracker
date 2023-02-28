import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Header from "./Header";
import Profile from "./Profile";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Header />
      <Profile />
    </div>
  );
}

export default Navbar;
