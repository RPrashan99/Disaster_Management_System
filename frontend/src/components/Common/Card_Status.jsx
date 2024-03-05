import React from "react";

export const Card_Status = (title, cardText) => {
    return(
        <div className="flex flex-row border rounded-lg bg-white w-[220px] h-[75px] justify-around align-center shadow">
            <div className="flex flex-col justify-around h-full">
                <div className="text-[16px] font-bold">{title}</div>
                <div className="text-[10px]">{cardText}</div>
            </div>
            <div className="flex items-center">
                <img src="../controller/Circle.png" alt="Status"/>
            </div>
        </div>
    )
}