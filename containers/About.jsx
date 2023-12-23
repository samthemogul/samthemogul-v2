import React from "react";
import Image from "next/image";
import Techs from "@components/Techs";
import Skills from "@components/Skills";

const About = () => {
  return (
    <div id="about" className="mt-32 sm:grid sm:gap-30 sm:justify-center sm:grid-rows-2 gap-10 flex-col">
      <div className="flex flex-col gap-5 mb-10 basis-1/2">
        <h1 className="font-bold text-xl headers">
          <span className="text-indigo-500">01. </span>
          About me
        </h1>
        <p className="text-gray-600">
        I am deeply passionate about the synergy between design
         and code, constantly seeking innovative ways to merge 
         these elements to create exceptional projects. My focus 
         lies in crafting the visible aspects of web and mobile 
         applications, where I bring my expertise to life. Over 
         time, I've successfully developed a diverse range of 
         personal projects, including static company websites, 
         Single Page Applications (SPAs), Multi-Page Applications 
         (MPAs), and mobile applications. Currently, I hold the 
         position of lead developer at VAPO Inc, a cryptocurrency 
         payment gateway service company. In this role, I actively 
         contribute to the design process of web and mobile 
         application interfaces, emphasizing user experience 
         design. My overarching goal as a developer is to 
         create applications that are not only user-friendly 
         and functional but also empower businesses to deliver 
         exceptional experiences to their customers.
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
      <div className="w-full bg-indigo-500 relative flex justify-center items-center">
        <Image
          src="/assets/images/customprofile.png"
          alt="Samuel Emeka"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
