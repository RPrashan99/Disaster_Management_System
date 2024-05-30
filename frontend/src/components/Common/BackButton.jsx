import React from 'react'
import { GrFormPrevious } from "react-icons/gr";

export const BackButton = ({header, onClick, href}) => {
  return (
    <div>
        <a href={href} onClick={onClick}>
          <button className="bg-ControllerSec shadow-md px-4 py-2 rounded-lg text-white font-semibold ">
            <div className="flex gap-2 items-center ">
              <GrFormPrevious className="w-6 h-6" />
              <h1>{header}</h1>
            </div>
          </button>
        </a>
      
    </div>
  );
}
