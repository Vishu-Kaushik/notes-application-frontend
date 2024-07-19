import React from "react";

const Login = () => {
  return (
    <div className="flex h-heightWithoutNavbar w-full items-center justify-center p-5">
      {/* Login Card */}
      <div className="flex w-full max-w-[500px] flex-col gap-4 rounded-xl bg-slate-300 p-5 shadow-2xl">
        <h1 className="p-2 text-xl font-bold">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-center px-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your Email"
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col items-start justify-center px-2">
            <label className="font-medium">Password</label>
            <input
              type="password"
              name=""
              id=""
              className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-blue-400"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <button
          type="button"
          class="m-2 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
        <div className="flex items-center justify-between p-2 text-lg">
          <p>New to Find Notes?</p>
          <p className="font-bold">Create an Account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
