import React from "react"
import { DisasterStatus } from "../Home/DisasterStatus"

export const NewsPreview = () =>{
    return(
        <div className="flex relativ flex-col">
            <h1 className="text-[white] text-start mt-2 pt-2 font-mono text-[2.5rem]">News Preview</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-[gray] md:grid-cols-2 sm:grid-cols-1">
                <DisasterStatus/>
                <DisasterStatus/>
            </div>
        </div>
    )
}