import React from 'react'
export const Disaster = () => {
    return(
        <div className='flex flex-row relative justify-center items-center h-[30%] w-[100%] m-[0.8%] bg-gradient-to-r from-ControllerPrim via-[#464545] to-ControllerSec self-stretch flex-wrap md:text-wrap sm:text-wrap'>
            <div className='flex relative p-[2%] h-[90%] m-[1%] w-[23%] bg-[transparent]'>
                <img className='flex relative w-fit rounded-[20px]' src="/controller/Fire.png" alt="fire"/>
            </div>
            <div className='flex flex-col rounded-[15%] lg:text-[16px] md:text-[14p] md:max-xl-flex sm:max-xl:flex sm:text-[11px] relative p-[2%] h-[90%] m-[1%] w-[23%] bg-[#e4dcdc]'>
                <div>
                    <h3 className='flex relative font-medium'> Disaster Type</h3>
                    <a className='flex relative text-[12px]  text-[#e42e2e] font-medium'>Flood</a>
                </div>
                <div>
                    <h3 className='flex relative font-medium'>Severity</h3>
                    <a className='flex relative text-wrap text-[12px] text-[#e42e2e] font-medium '>Dangeorous</a>
                </div>
            </div>
            <div className='flex flex-col rounded-[15%] lg:text-[16px] md:text-[14p] sm:text-[11px] relative p-[2%] h-[90%] w-[23%] m-[1%] bg-[#e4dddd]'>
                    <h3 className='flex relative font-medium'>Affected Locations</h3>
                    <ul className='flex flex-col relative list-none text-[#e42e2e] font-medium text-[12px]'>
                        <li>Galle</li>
                        <li>Colombo</li>
                    </ul>
            </div>
            <div className='flex flex-col rounded-[15%] lg:text-[16px] md:text-[14p] sm:text-[11px] justify-center gap-[1%]  text-wrap relative p-[2%] h-[90%] w-[23%] m-[1%] mb- bg-[#e4dddd]'>
                    <h3 className='flex relative font-medium'>Requests</h3>
                    <input className='flex relative item-center rounded-[20px] text-center  h-[50%] p-[5%]' placeholder='requests'></input>
            </div>

        </div>

    )
}