import React from "react";
import logo from "../../../assets/Logo/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { TextInput } from "flowbite-react";

const Logo = () => {
  return (
    <>
      <div className="relative  overflow-hidden bg-white px-8 py-2">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 md:w-1/2">
            <div className="text-center ">
              <a
                href="/"
                className="lg:text-2xl text-lg italic font-medium flex items-center space-x-3 text-primary"
              >
                <img src={logo} alt="" className="w-20 ini" />
                <span>Disaster Management Center</span>
              </a>
            </div>
          </div>
          <div class="relative w-full lg:w-1/2 md:w-1/2 mt-5 px-10 hidden md:block">
            <form>
              <TextInput
                type="text"
                placeholder="Search..."
                rightIcon={AiOutlineSearch}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
