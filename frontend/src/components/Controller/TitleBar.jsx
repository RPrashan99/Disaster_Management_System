import React from 'react'
import { SearchBar } from "./SearchBar"

export const TitleBar = () => {
    return(
        <div className="w-25 h-15 flex flex-row align-items-center py-2 ps-10 border">
            <h3 className="flex text-titleBlue text-lg font-bold pe-5 pt-1">Disaster Management Center</h3>
            <img className="flex w-50 h-8" src="/controller/logo_main.png" alt='logo_main'/>
            <div className="flex ml-auto pe-5">
                <SearchBar/>
            </div>
        </div>
    )
}