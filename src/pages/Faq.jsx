import React from "react";
import faqs from "../assets/questions";

const Faq = () => {
  return (
    <>
      <div className="grid place-content-center border-2 border-green-800 lg:h-heightWithoutNavbar">
        <div className="mx-auto max-w-[1550px] px-5 py-8">
          <h1 className="mb-6 text-4xl font-black">
            Frequently Asked Questions
          </h1>
          {/* Wrapper */}
          <div className="sm:grid-col-2 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {faqs.map((item, i) => (
              <div key={i}>
                <h1 className="mb-2 text-lg font-medium sm:text-xl">
                  {item.question}
                </h1>
                <p className="border-b-2 pb-2 text-sm text-gray-700 sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
