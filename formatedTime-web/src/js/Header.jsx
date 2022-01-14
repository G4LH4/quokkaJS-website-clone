import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 p-3 bg-backgroundBlack">
      <div className="mx-auto text-white max-w-9xl">
        <div className="flex items-center justify-around mt-10 text-lg">
          <h1 className="text-5xl">Galha</h1>

          {/* Replace them whit Links */}

          <ul className="flex text-2xl">
            <DefaultLi content={<a href="#">Install</a>} />
            <DefaultLi content={<a href="#">What is new</a>} />
            <DefaultLi content={<a href="#">Docs</a>} />
            <DefaultLi content={<a href="#">Support</a>} />
            <DefaultLi content={<a href="#">Contact</a>} />

            <li className="ml-10 hover:text-orange-600">
              <a
                href="#"
                className="p-3 text-orange-600 transition border border-orange-600 rounded-md hover:text-white hover:bg-orange-600 "
              >
                PRO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// eslint-disable-next-line react/prop-types
const DefaultLi = ({ content }) => {
  return <li className="ml-10 hover:text-orange-600">{content}</li>;
};

export default Header;
