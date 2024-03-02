import React from 'react'
import { SearchBar } from "./SearchBar"

export const TitleBar = () => {
    return(
        <div className=" grid md:grid-cols-1 md:justify-center sm:justify-center lg:grid-cols-2 md:h-[80px] sm:h-[75px] sm:grid-cols-1 grid-cols-1 flex-wrap h-[50px] items-center  px-[10px] py-[1PX] relative  self-stretch w-full">

                <div className={`flex relative w-full flex-wrap  md:w-[100%]  md:justify-center sm:justify-center lg:w-[100%] sm:w-[100%]  items-center justify-center  [font-family:'Inter',Helvetica] font-semibold text-primary text-[20px]  whitespace-nowrap `}>
                    Disaster Management Center
                    <img className="flex items-center w-[23px] h-[25px] relative left-[10px] "  src="/controller/logo_main.png" alt='logo_main'/>
                </div>
                <div className="flex items-center flex-wrap relative rounded-[10px] lg:justify-center md:justify-center sm:justify-center ">
                    <SearchBar/>
                </div>
         </div>
    )
}