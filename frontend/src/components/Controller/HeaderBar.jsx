import React, {useState}  from 'react'
import { TitleBar } from "./TitleBar"
import { MainMenuBar } from './MainMenuBar'

export const HeaderBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className='flex flex-row items-start justify-between px-0 py-[0px]  self-stretch h-full w-full flex-[0_0_auto]'>
            <img className="flex flex-col md:w-[110px] lg:w-[120px]  sm:w-[100px] relative self-stretch w-[110px] h-[100px] object-cover" src="/controller/logo_us.png" alt="logo_us"/>
            <div className="flex flex-col md:justify-center  w-[80%] flex-wrap relative grow">
                <TitleBar/>
                <div className="flex flex-grow items-start md:justify-center gap-[0] p-[2px] relative self-stretch w-full flex-[0_0_auto]">
                <div className=" text-xl container justify-end mx-auto  md:px-14 p-1 max-w-full flex flex-wrap bg-ControllerPrim w-full px-10 py-0.5 border-b-[10px] border-secondary">
                    <MainMenuBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>       
                    {/* Items for mobile nav links */}
                    <div
                        className={`space-y-2 fixed z-50 right-0 mt-10 w-[200px] mb-10 rounded-l-lg text-center justify-end items-center py-3 bg-[#e4e2e2] shadow-2xl border-[4px] border-secondary ${
                        isMenuOpen ? " h-[25%] pl-10 w-[200px] block text-center justify-center items-cente hover:bg-[#ffffff] mb-10" : "hidden"
                        }`}>
      
                        <ul className=" flex flex-col gap-1 relative justify-center w-full !mt-[8.00px] !text-[#525151] !text-[14px]  ![font-family:'Inter',Helvetica]  items-start mb-5 ">
                            <li>
                                <a className="flex relative transform w-full hover:font-bold bg-transparent text-[#474747]  hover:text-black" href="/"> Home </a>
                            </li>
                            <li>
                                <a className="flex relative transform transition-transform hover:font-bold  w-full bg-transparent text-[#474747]  hover:text-black hover:bg-transparent " href="#"> Disaster Status </a>
                            </li>
                            <li>
                                <a className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparent text-[#474747]  hover:text-black hover:bg-transparen transition " href="#"> Requests </a>
                            </li>
                            <li>
                                <a className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparent text-[#474747]  hover:text-black  hover:bg-transparent transition" href="#"> Disaster Map </a>
                            </li>
                            <li>
                                <a className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent text-[#474747]  hover:text-black transition " href="#"> User Control </a>
                            </li>
                        </ul>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}