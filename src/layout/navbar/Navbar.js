import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">mockVEN</div>
      <div className="navbar-menu">
        <div className="navbar-menu-items">Solutions</div>
        <div className="navbar-menu-items">Experiences</div>
        <div className="navbar-menu-items">Products</div>
        <div className="navbar-menu-items">Company</div>
        <div className="navbar-menu-items">Blog</div>
        <div className="navbar-menu-items">Careers</div>
      </div>
      <div className="navbar-search">Search</div>
    </div>
  );
};

export default Navbar;
