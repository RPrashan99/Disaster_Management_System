import React from 'react';
import { Disaster } from '../../Controller/Home/Disaster'
export const DisasterStatus = () => {
    return(
        <div className='flex flex-row relative w-full'>
            <div className='flex flex-col gap-[1px] items-end px-0 py-[5px] relative self-stretch flex-[0_0_auto] w-[80%]'>
                <h2 className='flex justify-center items-center text-ControllerPrim font-bold font-color-[gray] relative w-full h-[8%] bg-gradient-to-b from-[#393a39] via-[white]  to-[#606161] text-[1.2rem] mt-[2%] mb-[0]' >
                    Disaster Status
                </h2>
                <div className='flex item-center flex-row overflow-auto px-10px py-[5px] flex-wrap  relative self-stretch w-full h-[92%] flex-[0_0_auto]  bg-[white] border-[10px]  border-menuBlue '>
                    <Disaster/>
                    <Disaster/>
                    <Disaster/>
                    <Disaster/>
                </div>
            </div>
            <div className='flex flex-col rounded-l-full justify-center w-[20%] h-full gap-10pl-[10px] bg-[#444343]'>
                <div className='flex flex-col mb-4 rounded-2xl bg-[#ffffff] h-[25%] w-full ml-[5%] justify-center items-center'>
                    <h2 className='flex flex-wrap mb-7 justify-center text-center text-[primary] font-bold font-color-[gray] relative w-full h-[8%] text-[0.8rem] mt-[2%] ' >
                        Current Disasters
                    </h2>
                    <input placeholder='48 ' className='w-[80%] h-[60%] justify-center items-center bg-ControllerSec placeholder:text-[black] placeholder:font-bold  text-center rounded-full text-[2rem]'>
                    </input>
                </div>
                <div className='flex flex-col mb-4 rounded-2xl bg-[#ffffff] h-[25%] w-full ml-[5%] justify-center items-center'>
                    <h2 className='flex flex-wrap mb-7 justify-center text-center text-[primary] font-bold font-color-[gray] relative w-full h-[8%] text-[0.8rem] mt-[2%] ' >
                        Total Requests
                    </h2>
                    <input placeholder='48 ' className='w-[80%] h-[60%] justify-center items-center bg-ControllerSec placeholder:text-[black] placeholder:font-bold text-center rounded-full text-[2rem]'>
                    </input>
                </div> 
            </div>
        </div>

    )
}