import { Space } from "antd"
import React from "react"
import { ColorItem } from "./color_item"

export const DisasterStatusBar = () => {
    return(
        <div className="flex flex-row bg-menuBlue px-5 py-1 justify-center space-x-10">
            <div className="flex flex-row bg-white rounded border w-[680px] h-[250px] items-center">
                <div className="flex flex-col rounded">
                    <div className="flex flex-row items-center border px-5 py-3">
                        <div className="flex flex-col">
                            <span className="flex text-black text-[22px] font-bold">Disaster by type</span>
                            <span className="flex text-grey px-2 w-[250px]">Each Disaster report grouped by its type</span>
                        </div>
                        <div className="flex">
                            <img className="flex" src="/controller/analysis_report.png" alt="Analysis"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 px-5 py-2 border">
                            {ColorItem("Flood Type","#BE3F3F")}
                            {ColorItem("Extreme wind","#7E1199")}
                            {ColorItem("Drought Type","#F4771D")}
                            {ColorItem("Tsunami Type","#1C22B6")}
                            {ColorItem("Earthquake Type","#0A8D2E")}
                            {ColorItem("Wildfire Type","#E7A526")}
                    </div>
                </div>
                <div className="flex flex-col py-5 pe-5">
                    <div className="flex flex-row mb-5 justify-center">
                        <div className="flex flex-col justify-center items-center border w-[150px] me-5">
                            <span className="flex text-black text-[40px] font-bold">452</span>
                            <span className="flex text-black-[15px]">Total Disasters</span>
                        </div>
                        <img className="flex w-14 h-14" src="/controller/reports_icon.png" alt="Reports_Icon"/>
                    </div>
                    <div className="flex items-center gap-5 px-2">
                        <img src="/controller/plus_icon.png"/>
                        <span className="flex text-grey">2 new Disaster Reports added!</span>
                    </div>
                    <span className="flex text-grey ml-auto mt-2">Last updated 1min ago</span>
                </div>
            </div>
            <div className="flex flex-row bg-white rounded border w-[680px] h-[250px]">
                <div className="flex flex-col items-center justify-center w-4/5">
                    <img className="flex w-[150px] h-[150px]" src="../controller/analysis_2.png" alt="Ongoing Disasters"/>
                    <div className="flex">Ongoing Disasters</div>
                </div>
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <div className="flex flex-row w-full h-full justify-center items-center border">
                        <div className="flex text-black text-[25px] w-[100px]">8000+</div>
                        <img className="flex w-5 h-5" src="../controller/people_icon.png" alt="People_Icon"/>
                    </div>
                    <div className="flex flex-col p-5 w-full h-full border space-y-2">
                        <div className="flex w-fit border">Island Wide Severity</div>
                        <div className="flex text-[25px] justify-center border">High</div>
                        <div className="flex w-fit ml-auto border">Elevated two hours ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}