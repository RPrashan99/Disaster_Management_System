import React from "react";

export const Report_Card = (disaster_type, location, affected_count, severity) => {
    return(
        <div className="flex flex-row bg-white ps-5 w-[230px] rounded-lg shadow-md hover:ring">
            <div className="flex flex-col w-full pt-3">
                <div className="flex text-[20px] font-bold pb-3 justify-center">{disaster_type}</div>
                <div className="flex text-[10px]">Location</div>
                <div className="flex text-[15px] mx-auto">{location}</div>
            </div>
            <div className="flex flex-col w-full border-l-2 pb-1">
                <div className="flex flex-col h-full ps-2 pt-1">
                    <div className="flex text-[10px]">Total affected</div>
                    <div className="flex text-[20px] justify-center">{affected_count}</div>
                </div>
                <div className="flex flex-col h-full ps-2 border-t-2">
                    <div className="flex text-[10px]">Severity</div>
                    <div className="flex text-[20px] justify-center">{severity}</div>
                </div>
            </div>
        </div>
    )
}