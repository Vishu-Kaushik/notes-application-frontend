import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-12">
      {/* About Us , Quick Links , Contact */}
      <div className="flex h-full w-full flex-col gap-10 lg:flex-row lg:justify-center">
        {/* About Us */}
        <div className="lg: w-[450px]">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[75px] before:bg-blue-400">
            About Us
          </h2>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            sequi beatae minima voluptatibus fugit inventore similique pariatur
            dolor eaque deleniti.
          </p>
        </div>

        <div className="ml-5 lg:w-[450px]">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[75px] before:bg-blue-400">
            Quick Links
          </h2>
          <ul className="text-gray-600">
            <li className="mb-2">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-2">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="lg: w-[450px]">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[75px] before:bg-blue-400">
            Contact Us
          </h2>
          {/* Should Update the Links  */}
          <ul>
            <li>712312414</li>
            <li>4032987923847</li>
            <li>vishukaushik131@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
