import React from "react";
import aboutusImg from "../images/aboutusImg.jpg";
const AboutUs = () => {
  return (
    <div className="flex h-heightWithoutNavbar flex-col items-center justify-start p-5 lg:flex-row">
      <div className="grid h-full w-full place-content-center">
        <img
          src={aboutusImg}
          alt=""
          className="w-[300px] rounded-3xl sm:w-[400px] md:w-[450px] lg:w-[600px]"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div>
          <h1 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-600">
            About Us
          </h1>
          <p className="mt-1 text-[15px] lg:mt-3">
            Welcome to FindMyNotes, the ultimate hub for students to seamlessly
            share and access educational resources. Our platform is designed
            with a singular purpose – to make the exchange of study materials as
            effortless as possible, fostering a collaborative and enriching
            academic experience for students across colleges.
          </p>
        </div>
        <div>
          <h1 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-600">
            Who We are
          </h1>
          <p className="mt-1 text-[15px] lg:mt-3">
            FindMyNotes is more than just a website; it's a community-driven
            initiative fueled by the passion for learning. Founded by a group of
            dedicated students, our platform is a testament to the belief that
            education should be a collective journey. Our team comprises tech
            enthusiasts, educators, and creative minds, all united in the
            mission to enhance the learning landscape.
          </p>
        </div>
        <div>
          <h1 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-600">
            Contact Us
          </h1>
          <p className="mt-1 text-[15px] lg:mt-3">
            At FindMyNotes, our mission is clear: to empower students by
            providing a centralized platform where knowledge knows no
            boundaries. We aim to break down the barriers to academic success,
            making valuable study materials accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
