import React from "react";

const About = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto  py-8">
      <div className="flex items-center justify-center lg:w-4/5 mx-auto">
        <button >
          <span class="relative inline-flex items-center justify-center h-25 w-50">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-lg bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-lg h-25 w-50 bg-red-500 items-center justify-center p-5">
              <span class="text-white font-bold text-lg text-center">
                Report Emergency
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
