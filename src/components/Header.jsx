import { useState, useEffect } from "react";
import { BRAND_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  /**
   * useEffect is called everytime an component is rendered if we do not give it a dependency array
   * if empty dependecy array is passed useEffect will get called only once
   * if We past any variable inside dependency array then it gets called everytime that variable changes
   */
  useEffect(() => {}, []);

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
          <li>
            <Link to="/">Home</Link>{" "}
            {/** <Link> is a component which is given by react-router-dome to heps us in routing without refreshing the page */}
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
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
