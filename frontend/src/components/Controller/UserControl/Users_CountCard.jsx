import React from "react";

export const CountCard = (title, description) => {
    return(
        <div className="flex flex-col items-center justify-around border rounded-lg bg-white w-[370px] h-[200px] shadow">
            <div className="flex items-center py-2">
                <img src="../controller/Count.png" alt="Count.png"/>
            </div>
            <div className="flex flex-col space-around rounded-b-lg items-center w-full h-full bg-mapGreen">
                <div className="text-[14px]">{description}</div>
                <div className="text-[36px]">{title}</div>
            </div>
        </div>
    )
}