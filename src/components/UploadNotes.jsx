import React from "react";

const UploadNotes = () => {
  return (
    <div className="mt-4 flex h-full w-full max-w-[770px] flex-col items-center justify-start p-5 md:border md:border-gray-300 lg:justify-center">
      <h1 className="mb-5 text-2xl font-black text-blue-600">
        Upload Your Notes
      </h1>
      <div className="mb-6 w-full max-w-[550px]">
        <input
          type="text"
          placeholder="Title"
          required
          // onChange={(e) => setTitle(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6 w-full max-w-[550px]">
        <input
          type="text"
          placeholder="Description"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6 w-full max-w-[550px]">
        <input
          type="text"
          placeholder="Tags"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="flex w-full max-w-[550px] items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2 "
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to Upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">PDF</p>
            <input
              type="file"
              placeholder="File"
              accept="application/pdf"
              required
              id="dropzone-file"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
          </div>
        </label>
      </div>
      <button
        type="button"
        class="mt-6 w-full max-w-[300px] items-center rounded-lg bg-blue-700 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit Here
      </button>
    </div>
  );
};

export default UploadNotes;
