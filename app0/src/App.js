import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1> The current time is: </h1>
      <h2> {new Date().toLocaleTimeString()} </h2>
    </div>
  );
};

export default App;
