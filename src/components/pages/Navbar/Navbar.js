import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../../assets/asset";
import { Link } from "react-router-dom";

const Navbar = ({setshowLogin}) => {
  const [menu, setmenu] = useState("");

  


  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo-container">
            <Link to="/" ><img src={assets.f1} alt="" className="logo" /></Link>
          <h1 className="hd">DesiDash</h1>
          </div>


          <ul className="navbar-menu">
          <Link
            to="/"
            className={menu === "Home" ? "active" : ""}
            onClick={() => setmenu("Home")}
          >
            Home
          </Link>
          <a
            href="#explore_menu"
            className={menu === "Menu" ? "active" : ""}
            onClick={() => setmenu("menu")}
          >
            Menu
          </a>
          <a
            href="#app_download"
            className={menu === "Mobile Application" ? "active" : ""}
            onClick={() => setmenu("mobileAppication")}
          >
            Mobile Application
          </a>
          <a
            href="#footer"
            className={menu === "Contact us" ? "active" : ""}
            onClick={() => setmenu("Contact us")}
          >
            Contact us
          </a>
        </ul>

        <div className="navbar-right ">
          <img src={assets.f3} alt="search-icon" />
          <div className="navbar-search-icon mx-3 ">
            <Link to="/cart"><img src={assets.f4} alt="cart" className="cart-icon" /></Link>
            <button className="btn btn-warning " onClick={()=>setshowLogin(true)}>Sign In</button>
          </div>
        </div>
          
        </div>


        
        
       
      </div>
    </>
  );
};
export default Navbar;
