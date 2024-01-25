import { useState } from "react";
import { BRAND_LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const handleLoginClick = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={BRAND_LOGO_URL} alt="Brand Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <i className="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i>
          </li>
          <li>
            <button onClick={handleLoginClick}>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
