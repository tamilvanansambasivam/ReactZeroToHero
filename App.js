import React from "react";
import ReactDOM from "react-dom/client";

// ReactcreateElement => Object => htmlElement (render)

const heading = React.createElement("h1", { className: "heading" }, "Hello");
console.log(heading);

//JSX is html like syntax ( Not HTML inside the JS)
// JSX -> ReactcreateElement => Object => htmlElement (render)
const heading2 = <h1 className="heading">Hello</h1>;
console.log(heading);

ReactDOM.createRoot(document.getElementById("root")).render(heading);
