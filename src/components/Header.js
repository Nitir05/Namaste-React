import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const [showUserName, setShowUserName] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg">
      <div>
        <Link to="/">
          <img
            className="w-32 hover:shadow-md"
            src={LOGO_URL}
            alt="Food Logo"
          />
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
          <li className="p-2">
            <Link className="hover:text-orange-400" to="/cart">
              Cart ({cartItems.length})
            </Link>
          </li>
          <button
            className="p-2"
            onClick={() => {
              btnLabel === "Login"
                ? setBtnLabel("Logout")
                : setBtnLabel("Login");
              setShowUserName(!showUserName);
            }}
          >
            {btnLabel}
          </button>
          {showUserName && <li className="p-2 font-bold">{loggedInUser}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
