import React from "react";

const AddDisplay = () => {
  return (
    <div
      class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div class="w-full max-w-lg  relative mx-auto my-auto shadow-lg bg-white ">
        <div class="">
          <div class="flex flex-row justify-between p-6 bg-black text-white border-b border-gray-200 ">
            <p class="font-semibold text-white">Add a Display</p>
            <svg
              class="w-6 h-6"
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
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            <p class="mb-2 font-semibold text-left text-gray-700">
              Screen Code
            </p>
            <input class="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm" />
            <p class="mb-2 font-semibold text-left text-gray-700">
              Screen Name
            </p>
            <input class="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm" />
            <p class="mb-2 font-semibold text-left text-gray-700">Time Zone</p>
            <input class="p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm" />
          </div>
          <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p class="px-4 py-2 font-semibold border rounded border-black text-gray-600">
              Cancel
            </p>
            <button class="px-4 py-2 text-white font-semibold bg-black rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDisplay;
