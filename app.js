import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/7.jpg";

//Header component using JSX
const Heading = () => {
  return (
    <div className="heading">
      <div className="logo">
        <img src={logo} alt="this is logo" height={100} />
      </div>
      <div className="searchBar">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Please enter text here..."
        />
      </div>
      <div className="userIcon">
        <img src={logo} alt="this is user icon" height={100} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
