import React from "react";

const Languages = () => {
  return (
    <>
      <div className="bg-primary py-2 px-6 flex justify-content-center align-items-center w-full ">
        <div className="flex flex-row items-center right-1 bg-grey rounded-full">
          <button className="px-2 py-1 items-center  rounded-full  text-sm font-medium text-black  focus:bg-black focus:text-white focus:outline-none">
            <span className="text-md">සිංහල</span>
          </button>

          <button className="px-2 py-1  items-center  rounded-full  text-sm font-medium text-black  focus:bg-black focus:text-white focus:outline-none ">
            <span className="text-md">English</span>
          </button>
          <button className="px-2 py-1 items-center  rounded-full  text-sm font-medium text-black  focus:bg-black focus:text-white focus:outline-none ">
            <span className="text-md">தமிழ்</span>
          </button>
        </div>

        <div className="ml-auto text-white font-bold">
          <h3>Call center 1717</h3>
        </div>
      </div>
    </>
  );
};

export default Languages;
