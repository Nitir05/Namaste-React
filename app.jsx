import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1 className="heading"> Namaster React using JSX 🚀</h1>;
const Title = () => (
  <div id="container">
    <Heading />
    <h2 style={{ textAlign: "center" }}>This is Title</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
