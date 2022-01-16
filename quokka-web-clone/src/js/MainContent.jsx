import React from "react";
import mainVideo from "../img/main-video.gif";

const MainContent = () => {
  return (
    <div>
      <h1 className="mt-48 text-5xl text-white">
        THE JAVASCRIPT PLAYGROUND IN YOUR EDITOR
      </h1>
      <img src={mainVideo} className="w-6/12 mx-auto mt-20" />
    </div>
  );
};

export default MainContent;
