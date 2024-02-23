import React from 'react'
import { TitleBar } from "./TitleBar"
import { MainMenuBar } from './MainMenuBar'

export const HeaderBar = () => {
    return(
        <div className="flex flex-row ps-5 border">
            <img className="h-[120px]" src="/controller/logo_us.png" alt="logo_us"/>
            <div className="w-full">
                <TitleBar/>
                <MainMenuBar/>
            </div>
        </div>
    )
}