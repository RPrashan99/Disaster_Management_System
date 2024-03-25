import React from "react";

export const Disaster_Map_Card = (title, value) => {
    return(
        <div className="flex flex-col w-[300px] h-[70px] px-5 py-2 bg-white border rounded-md">
            <div className="flex text-[16px] font-bold">{title}</div>
            <div className={`text-[20px] text-right pe-5`}>{value}</div>
        </div>
    )
}