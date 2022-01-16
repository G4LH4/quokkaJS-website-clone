import React from "react";

import tweet1 from "../img/tweet1.jpg";
import tweet2 from "../img/tweet2.jpg";

const Tweets = () => {
  return (
    <div id="tweets" className="bg-white">
      <div id="container" className="w-4/6 pt-20 pb-10 mx-auto">
        <h1 className="text-3xl text-gray-500">
          400,000+ individual users and companies all over the world have
          increased their productivity and output by using Quokka.js.
        </h1>

        <div id="images" className="flex mt-28">
          <div id="tweet1" className="flex flex-row">
            <img src={tweet1} className="border h-3/5" />
          </div>

          <div id="tweet2" className="flex flex-row pb-10 ml-96">
            <img src={tweet2} className="ml-64 border" />
          </div>
        </div>

        <a href="#" className="text-3xl text-blue-400">
          Show more happy users
        </a>
      </div>
    </div>
  );
};

export default Tweets;
