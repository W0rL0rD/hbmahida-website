import React from "react";
import './App.css';
import MainContent from "./components/Main.js";
import Links from "./components/Links.js";


function App() {
  return (
    <container className="page">
      <div className="profile--box" />
      <MainContent />
      <Links />
    </container>
  );
}

export default App;
