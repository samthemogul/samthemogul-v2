import React from "react";
import Techs from "./Techs";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="mt-32 flex flex-col">
     <div className="flex flex-col gap-5">
     <h1 className="font-bold text-xl">
        About Me<span className="text-indigo-500">.</span>
      </h1>
      <p className="text-gray-600">I am really passionate about design and code, and I always search out new ways that I can merge these two together 
to produce outstanding projects. This is why I focus on building the part of web and mobile applications that the 
user can see.  have have build a number of personal projects ranginf from static company websites, SPAs to MPAs and mobile applications.

Currently, I am the lead developer at VAPO Inc, a cryptocurrency payment gateway service company where 
I am a part of the web and mobile application interface and user experience design process.
My goal as a developer is to build applications that are user-friendly, functional and help businesses provide the best experiences to their customers.</p>
<div><h4>Technologies I use:</h4>
<Techs />
</div>
<div><h4>Skills I have:</h4>
<Skills />
</div>
     </div>
    </div>
  );
};

export default About;

