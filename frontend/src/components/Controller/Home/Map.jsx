import React from 'react';
export const Map = () => {
    return(
        <div className='flex gap-[10px] justify-between items-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] m-[2%]'>
            <div className='flex flex-col justify-center w-full h-full gap-10'>
                <div className='flex flex-col rounded-2xl bg-[#ffffff] h-[25%] w-full justify-center items-center'>
                    <h2 className='flex flex-wrap mb-5 justify-center items-center text-[primary] font-bold font-color-[gray] relative w-full h-[8%] text-[0.8rem] mt-[2%] ' >
                        Current Disasters
                    </h2>
                    <input placeholder='48 ' className='w-[80%] h-[60%] justify-center items-center bg-[red] text-center rounded-full text-[2rem]'>
                    </input>
                </div>
                <div className='flex flex-col rounded-2xl bg-[#ffffff] h-[25%] w-full justify-center items-center'>
                    <h2 className='flex flex-wrap mb-5 justify-center items-center text-[primary] font-bold font-color-[gray] relative w-full h-[8%] text-[0.8rem] mt-[2%] ' >
                        Total Requests
                    </h2>
                    <input placeholder='48 ' className='w-[80%] h-[60%] justify-center items-center bg-[red] text-center rounded-full text-[2rem]'>
                    </input>
                </div> 
            </div>
            <div className='flex item-center justify-center  flex-wrap relative self-stretch w-[80%] lg:h-[98%] md:h-[98%] sm:h-[98%] flex-[0_0_auto] '>               
                <img  className= 'border-l-[20px] border-l-secondary border-b-[20px] rounded-l-full border-b-ControllerPrim shadow-sm flex  relative self-stretch lg:h-[98%] md:h-[98%] sm:h-[98%] w-[96%] flex-[0_0_auto] m-[1%] ' src='/controller/Map.png' alt='Map'/>
            </div>
        </div>
    )
}