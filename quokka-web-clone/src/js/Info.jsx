import React from "react";
import experimentsIMG from "../img/experiments.jpg";
import computerIMG from "../img/computer.jpg";
import handIMG from "../img/hand.jpg";
import ninjaIMG from "../img/ninja.jpg";

const Info = () => {
  return (
    <div className="w-8/12 mx-auto mt-10 font-openSans">
      <h1 className="mt-20 text-3xl tracking-wide text-white">
        Quokka.js runs JavaScript and TypeScript with instant feedback. Runtime
        values are updated and displayed in your editor next to your code, as
        you type.
      </h1>

      <div id="container" className="flex flex-row mb-20 text-center text-1xl">
        <section className="w-4/12 mx-auto tracking-wide">
          <Card
            img={experimentsIMG}
            content={
              "Quokka makes exploring, learning, and testing JavaScript / TypeScript blazingly fast. By default no config is required, simply open a new Quokka file and start experimenting. Focus on writing code instead of writing bespoke config files just to try a simple idea or learn a new language feature."
            }
          />

          <Card
            img={handIMG}
            content={
              "Quokka makes exploring, learning, and testing JavaScript / TypeScript blazingly fast. By default no config is required, simply open a new Quokka file and start experimenting. Focus on writing code instead of writing bespoke config files just to try a simple idea or learn a new language feature."
            }
          />
        </section>

        <section className="w-4/12 mx-auto tracking-wide">
          <Card
            img={computerIMG}
            content={
              "Quokka makes exploring, learning, and testing JavaScript / TypeScript blazingly fast. By default no config is required, simply open a new Quokka file and start experimenting. Focus on writing code instead of writing bespoke config files just to try a simple idea or learn a new language feature."
            }
          />

          <Card
            img={ninjaIMG}
            content={
              "Quokka makes exploring, learning, and testing JavaScript / TypeScript blazingly fast. By default no config is required, simply open a new Quokka file and start experimenting. Focus on writing code instead of writing bespoke config files just to try a simple idea or learn a new language feature."
            }
          />
        </section>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ img, content }) => {
  return (
    <div className="mt-36" id="card">
      <img src={img} className={"mx-auto"} />
      <h3 className="mt-10 text-2xl text-white">{content}</h3>
    </div>
  );
};

export default Info;
