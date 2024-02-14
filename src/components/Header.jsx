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
        <div className="m-0 p-0 flex justify-between border border-solid border-[#eeeeee] shadow-md items-center ">
            <div>
                <Link to="/">
                    <img
                        className="w-32"
                        src={BRAND_LOGO_URL}
                        alt="Brand Logo"
                    />
                </Link>
            </div>
            <div>
                <ul className="flex text-lg">
                    <li className="p-2">
                        <Link
                            to="/"
                            className="text-orange-400 hover:text-orange-600"
                        >
                            Home
                        </Link>{" "}
                        {/** <Link> is a component which is given by react-router-dome to heps us in routing without refreshing the page */}
                    </li>
                    <li className="p-2">
                        <Link
                            to="about"
                            className="text-orange-400 hover:text-orange-600"
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link
                            to="contact"
                            className="text-orange-400 hover:text-orange-600"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link
                            to="/grocery"
                            className="text-orange-400 hover:text-orange-600"
                        >
                            Grocery
                        </Link>
                    </li>
                    <li className="p-2">
                        <i
                            className="fa fa-shopping-cart"
                            style={{ fontSize: "24px" }}
                        ></i>
                    </li>
                    <li className="p-2">
                        <button
                            onClick={handleLoginClick}
                            className="text-orange-400 hover:text-orange-600"
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
