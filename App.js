/* 
<div id="parent">
    <div id="child">
            <h1>Master mind</h1>
    </div>
</div> 
*/

// Create a nested React element with a div as the parent element and an ID of "parent"
const heading = React.createElement(
  "div",
  { id: "parent" },
  // Create a child div with an ID of "child" and a nested h1 element with the text "hi im h1"
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hi im h1")
  )
);

//  Create a React root and attach it to the DOM element with the ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

//  Render the previously created React element (heading) within the React root
root.render(heading);
