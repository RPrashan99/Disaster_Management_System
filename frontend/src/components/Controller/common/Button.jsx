import React from 'react'
import { IoCaretBackSharp } from "react-icons/io5";

export const Button = (url) => {
  return (
    <div>
        <a href={url}>
          <button className="bg-ControllerSec px-4 py-2 rounded-lg text-white font-semibold ">
            <div className="flex gap-2 items-center ">
              <IoCaretBackSharp className="w-6 h-6" />
              <h1>Back</h1>
            </div>
          </button>
        </a>  
    </div>
  );
}