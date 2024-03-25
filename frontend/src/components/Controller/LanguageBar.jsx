import React from 'react'
import { LanguageButtons } from "./LanguageButtons"

export const LanguageBar = () => {
    return(
        <div className="flex items-start justify-between px-[10px] py-[2px] h-[32px] relative self-stretch w-full flex-[0_0_auto] bg-[#6d6969]">
            <LanguageButtons/>
            <div className="relative self-stretch w-[150px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-[#fcfffe] text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
                <h3>Call center 1717</h3>
            </div>
        </div>
    )
}