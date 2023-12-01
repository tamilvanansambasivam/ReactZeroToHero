import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  // Create a child div with an ID of "child" and a nested h1 element with the text "hi im h1"
  React.createElement("h1", { id: "child" }, "hello")
);

//  Create a React root and attach it to the DOM element with the ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

//  Render the previously created React element (heading) within the React root
root.render(heading);
