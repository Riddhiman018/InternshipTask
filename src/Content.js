import React from "react";
import Header from "./components/Header";

const Content = () => {
  const a = [1, 2, 3];
  return (
    <div>
      <Header />
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
              <div className="flex flex-row justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-[#00A0FB] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
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
                <button
                  type="button"
                  className="inline-flex mx-2 items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-gray-800 transition-all duration-200 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Manage Content
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between my-4 select-none">
              <h2 className="text-xl text-[#7E7E7E] capitalize">
                Show Content :
                <button
                  type="button"
                  className="inline-flex ml-4 items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-[#00A0FB] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Campaign mode
                </button>
                <button
                  type="button"
                  className="inline-flex ml-2 items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-[#00A0FB] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  MyCampaign mode
                </button>
                <button
                  type="button"
                  className="inline-flex ml-2 items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-gray-800 transition-all duration-200 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Archived
                </button>
              </h2>
              <div>
                <h2 className="text-lg text-[#7E7E7E] capitalize">
                  Sort by
                  <button
                    type="button"
                    className="inline-flex ml-4 items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-gray-800 transition-all duration-200 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Newest First
                  </button>
                </h2>
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
                    ))}
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

export default Content;
