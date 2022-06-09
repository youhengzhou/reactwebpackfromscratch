import React, { Suspense } from "react";
import "./App.css";
const RemoteApp = React.lazy(() => import("app1/App"));

const App = () => {
  return (
    <div>
      <h1> App 0: </h1>
      <h1> The current time is: </h1>
      <h2> {new Date().toLocaleTimeString()} </h2>
      <h1> Here's the second app: </h1>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
