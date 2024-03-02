import React from "react";

import { FaXmark, FaBars } from "react-icons/fa6";

export const MainMenuBar = ({ isMenuOpen, toggleMenu}) => {


    return(
////////////////////////////////////////////////////

    
      <div className="flex justify-center w-full">
        <div className="flex space-x-14 justify-center w-full items-center ">
          <ul className="md:flex space-x-16 first:font-medium hidden text-white    gap-[10px]    !text-[14px]  ![font-family:'Inter',Helvetica] w-full justify-between items-center  ">
                <li>
                    <a className="flex relative transform  hover:scale-110 flex-[0_0_auto] bg-transparent text-gray-300 transition hover:text-white" href="#"> Home </a>
                </li>
                <li>
                    <a className="flex relative transform transition-transform hover:scale-110 flex-[0_0_auto] bg-transparent text-gray-300 hover:bg-transparent hover:text-white" href="#"> Disaster Status </a>
                </li>
                <li>
                    <a className="flex relative transform hover:scale-110 flex-[0_0_auto] bg-transparent text-gray-300 hover:bg-transparen transition hover:text-white" href="#"> Requests </a>
                </li>
                <li>
                    <a className="flex relative transform hover:scale-110 flex-[0_0_auto] bg-transparent  hover:bg-transparent text-gray-300 transition hover:text-white" href="#"> Disaster Map </a>
                </li>
                <li>
                    <a className="flex relative transform  hover:scale-110 flex-[0_0_auto] bg-transparen hover:bg-transparent text-gray-300 transition hover:text-white" href="#"> User Control </a>
                </li>
          </ul>
        </div>

        {/* menu button for small devices-mobile */}

        <div className="flex md:hidden w-full items-end justify-end ">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none justify-end focus:test-gray-500  "
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6 " />
            ) : (
              <FaBars className="h-6 w-6 " />
            )}
          </button>
        </div>
      </div>
    




  )
}