import React from 'react'
import { GrFormNext } from "react-icons/gr";

export const NextButton = ({header, onClick}) => {
  return (
    <div>
        <a onClick={onClick}>
          <button className="bg-ControllerSec shadow-md px-4 py-2 rounded-lg text-white font-semibold ">
            <div className="flex gap-2 items-center ">
              <GrFormNext className="w-6 h-6" />
              <h1>{header}</h1>
            </div>
          </button>
        </a>
      
    </div>
  );
}
