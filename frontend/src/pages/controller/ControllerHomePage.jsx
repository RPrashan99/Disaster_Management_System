import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { Menues } from "../../components/Controller/Home/Menues";
import { Footer } from "../../components/Controller/Footer"
import Weather from "../../components/Controller/Weather/Weather";
import { GoogleMap } from "../../components/Controller/Home/GoogleMap";

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
            <div className="grid lg:grid-cols-1 font-sans md:grid-cols-1 sm:grid-cols-1 w-full bg-gray-400 h-full grid-cols-1 self-stretch ">
                <div className="flex flex-row shadow-sm mx-[2%] rounded-[20%] self-stretch lg:h-[500px] md:h-[400px] sm:h-[400px] w-[96%]">
                    <GoogleMap/>
                </div>  
            </div>
            <Menues/>
            <div className="w-full">
                <Weather/>
            </div>  
            <Footer/>
  

        </div>

    )

}
