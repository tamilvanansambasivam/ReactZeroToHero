import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Heading");

// JSX => Babel transpile it into React.CreateElement => object => HTMLElement (render)
const jsxheading = <h1 id="heading">Heading</h1>;
const AnotherComponent = () => (
  <>
    <h1>This is another component</h1>
  </>
);

// When you have a React component nested inside another React component, it is referred to as "component composition".

const HeadingComponent = () => {
  return (
    <div>
      <h1>Heading Component</h1>
      <AnotherComponent />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <HeadingComponent />
);
