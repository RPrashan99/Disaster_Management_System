import React from 'react'
import { LanguageBar } from "../../components/Controller/LanguageBar"
import { TitleBar } from "../../components/Controller/TitleBar"
import { HeaderBar } from '../../components/Controller/HeaderBar'
import { DisasterStatusBar } from '../../components/Controller/DisasterStatus/DisasterStatusBar'
import { Disaster_Functions } from '../../components/Controller/DisasterStatus/Disaster_Functions'
import { Disaster_Map } from '../../components/Controller/DisasterStatus/Disaster_Map'

export const DisasterStatusPage = () => {
    return(
        <div>
            <LanguageBar/>
            {
                <HeaderBar/>
            }
            <div className="flex w-full justify-center bg-grey mb-2">
                <span className="flex py-1 justify-center text-[25px] font-bold">Disaster Status</span>
            </div>
            <DisasterStatusBar/>
            <Disaster_Functions/>
            <Disaster_Map/>
        </div>
    )
}