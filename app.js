const heading2 = React.createElement("h2", { className: "heading" }, "This is heading 2");
const heading = React.createElement("h1", { id: "heading", className: "heading" }, "Namaste React");
const child = React.createElement("div", { id: "child" }, [heading, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
