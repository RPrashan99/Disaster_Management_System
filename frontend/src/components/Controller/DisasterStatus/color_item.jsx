import React from "react"

export const ColorItem = (d_type, {color}) => {
    return(
        <div className="flex w-15 h-5">
            <span className="flex text-[15px] text-black">{d_type}</span>
            <div className={`flex w-[5px] h-[5px] bg-[${color}]`}/>
        </div>
    )
}