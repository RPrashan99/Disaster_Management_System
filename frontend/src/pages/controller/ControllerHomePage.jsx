import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { DisasterStatus } from "../../components/Controller/Home/DisasterStatus";
import { Map } from "../../components/Controller/Home/Map"
import { Menues } from "../../components/Controller/Home/Menues";
import { Footer } from "../../components/Controller/Footer"
import { WindowComponent } from "../../Windows/RequestWindow";

export const ControllerHomePage = () => {
    return(
        <div className="flex justify-content-center flex-col h-full w-full items-start relative bg-[#ffffff] border-0 border-none" >
            <div className=" flex flex-col items-start justify-between  relative self-stretch flex-[0_0_auto]">
                <div className="flex flex-row items-start justify-between  relative self-stretch w-full flex-[0_0_auto] ">
                    <LanguageBar/>
                </div>
                <div className="flex flex-grow items-start justify-content-center px-0 py-[5px] relative self-stretch flex-[0_0_auto]"> 
                    <HeaderBar/>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 font-sans md:grid-cols-2 sm:grid-cols-1 w-full  bg-ControllerPrim h-full grid-cols-1 self-stretch ">
                <div className="flex bg-[#ffffff] self-stretch lg:h-[500px] md:h-[400px] sm:h-[400px]">
                    <DisasterStatus/>
                </div >

                <div className="flex flex-row shadow-sm bg-[#ffffff] rounded-l-[50%]
                    self-stretch lg:h-[500px] md:h-[400px] sm:h-[400px] ">
                    <Map/>
                </div>  
            </div>
                <Menues/>
                <Footer/>

        </div>

    )

}