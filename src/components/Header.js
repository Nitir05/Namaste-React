import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg">
      <div>
        <Link to="/">
          <img className="w-32" src={LOGO_URL} alt="Food Logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center mr-4">
          <li className="p-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-2">
            <Link className="hover:text-orange-400" to="/about">
              About
            </Link>
          </li>
          <li className="p-2">
            <Link className="hover:text-orange-400" to="/contact">
              Contact
            </Link>
          </li>
          <li className="p-2">
            <Link className="hover:text-orange-400" to="/grocery">
              Grocery
            </Link>
          </li>
          <button
            className="p-2"
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
