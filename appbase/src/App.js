import React from "react";
import "./App.css";
import Clock from "./components/clock";
import NotchClock from "./components/notchClock";

const App = () => {
  return (
    <div>
      <h1> App 1: </h1>
      <h1> The current time is: </h1>
      <h2> {new Date().toLocaleTimeString()} </h2>
      <h1>Clock:</h1>
      <h2>
        <Clock />
      </h2>
      <h1>NotchClock:</h1>
      <h2>
        <NotchClock />
      </h2>
    </div>
  );
};

export default App;
