import React from 'react'

export const LanguageButtons = () => {

    return(
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
    )
}