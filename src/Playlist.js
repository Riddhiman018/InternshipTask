import React, { useEffect, useState } from "react";
import AddContent from "./components/AddContent";
import AddDisplay from "./components/AddDisplay";
import Header from "./components/Header";
import qs from "qs";
import axios from "axios";

const Playlist = () => {
  const a = [1, 2, 3, 4, 5, 6, 55];
  const user = localStorage.getItem("authUser");
  const [open, setOpen] = useState(false);
  console.log(user.playlists);
  return (
    <div>
      <Header />
      {open === true && <AddContent setOpen={setOpen} open={open} />}{" "}
      <div className="h-screen flex">
        <main
          className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
		duration-500 ease-in-out"
        >
          <div
            className="sm:px-24 px-3 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out"
          >
            <div className="flex items-center justify-between my-4 select-none">
              <h2 className="text-4xl font-medium capitalize">My Playlist</h2>

              <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-[#00A0FB] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500"
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
                Add Video
              </button>
            </div>

            <div
              className="border dark:border-gray-700 transition duration-500
				ease-in-out"
            ></div>
            <div className="flex flex-col mt-2">
              {user?.playlists?.map((item) => (
                <div className="flex flex-row mt-2 relative">
                  <div
                    className="flex w-full items-center justify-between bg-white
         dark:bg-gray-800 
"
                  >
                    <div className="flex">
                      <img
                        className="h-40 w-40 object-cover"
                        src="data:image/jpeg;base64,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"
                        alt="infamous"
                      />

                      <div className="flex flex-row m-auto flex-wrap justify-evenly w-full">
                        <select className="text-lg mx-4">
                          <option>Beta Testing</option>
                        </select>
                        <button
                          type="button"
                          className="py-2.5 px-5 mx-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Screens
                        </button>
                        <button
                          type="button"
                          className="py-2.5 px-5 ml-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Widgets
                        </button>
                        <button
                          type="button"
                          className="py-2.5 px-5 ml-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Total Time
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Playlist;
