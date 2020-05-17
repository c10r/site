import React from "react";
import Name from "./Name.js";
import Social from "./Social.js";
import Profile from "./Profile.js";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Social />
      <Name />
      <Profile />
    </div>
  );
}

export default App;
