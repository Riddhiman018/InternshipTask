import React from "react";

const Login = () => {
  return (
    <div>
      <div class="h-screen flex flex-col md:flex-row">
        <div class="flex w-full md:w-1/2  md:p-0 py-24   bg-gradient-to-tr from-gray-800 to-black i justify-around items-center">
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">Andi Lane</h1>
            <p class=" max-w-sm text-white mt-1">
              We have been using untitled to kick start every day ew project and
              cant't imagine working without it{" "}
            </p>
            <button
              type="submit"
              class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="flex w-full md:w-1/2 md:p-0 py-24 justify-center items-center bg-white">
          <form className="w-1/2">
            <div>
              <h1 class="text-2xl font-bold">Welcome back</h1>

              <span class="text-sm text-gray-900">
                Welcome back! Please enter your details
              </span>
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="Please enter your email">
                Email
              </label>
              <input
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="email"
                name="password"
                placeholder="email"
              />
            </div>
            <div class="mt-5">
              <label class="block text-md mb-2" for="password">
                Password
              </label>
              <input
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>

            <div class="mt-2 flex justify-between">
              <div>
                <input
                  class="cursor-pointer"
                  type="checkbox"
                  name="rememberme"
                />
                <span class="ml-2 text-sm">Remember Me</span>
              </div>
              <span class="text-sm font-bold text-black hover:underline cursor-pointer">
                Forgot password
              </span>
            </div>
            <div class="">
              <button class="mt-4 mb-3 w-full bg-black hover:bg-black text-white py-2 rounded-md transition duration-100">
                Sign in{" "}
              </button>{" "}
              <button class="flex flex-row justify-center font-bold items-center mt-4 mb-3 w-full bg-white hover:bg-white border text-black py-2 rounded-md transition duration-100">
                <img
                  class="mr-2 h-5 cursor-pointer"
                  src="https://i.imgur.com/arC60SB.png"
                  alt=""
                />
                Sign-in with google
              </button>
            </div>
            <span class="text-sm text-center m-auto w-full text-gray-400">
              Don't have an account?{" "}
              <span class="text-sm font-bold text-black hover:underline cursor-pointer">
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
