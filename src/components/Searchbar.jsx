import axios from "axios";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

  const user = useSelector((state) => state.user.userData);

  const username = user.userName;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const notes = await axios.get("http://localhost:4000/notes/getFiles", {
        params: {
          title: searchQuery,
        },
      });

      if (notes.data.data.length > 0) {
        setSearchResult(notes.data.data);
        setSearchStatus("Found");
      } else {
        setSearchResult([]);
        setSearchStatus("Not-Found");
      }
    } catch (error) {
      console.log("Error Fetching  Notes: ", error);
    }
  };

  const showPDF = async (files) => {
    window.open(`http://localhost:4000/files/${files}`, "_blank", "noreferrer");
  };

  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-4">
      <div className="flex w-full items-center justify-center">
        <form
          className="w-full max-w-[720px] rounded-xl border-2 border-black bg-[#374151] p-2"
          onSubmit={handleSearch}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <IoSearch className="ml-2 text-2xl font-semibold text-white" />
            {/* input Field */}
            <input
              type="search"
              placeholder="Search For Notes"
              className="ml-3 w-full bg-[#374151] text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
      <div className="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        {/* {Array(8)
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
          ))} */}

        {searchStatus === "Found" &&
          searchResult.length > 0 &&
          searchResult.map((notes) => (
            <div
              key={notes._id}
              className="flex w-full max-w-[300px] flex-wrap-reverse items-center justify-between rounded-xl bg-[#374151] px-3 py-2 text-white shadow-lg"
            >
              <p className="mt-2 text-sm">
                <span className="font-bold"> File Name:</span>
                <span>{notes.fileName}</span>
              </p>
              <button onClick={() => showPDF(notes.files)}>Show Pdf</button>
            </div>
          ))}
        {searchStatus === "Not-Found" && (
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            No Notes Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
