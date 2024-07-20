import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [profilePreviewImage, setProfilePreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userMobile", userMobile);
      formData.append("userBio", userBio);
      formData.append("userEmail", userEmail);
      formData.append("userName", userName);
      formData.append("userPassword", userPassword);
      formData.append("profileImage", profileImage);

      const result = await axios.post(
        "http://localhost:4000/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Data: ", result);
      alert("User has been successfully registered");
    } catch (error) {
      alert("Failed to register user ");
      console.log(error);
    }
  };

  return (
    <div className="flex h-auto w-full items-center justify-center p-5">
      <form
        className="flex h-full w-full max-w-[450px] flex-col gap-3 bg-white p-5"
        onSubmit={registerUser}
      >
        <h1 className="relative text-center text-3xl font-bold">
          Register
          <span className="absolute left-[138px] top-[38px] h-1 w-32 rounded-full bg-blue-300"></span>
        </h1>
        <div className="mt-1 flex items-start justify-center gap-4">
          <div className="flex flex-col items-start justify-center">
            <label className="font-medium" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Vishu"
              className="w-full rounded-lg border border-gray-200 p-2 focus:border-blue-400 focus:outline-none"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="lastName" className="font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Kaushik"
              className="w-full rounded-lg border border-gray-200 p-2 focus:border-blue-400 focus:outline-none"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-medium" htmlFor="userBio">
            {" "}
            Bio
          </label>
          <textarea
            name="userBio"
            id="userBio"
            rows="4"
            className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none"
            placeholder="Tell us something about yourself"
            required
            onChange={(e) => setUserBio(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-medium" htmlFor="userEmail">
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Enter Your Email"
            className="w-full rounded-lg border border-gray-200 p-2 focus:border-blue-400 focus:outline-none"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-medium" htmlFor="userMobile">
            Mobile No.
          </label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter Your 10 digit mobile no."
            className="w-full rounded-lg border border-gray-200 p-2 focus:border-blue-400 focus:outline-none"
            onChange={(e) => setUserMobile(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-medium" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter Your User Name"
            className="w-full rounded-lg border border-gray-200 p-2 focus:border-blue-400 focus:outline-none"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <label className="font-medium" htmlFor="userPassword">
            Password
          </label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Enter Your Password"
            className="w-full rounded-lg border border-gray-200 p-2 focus:border-blue-400 focus:outline-none"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-4 grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-50 text-2xl font-black">
            {/* 200 x 200 */}
            {profilePreviewImage == "" ? (
              <p className="text-sm font-bold text-gray-500">Profile Image</p>
            ) : (
              <img src={profilePreviewImage} alt="" className="" />
            )}
          </div>
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
                <span className="font-semibold">
                  Click to Upload your profile image
                </span>
              </p>
              <input
                type="file"
                placeholder="File"
                accept="application/png"
                required
                id="dropzone-file"
                onChange={(e) => {
                  setProfilePreviewImage(
                    URL.createObjectURL(e.target.files[0]),
                  );
                  setProfileImage(e.target.files[0]);
                }}
                className="hidden"
              />
            </div>
          </label>
        </div>
        <button className="rounded-lg bg-blue-500 px-5 py-2 font-bold text-white hover:bg-blue-600">
          Register
        </button>
        <div className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
