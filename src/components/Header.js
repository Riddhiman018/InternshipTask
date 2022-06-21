import React from "react";
import HeaderMenu from "./Menu";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl dark:text-white">Everidoor</span>
          </a>
          <nav className="flex w-3/4 flex-wrap items-center text-base justify-evenly">
            <a className="mr-5 hover:text-gray-900">Advertiser</a>
            <a className="mr-5 hover:text-gray-900">Display Provider</a>
            <a className="mr-5 text-[#D02525] font-extrabold hover:text-gray-900">
              INR 17000
            </a>
            <a className="mr-5 hover:text-gray-900">Welcome</a>
            <HeaderMenu />
          </nav>
        </div>
        <hr />
      </header>
    </div>
  );
};

export default Header;
