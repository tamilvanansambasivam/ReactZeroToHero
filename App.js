import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
