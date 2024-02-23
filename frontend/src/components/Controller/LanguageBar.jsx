import React from 'react'
import { LanguageButtons } from "./LanguageButtons"

export const LanguageBar = () => {
    return(
        <div className="bg-langGrey py-2 px-6 shadow-md z-10 flex justify-content-center align-items-center">
            <LanguageButtons/>
            <h3 className="ml-auto text-white font-bold">Call center 1717</h3>
        </div>
    )
}