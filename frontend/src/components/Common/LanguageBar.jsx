import React from "react";
import logo from '../../assets/logo.png'
import { FaSearch,FaMicrophone } from "react-icons/fa";

const LanguageBar = () => {
  return (
    <div >
      <div className="bg-primary py-2 px-6 shadow-md z-10 flex justify-content-center align-items-center ">
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

      <div class="relative  overflow-hidden bg-white py-4 px-8 ">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4 lg:w-1/2 md:w-1/2">
            <div class="text-center lg:text-left ">
              <a
                href="/"
                className="lg:text-3xl text-2xl italic font-medium flex items-center space-x-3 text-primary"
              >
                <img src={logo} alt="" className="w-20 ini" />
                <span>Disaster Management Center</span>
              </a>
            </div>
          </div>
          <div class="relative w-full lg:w-1/2 md:w-1/2 mt-5 px-10">
            <div class="text-center lg:text-right relative ">
              <i class="absolute text-black top-1/2 transform -translate-y-1/2 left-4">
                <FaSearch />
              </i>
              <input
                type="text"
                class="bg-white h-14 w-full pl-12 rounded-lg focus:outline-none hover:cursor-pointer"
                name=""
              />
              <span class="absolute top-1/2 transform -translate-y-1/2 right-5 border-l pl-4 cursor-pointer">
                <i class="fa fa-microphone text-black hover:text-primary">
                  <FaMicrophone />
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageBar;
