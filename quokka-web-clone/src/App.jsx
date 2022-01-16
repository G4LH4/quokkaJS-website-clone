import React from "react";
import "./App.css";

import Header from "./js/Header";
import MainContent from "./js/MainContent";
import Info from "./js/Info";
import Examples from "./js/Examples";
import Tweets from "./js/Tweets";
import Footer from "./js/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Info />
      <Examples />
      <Tweets />
      <Footer />
    </div>
  );
}

export default App;
