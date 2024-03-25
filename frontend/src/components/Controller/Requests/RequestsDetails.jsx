import React from "react";
import { ColorItem } from "../DisasterStatus/color_item";

export const RequestsDetails = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 flex-wrap w-[80%] rounded-md bg-green justify-center mx-10 mb-10 space-x-2 h-full">
            <div className="flex flex-col bg-white rounded-lg border w-full h-full items-center my-1">
                <span className="flex text-ControllerPrim text-[22px] items-center justify-center font-bold">Daily Forcast</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-0 rounded w-full">
                    <div className="flex flex-col items-center justify-center gap-1 px-4 ">
                        <div className="flex gap-5 rounded-md flex-row border-b-[3px] border-[#9c9c9c] shadow-lg px-3 py-1">
                            <span className="flex text-ControllerPrim  items-center justify-center text-[16px] font-bold">Read Requests</span>
                            <img className="flex " src="/controller/Circle2.png" alt="Analysis"/>
                        </div>
                        <div className="flex gap-5 rounded-md border-b-[3px] border-[#9c9c9c] shadow-xl flex-row px-3 py-1">
                            <span className="flex text-ControllerPrim text-[16px] items-center justify-center font-bold">Accepted Requests</span>
                            <img className="flex " src="/controller/Circle1.png" alt="Analysis"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mx-5 mb-10 rounded-md shadow-lg ">
                        <div className="flex justify-center h-[65%] w-full ">
                            <img className="flex p-2 " src="/controller/NumofUsers.png" alt="Analysis"/>
                        </div>
                        <div className="flex flex-col h-[35%] w-full items-center m-0 justify-center rounded-b-lg bg-slate-600">
                            <span className="flex text-white text-[14px] items-center justify-center font-bold">Total Requests</span>
                            <span className="flex text-white text-[22px] items-center justify-center font-bold">Today</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center pt-3 px-4 w-[95%] border-b-[5px] border-[#6d6d6d] shadow-md rounded-lg">
                    <div className="flex flex-col m- text-wrap w-[60%] justify-center">
                        <span className="flex text-black text-[1.5rem] font-bold">Requests by Disaster Type</span>
                        <span className="flex text-[15px] text-[#c43e3e]">All confirmed requests are categorized by disaster type</span>
                    </div>
                    <div className="flex items-center justify-center w-[20%] px-1">
                        <img src="/controller/Group.png"/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-ceter mb-5 py-2 px-5 w-[95%] rounded-md border-b-[5px]  border-[gray] shadow-xl ">
                    {ColorItem({d_type:"Flood Type",color:"#c43e3e",margin:"40px"})}
                    {ColorItem({d_type:"Extreme wind",color:"#7E1199",margin:"20px"})}
                    {ColorItem({d_type:"Drought Type",color:"#F4771D",margin:"25px"})}
                    {ColorItem({d_type:"Tsunami Type",color:"#1C22B6",margin:"20px"})}
                    {ColorItem({d_type:"Earthquake Type",color:"#0A8D2E",margin:"7px"})}
                    {ColorItem({d_type:"Wildfire Type",color:"#E7A526",margin:"22px"})}
                </div>

            </div>
            <div className="flex flex-col bg-white rounded-lg border w-full h-full items-center my-1">
                <span className="flex text-ControllerPrim text-[22px] items-center justify-center font-bold">Monthly Forcast</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-0 rounded w-full">
                    <div className="flex flex-col justify-center mx-5 mb-10 rounded-md shadow-lg ">
                        <div className="flex justify-center h-[65%] w-full ">
                            <img className="flex p-2 " src="/controller/NumofUsers2.png" alt="Analysis"/>
                        </div>
                        <div className="flex flex-col h-[35%] w-full m-0 items-center justify-center rounded-b-lg bg-slate-600">
                            <span className="flex text-white text-[14px] items-center justify-center font-bold">Total Requests</span>
                            <span className="flex text-white text-[22px] items-center justify-center font-bold">March</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 px-4">
                        <div className="flex gap-5 rounded-md flex-row border-b-[3px] border-[#9c9c9c] shadow-lg px-3 py-1">
                            <span className="flex text-ControllerPrim  items-center justify-center text-[16px] font-bold">Read Requests</span>
                            <img className="flex " src="/controller/1510.png" alt="Analysis"/>
                        </div>
                        <div className="flex gap-5 rounded-md border-b-[3px] border-[#9c9c9c] shadow-xl flex-row px-3 py-1">
                            <span className="flex text-ControllerPrim text-[16px] items-center justify-center font-bold">Accepted Requests</span>
                            <img className="flex " src="/controller/1300.png" alt="Analysis"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center w-[95%] pt-3 px-4 border-b-[5px] border-[#6d6d6d] shadow-md rounded-lg">
                    <div className="flex flex-col text-wrap w-[60%] justify-center">
                        <span className="flex text-black text-[1.5rem] font-bold">Requests by Disaster Type</span>
                        <span className="flex text-[15px] text-[#c43e3e]">All confirmed requests are categorized by disaster type</span>
                    </div>
                    <div className="flex items-center justify-center w-[20%] px-1">
                        <img src="/controller/Group2.png"/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-ceter mb-5 py-2 px-5 w-[95%] rounded-md border-b-[5px]  border-[gray] shadow-xl ">
                    {ColorItem({d_type:"Flood Type",color:"#c43e3e",margin:"40px"})}
                    {ColorItem({d_type:"Extreme wind",color:"#7E1199",margin:"20px"})}
                    {ColorItem({d_type:"Drought Type",color:"#F4771D",margin:"25px"})}
                    {ColorItem({d_type:"Tsunami Type",color:"#1C22B6",margin:"20px"})}
                    {ColorItem({d_type:"Earthquake Type",color:"#0A8D2E",margin:"7px"})}
                    {ColorItem({d_type:"Wildfire Type",color:"#E7A526",margin:"22px"})}
                </div>

            </div>

        </div>
    )
}