import React from "react";
import About from "../../assets/about.png";

const About_new = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 py-4" >
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={About} alt="" className="w-80 shadow-md " />
        </div>

        <div className="md:w-3/5 mx-auto">
          <h2 className="text-5xl text-primary font-bold mb-4 md:w-4/5">
            About Us
          </h2>
          <p className="md:w-3/4 text-sm text-neutral-700 mb-8">
          At the heart of Your Disaster Management System is a dedicated team of experts in disaster management, 
          technology, and community engagement. We believe in the power of proactive planning, swift response, and 
          the strength of collaborative efforts to minimize the impact of disasters on lives and infrastructure.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About_new;

{
  /* <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto  py-20">
      <div className="flex items-center justify-center lg:w-4/5 mx-auto">
        <div className="text-center ">
          <h2 className="text-4xl text-neutral-600 font-semibold mb-3">
            About Us
          </h2>
          <div className="flex items-center justify-center gap-8">
            <p>
              {" "}
              At the heart of Your Disaster Management System is a dedicated
              team of experts in disaster management, technology, and community
              engagement. We believe in the power of proactive planning, swift
              response, and the strength of collaborative efforts to minimize
              the impact of disasters on lives and infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div> */
}
