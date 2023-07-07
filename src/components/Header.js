import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnLabel === "Login"
                ? setBtnLabel("Logout")
                : setBtnLabel("Login");
            }}
          >
            {btnLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
