import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="Food Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
