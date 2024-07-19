import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="flex flex-col items-start justify-center border border-red-600 lg:h-heightWithoutNavbar lg:flex-row">
      {/* Profile */}

      <div className="flex w-full flex-col items-center justify-center border-[3px] border-green-500 p-4 lg:h-full lg:w-[40%]">
        <div className="grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full bg-gray-400 text-2xl font-black">
          <img src="" alt="" />
          {/* <p>Hello WOrld</p> */}
        </div>
        <div className="">
          <div className="my-2 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">
              <span>Vishu </span>
              <span>Kaushik</span>
            </h2>
            <p className="mt-1 text-center">vishukaushik131</p>
            <p className="mt-1 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              nobis.
            </p>
          </div>
        </div>
        {/* counts */}
        <div className="flex items-center justify-center gap-4">
          <div className="grid h-[80px] w-[110px] place-content-center">
            <p className="text-center text-[14px] font-medium">
              No. of Uploads :
            </p>
            <p className="text-center text-xl font-medium">1 </p>
          </div>
          <span className="h-16 w-[1px] bg-gray-500"></span>
          <div className="grid h-[80px] w-[110px] place-content-center">
            <p className="text-center text-[14px] font-medium">
              No. of Files :
            </p>
            <p className="text-center text-xl font-medium">1</p>
          </div>
        </div>
      </div>

      {/* ---- */}
      {/* Documents */}
      <div className="lg:f-full h-auto w-full border-[3px] border-amber-400 p-5 lg:w-[60%]">
        <h1 className="mb-3 text-xl font-black">My Documents</h1>
        <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3">
          {Array(8)
            .fill(true)
            .map((item, i) => (
              <div
                key={i}
                className="mb-3 flex h-[40px] max-w-[250px] items-center justify-between gap-10 rounded-lg border border-black bg-teal-100 px-4 py-4 text-black shadow-xl"
              >
                <p className="font-semibold">Resume</p>
                <RiExternalLinkLine />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
