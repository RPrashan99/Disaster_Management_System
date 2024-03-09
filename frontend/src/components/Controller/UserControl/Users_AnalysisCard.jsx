import React from "react";

export const AnalysisCard = (title, description) => {
    return(
        <div className="flex flex-col justify-around border rounded-lg bg-white items-center p-2 w-full">
            <div className="text-[25px] font-bold">{title}</div>
            <div className="text-[15px]">{description}</div>

            <div className="flex">
                <img src="../controller/Analysis.png" alt="Analysis.png"/>
            </div>
        </div>
    )
}