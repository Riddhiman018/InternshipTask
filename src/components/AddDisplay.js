import React from "react";

const AddDisplay = () => {
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-lg  relative mx-auto my-auto shadow-lg bg-white ">
        <div className="">
          <div className="flex flex-row justify-between p-6 bg-black text-white border-b border-gray-200 ">
            <p className="font-semibold text-white">Add a Display</p>
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
          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <p className="mb-2 font-semibold text-left text-gray-700">
              Screen Code
            </p>
            <input className="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm" />
            <p className="mb-2 font-semibold text-left text-gray-700">
              Screen Name
            </p>
            <input className="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm" />
            <p className="mb-2 font-semibold text-left text-gray-700">
              Time Zone
            </p>
            <input className="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm" />
          </div>
          <div className="flex flex-row items-center justify-start p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p className="px-8 py-2 font-semibold border mx-4 rounded border-black text-gray-600">
              Cancel
            </p>
            <p className="px-8 py-2 font-semibold border mx-4 rounded bg-black border-black text-white">
              Add
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDisplay;
