import React from "react";
import Image from "next/image";
import Techs from "./Techs";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="mt-32 sm:flex sm:flex-row flex-col">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">
          <span className="text-indigo-500">01. </span>
          About me
        </h1>
        <p className="text-gray-600">
          I am really passionate about design and code, and I always search out
          new ways that I can merge these two together to produce outstanding
          projects. This is why I focus on building the part of web and mobile
          applications that the user can see. have have build a number of
          personal projects ranginf from static company websites, SPAs to MPAs
          and mobile applications. Currently, I am the lead developer at VAPO
          Inc, a cryptocurrency payment gateway service company where I am a
          part of the web and mobile application interface and user experience
          design process. My goal as a developer is to build applications that
          are user-friendly, functional and help businesses provide the best
          experiences to their customers.
        </p>
        <div>
          <h4 className="font-bold my-3">Technologies I use:</h4>
          <Techs />
        </div>
        <div>
          <h4 className="font-bold my-3">Skills I have:</h4>
          <Skills />
        </div>
      </div>
      <div className="w-full mt-10 relative flex justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-white drop-shadow-md flex absolute left-0 bottom-0 justify-center items-center text-center">
          <span className="text-5xl absolute top-1 text-indigo-500">+</span>
        </div>
        <Image
          src="/assets/images/photo_pic.svg"
          alt="Samuel Emeka"
          width={300}
          height={300}
        />
        <div className="w-16 h-16 rounded-full bg-indigo-500 drop-shadow-md flex absolute right-2 top-5 justify-center items-center text-center">
          <span className="text-5xl absolute top-1 text-white">+</span>
        </div>
      </div>
    </div>
  );
};

export default About;
