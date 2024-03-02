import React from 'react';
import { Disaster } from '../../Controller/Home/Disaster'
export const DisasterStatus = () => {
    return(
        <div className='flex flex-col gap-[1px] items-end px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]'>
            <h2 className='flex justify-center items-center text-[#273780] font-bold font-color-[gray] relative w-full h-[8%] bg-gradient-to-b from-[#393a39] via-[white]  to-[#606161] text-[1.2rem] mt-[2%] mb-[0]' >
                Disaster Status
            </h2>
            <div className='flex item-center flex-row overflow-auto px-10px py-[5px] flex-wrap  relative self-stretch w-full h-[92%] flex-[0_0_auto]  bg-[white] border-[10px]  border-menuBlue '>
                <Disaster/>
                <Disaster/>
                <Disaster/>
                <Disaster/>
            </div>
        </div>
    )
}