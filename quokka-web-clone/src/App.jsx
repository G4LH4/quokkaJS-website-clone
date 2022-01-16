import React from "react";
import "./App.css";

import Header from "./js/Header";
import MainContent from "./js/MainContent";
import Info from "./js/Info";
import Examples from "./js/Examples";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Info />
      <Examples />
    </div>
  );
}

export default App;
