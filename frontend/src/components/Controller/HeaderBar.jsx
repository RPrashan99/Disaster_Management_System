import React, {useState}  from 'react'
import { TitleBar } from "./TitleBar"
import { MainMenuBar } from './MainMenuBar'

export const HeaderBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className='flex flex-row items-start justify-between px-0 py-[5px] self-stretch h-full w-full flex-[0_0_auto]'>
            <img className="flex flex-col md:w-[90px] lg:w-[120px] sm:w-[70px] relative self-stretch w-[120px] h-full object-cover" src="/controller/logo_us.png" alt="logo_us"/>
            <div className="flex flex-col md:justify-center w-[80%] flex-wrap relative grow">
                <TitleBar/>
                <div className="flex flex-grow items-start md:justify-center gap-[0] p-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className=" text-x1 container justify-end mx-auto md:px-14 p-1 max-w-full flex flex-wrap bg-ControllerPrim w-full px-10 py-2 border-b-[10px] border-secondary">
                    <MainMenuBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>       
                    {/* Items for mobile nav links */}
                    <div
                        className={`space-y-2 fixed z-50 right-0 mt-10 w-[250px] mb-10 rounded-l-lg text-center justify-end items-center py-3 bg-ControllerSec shadow-2xl border-[2px] border-[white] ${
                        isMenuOpen ? " h-[25%] pl-20 w-[250px] block text-center justify-center items-cente hover:bg-[#474747] mb-5" : "hidden"
                        }`}>
      
                        <ul className=" flex flex-col gap-1 relative justify-center w-full !mt-[8.00px] !text-[#525151] !text-[14px]  ![font-family:'Inter',Helvetica]  items-start mb-5 ">
                            <li>
                                <a className="flex relative transform w-full hover:font-bold bg-transparent text-gray-300  hover:text-white" href="/"> Home </a>
                            </li>
                            <li>
                                <a className="flex relative transform transition-transform hover:font-bold  w-full bg-transparent text-gray-300 hover:bg-transparent hover:text-white" href="#"> Disaster Status </a>
                            </li>
                            <li>
                                <a className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparent text-gray-300 hover:bg-transparen transition hover:text-white" href="#"> Requests </a>
                            </li>
                            <li>
                                <a className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparent  hover:bg-transparent text-gray-300 transition hover:text-white" href="#"> Disaster Map </a>
                            </li>
                            <li>
                                <a className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent text-gray-300 transition hover:text-white" href="#"> User Control </a>
                            </li>
                        </ul>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}