import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-deskFinal relative flex h-full items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10 w-full max-w-[860px] text-center text-white">
        <h1 className="text-3xl font-black md:text-5xl">Find Notes</h1>
        <p className="text-md mt-5 font-light md:text-xl md:font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          nostrum minus molestiae, laudantium labore sequi nobis beatae
          asperiores inventore magni praesentium modi odit tempore doloribus
          doloremque aut repellendus porro eius?
        </p>
        <div className="mt-5">
          {/* <Link to="/search">
            <button
              type="button"
              className="inline-flex items-center rounded-xl bg-white px-7 py-4 text-center text-sm font-bold  text-black hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
            </button>
          </Link> */}
          <div className="flex items-center justify-center gap-10">
            <Link to="/login">
              <button
                type="button"
                className="inline-flex items-center rounded-xl bg-white px-7 py-4 text-center text-sm font-bold text-black hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="inline-flex items-center rounded-xl bg-white px-7 py-4 text-center text-sm font-bold text-black hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
