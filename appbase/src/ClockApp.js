import React from "react";
import Clock from "./components/clock";
import NotchClock from "./components/notchClock";

const h1Style = {
  color: "orange",
};

const ClockApp = () => {
  return (
    <div>
      <h1 style={h1Style}> App 1: </h1>
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

export default ClockApp;
