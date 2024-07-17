import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      <div className="flex w-full items-center justify-center">
        <form className="w-full max-w-[720px] rounded-xl border-2 border-black bg-[#374151] p-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <IoSearch className="ml-2 text-2xl font-semibold text-white" />
            {/* input Field */}
            <input
              type="search"
              placeholder="Search For Notes"
              className="ml-3 w-full bg-[#374151] text-white"
            />
            <button
              type="submit"
              className="right-5 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* Space where Docements will be shown */}
      <div className="mt-5 grid w-full grid-cols-1 gap-5 border-2 border-green-700 sm:grid-cols-2 lg:grid-cols-4">
        {/* <div className="m-4 flex w-[300px] items-center justify-between rounded-xl bg-[#374151] px-4 py-2 text-white">
          <p className="m-2">
            <span className="font-bold">File Name :</span> <span>Resume</span>
          </p>
          <button
            type="button"
            className="right-5 inline-flex items-center rounded-lg bg-blue-700 px-3.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Open File
          </button>
        </div> */}
        {Array(8)
          .fill(true)
          .map((item, i) => (
            <div
              key={i}
              className="m-4 flex w-[300px] items-center justify-between rounded-xl bg-[#374151] px-4 py-2 text-white"
            >
              <p className="m-2">
                <span className="font-bold">File Name :</span>{" "}
                <span>Resume</span>
              </p>
              <button
                type="button"
                className="right-5 inline-flex items-center rounded-lg bg-blue-700 px-3.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Open File
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searchbar;
