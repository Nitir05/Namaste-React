//create a element which you want insied DIV in our case it is H1
const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
]);
//create a React root element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the created h1 element using root
root.render(parentDiv);
