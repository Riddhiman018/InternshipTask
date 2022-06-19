import React, { useState } from "react";
import axios from "axios";
import qs from 'qs'
import { API_URL_LOGIN } from "../config/config";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  console.log(API_URL_LOGIN);
  const userLogin = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    // formdata.append("username", credentials.email);
    // formdata.append("password", credentials.password);
    console.log(formdata);
    const data1 = {
      'username':credentials.email,
      'password':credentials.password
    }
    // const config = {
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded",
    //   },
    // };
    const options = {
      method: 'POST',
      data: data1,
      url:'http://localhost:4000/login',
    };
    console.log(qs.stringify(data1))
    try {
      const res = await axios(options)
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            localStorage.setItem("authUser", JSON.stringify(res.data));
            console.log("Auth token Saved");
          }
        });
    } catch (err) {
      throw err.response;
    }
  };
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/2  md:p-0 py-24   bg-gradient-to-tr from-gray-800 to-black i justify-around items-center">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Andi Lane
            </h1>
            <p className=" max-w-sm text-white mt-1">
              We have been using untitled to kick start every day ew project and
              cant't imagine working without it
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 md:p-0 py-24 justify-center items-center bg-white">
          <form
            onSubmit={(e) => {
              userLogin(e);
            }}
            className="w-1/2"
          >
            <div>
              <h1 className="text-2xl font-bold">Welcome back</h1>

              <span className="text-sm text-gray-900">
                Welcome back! Please enter your details
              </span>
            </div>
            <div className="my-3 text-left">
              <label
                className="block text-md mb-2"
                htmlFor="Please enter your email"
              >
                Email
              </label>
              <input
                value={credentials.email}
                onChange={(e) => {
                  setCredentials({ ...credentials, email: e.target.value });
                }}
                className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="text"
                name="username"
                placeholder="Email"
              />
            </div>
            <div className="mt-5 text-left">
              <label className="block text-md mb-2" htmlFor="password">
                Password
              </label>
              <input
                value={credentials.password}
                onChange={(e) => {
                  setCredentials({ ...credentials, password: e.target.value });
                }}
                className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            {/* <div className="mt-2 flex justify-between">
              <div>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="rememberme"
                />
                <span className="ml-2 text-sm">Remember Me</span>
              </div>
              <span className="text-sm font-bold text-black hover:underline cursor-pointer">
                Forgot password
              </span>
            </div> */}
            <div className="">
              <button
                type="submit"
                className="mt-4 mb-3 w-full bg-black hover:bg-black text-white py-2 rounded-md transition duration-100"
              >
                Sign in
              </button>
              <button className="flex flex-row justify-center font-bold items-center mt-4 mb-3 w-full bg-white hover:bg-white border text-black py-2 rounded-md transition duration-100">
                <img
                  className="mr-2 h-5 cursor-pointer"
                  src="https://i.imgur.com/arC60SB.png"
                  alt=""
                />
                Sign-in with google
              </button>
            </div>
            <span className="text-sm text-center m-auto w-full text-gray-400">
              Don't have an account?
              <span className="text-sm font-bold text-black hover:underline cursor-pointer">
                Sign up for free
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
