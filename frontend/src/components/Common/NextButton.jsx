import React from 'react'
import { GrFormNext } from "react-icons/gr";

export const NextButton = ({header, onClick}) => {
  return (
    <div>
        <a onClick={onClick}>
          <button className="bg-userBlue shadow-md pr-1 pl-3 py-2 hover:bg-blue-800 focus:bg-slate-600 rounded-lg text-white font-semibold ">
            <div className="flex gap-2 items-center ">
              <h1>{header}</h1>
              <GrFormNext className="w-6 h-6" />
            </div>
          </button>

        </a>
      
    </div>
  );
}
