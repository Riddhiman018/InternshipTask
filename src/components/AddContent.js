import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
const AddContent = () => {
  const [image, setimage] = useState([]);
  const saveProfile = () => {
    const formData = new FormData();
    // formData.set("name", "profileImage");
    formData.set("postedvideos", image);

    axios
      .post(`http://localhost:2000/addVideos`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Image Changed !");
      })
      .catch((err) => {
        toast.error("Error in Updating Profile Image!");
      });
  };

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
              <p className="font-semibold text-white">Add Content</p>
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
            <div className="flex flex-row">
              <p className="w-1/2 p-4 font-normal border rounded border-gray-50 text-gray-300">
                Upload Files
              </p>
              <p className="p-4 w-1/2 font-normal border rounded border-gray-50 text-gray-300">
                Upload Web content
              </p>
            </div>
            <div className="w-3/4 mx-auto my-5 border border-dashed p-4 flex flex-col h-44 text-[#7E7E7E] ">
              <span className="text-2xl"> Drag and drop your files</span>
              <span className="text-xl mt-5"> or</span>
              <p>
                Select files
                <input
                  onChange={(e) => setimage(e.target.files[0])}
                  type="file"
                  className="px-8 py-2 font-semibold border rounded w-fit m-auto border-[#F5CB57] text-[#F5CB57]"
                />
              </p>
            </div>
            <div className="flex flex-row items-center justify-start p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <p className="px-8 py-2 font-semibold border mx-4 rounded border-black text-gray-600">
                Cancel
              </p>
              <p
                onClick={saveProfile}
                className="px-8 py-2 font-semibold border mx-4 rounded bg-black border-black text-white"
              >
                Add
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
