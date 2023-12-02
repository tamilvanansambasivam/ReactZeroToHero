import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Heading");

// JSX => Babel transpile it into React.CreateElement => object => HTMLElement (render)
const jsxheading = <h1 id="heading">Heading</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(jsxheading);
