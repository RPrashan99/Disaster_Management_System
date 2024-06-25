import React from "react";

export const Card_Status = (title, cardText) => {
    return(
        <div className="flex flex-row border rounded-lg bg-white md:w-[150px] lg:w-[220px] h-[75px] justify-around align-center shadow pe-2">
            <div className="flex flex-col justify-around h-full p-1">
                <div className="md:text-[13px] lg:text-[16px] font-bold">{title}</div>
                <div className="md:text-[8px] lg:text-[10px]">{cardText}</div>
            </div>
            <div className="flex items-center">
                <img src="../controller/Circle.png" alt="Status"/>
            </div>
        </div>
    )
}