import React from "react";

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
            <div
              className=" inline-flex dark:bg-white border-gray-300 text-gray-500 mx-2 items-center justify-center px-4 py-2 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-black hover:text-white focus:bg-gray-200"
              role="button"
            >
              Jane
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </nav>
        </div>
        <hr />
      </header>
    </div>
  );
};

export default Header;
