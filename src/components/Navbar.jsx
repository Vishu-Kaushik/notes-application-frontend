import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { LuFileSearch2 } from "react-icons/lu";
import { FaFileUpload } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header className="flex h-20 items-center justify-center border border-black">
        <div className="flex w-full max-w-[1550px] items-center justify-between border border-green-500 lg:mx-5">
          {/* image */}
          <div className="flex h-[76px] w-24 items-center overflow-hidden border border-red-300">
            <img
              src={logo}
              alt="logo"
              className="mb-2 ml-2 mt-2 h-16 rounded-2xl"
            />
          </div>
          {/* Links */}
          <div className="flex items-center justify-center gap-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/login">
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>

            <Link to="/login">
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link> */}
            <Link to="/search" className="text-xl">
              <LuFileSearch2 />
            </Link>
            <Link to="/upload" className="text-xl">
              <FaFileUpload />
            </Link>
            <Link to="/profile">
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Profile
              </button>
            </Link>
            <Link to="/logout">
              <button
                type="button"
                class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
            </Link>
          </div>
          {/* <ul className="flex items-center justify-center gap-4">
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/about">About</Link>
            </li>
            <li className="font-semibold">
              <Link to="/login">
                <button
                  type="button"
                  class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </Link>
            </li>
            <li className="font-semibold">
              <Link to="/signup">
                <button
                  type="button"
                  class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Signup
                </button>
              </Link>
            </li>
          </ul> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;