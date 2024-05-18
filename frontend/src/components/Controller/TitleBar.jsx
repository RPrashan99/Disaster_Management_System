import React from 'react'
import { SearchBar } from "./SearchBar"

export const TitleBar = () => {
    return(
        <div className=" grid md:grid-cols-1 md:m-4 sm:m-4 lg:m-0 md:justify-center sm:justify-center lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 flex-wrap h-full items-center  px-[5px]  relative  self-stretch w-full">

            <div className={`flex relative w-full flex-wrap md:w-[100%]  md:justify-center sm:justify-center lg:w-[100%] sm:w-[100%]  items-center justify-center  [font-family:'Inter',Helvetica] font-semibold text-primary text-[20px]  whitespace-nowrap `}>
                Disaster Management Center
                <img className="flex items-center w-[23px] h-[23px] relative left-[10px] " src="/controller/logo_main.png" alt='logo_main'/>
            </div>
            <div className="flex items-center justify-end flex-wrap relative h-full rounded-[10px] lg:justify-end md:justify-center sm:justify-center ">
                <div className='flex w-[50%] items-center justify-end'>
                    <SearchBar/>
                </div>
            </div>
        </div>
    )
}