import React from "react";

const CreatePlaylist = () => {
  return (
    <div>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-gray-20 opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg  relative mx-auto my-auto shadow-lg bg-white ">
          <div className="">
            <div className="flex flex-row justify-between p-8 bg-black text-white border-b border-gray-200 ">
              <p className="font-semibold text-white">CREATE PLAYLIST</p>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col px-12 py-5 bg-gray-50">
              <p className="mb-2 font-light text-sm text-left text-gray-500">
                Create playlists, change order and duration of items, add
                triggers and widgets to your playlists
              </p>
              <input
                placeholder="Enter playlist Name"
                className="px-4 py-2 mb-5 bg-white border border-gray-200 rounded shadow-sm"
              />
            </div>

            <div className="flex flex-row items-center justify-start p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <p className="px-8 py-2 font-semibold border mx-4 rounded bg-black border-black text-white">
                Add
              </p>{" "}
              <p className="px-8 py-2 font-semibold border mx-4 rounded border-black text-gray-600">
                Cancel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
