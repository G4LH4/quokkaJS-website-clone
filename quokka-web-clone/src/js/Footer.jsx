import React from "react";

const Footer = () => {
  return (
    <footer className="pb-10 bg-footer">
      <div
        id="container"
        className="flex w-4/6 pt-20 pb-10 mx-auto text-white border-b-2 "
      >
        <h1 className="text-4xl">Galha</h1>

        <ColSection
          title={"Company"}
          content={"About us"}
          content2={"Blog"}
          content3={"Newsletter"}
        />
        <ColSection
          title={"Products"}
          content={"Wallaby.js"}
          content2={"Quokka.js"}
          content3={"Dingo"}
        />
        <ColSection
          title={"Documentation"}
          content={"Getting Started"}
          content2={"Babel / TypeScript"}
          content3={"Configuration"}
        />
        <ColSection
          title={"Support"}
          content={"Contact Us"}
          content2={"Problems"}
          content3={"Manage License"}
        />
      </div>

      <div className="flex flex-row justify-between w-4/6 mx-auto mt-10 text-white">
        <a href="#" className="hover:text-green-600">
          Privacy Policy
        </a>
        <h2>Copyright © 2022 Wallaby Pty Ltd</h2>
      </div>
    </footer>
  );
};

const ColSection = ({ title, content, content2, content3 }) => {
  return (
    <div className="flex flex-col mx-auto text-xl text-left ml-46">
      <h2 className="text-gray-400">{title}</h2>
      <a href="#" className="mt-7 hover:text-green-600">
        {content}
      </a>
      <a href="#" className="mt-7 hover:text-green-600">
        {content2}
      </a>
      <a href="#" className="mt-7 hover:text-green-600">
        {content3}
      </a>
    </div>
  );
};

export default Footer;
