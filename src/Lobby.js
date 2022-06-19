import React from "react";
import AddContent from "./components/AddContent";
import AddDisplay from "./components/AddDisplay";
import Header from "./components/Header";

const Lobby = () => {
  const a = [1, 2, 3];
  return (
    <div>
      <Header />
      {/* <AddDisplay /> */}
      <div className="h-screen flex">
        <main className="flex-1 bg-[#E5E5E5] dark:bg-gray-900 overflow-y-auto transition duration-500 ease-in-out">
          <div
            className="sm:px-24 px-3 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out"
          >
            <div className="flex items-center justify-between my-4 select-none">
              <h2 className="text-4xl font-medium capitalize">
                Screen-1 Lobby
              </h2>

              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-[#00A0FB] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Playlist
              </button>
            </div>
            <div className="flex items-center justify-between my-4 select-none">
              <h2 className="text-2xl text-[#7E7E7E]  font-medium capitalize">
                Beta testing{" "}
                <button
                  type="button"
                  className="py-2.5 border px-5 ml-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Total Time
                </button>
              </h2>
              <div>
                <button
                  type="button"
                  className="py-2.5 px-5 ml-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Start{" "}
                </button>{" "}
                <button
                  type="button"
                  className="py-2.5 px-5 ml-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  End{" "}
                </button>
              </div>
            </div>
            <div
              className="border dark:border-gray-700 transition duration-500
				ease-in-out"
            ></div>
            <div className="flex flex-col mt-2 bg-white border border-[#B0B0B0]">
              <section className="p-3 bg-[#F3F4F6]">
                <div className="container">
                  <div className="flex flex-wrap m-4">
                    {a.map((item) => (
                      <div className="w-full md:w-1/4 px-4">
                        <div className="bg-[#F7F7F7] border border-[#B0B0B0] rounded-lg overflow-hidden mb-2">
                          <img
                            src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg"
                            alt="image"
                            className="w-full h-44"
                          />
                          <div className="text-center">
                            <h3>
                              <a
                                href="javascript:void(0)"
                                className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mt-4
                          block
                          hover:text-primary
                          "
                              >
                                Food burger
                              </a>
                            </h3>
                            <p className="text-base flex flex-row justify-evenly mt-4 text-[#7E7E7E] leading-relaxed mb-7">
                              <span> 00:10:30</span> <span> Image</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}{" "}
                    <div className="w-full md:w-1/4 px-4">
                      <div className="bg-white grid place-items-center rounded-lg h-full overflow-hidden mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-32 w-32 mx-auto text-[#F5C960]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lobby;
