import React from "react";
import "./App.scss";

export function App() {
  return (
    <div>
      <h1> The current time is: </h1>
      <h2> {new Date().toLocaleTimeString()} </h2>
    </div>
  );
}
