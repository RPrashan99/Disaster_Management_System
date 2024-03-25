import React, { useEffect, useReducer, useState } from 'react'
import { LanguageBar } from "../../components/Controller/LanguageBar"
import { TitleBar } from "../../components/Controller/TitleBar"
import { HeaderBar } from '../../components/Controller/HeaderBar'
import { DisasterStatusBar } from '../../components/Controller/DisasterStatus/DisasterStatusBar'
import { Disaster_Functions } from '../../components/Controller/DisasterStatus/Disaster_Functions'
import { Disaster_Map } from '../../components/Controller/DisasterStatus/Disaster_Map'
import { getAllReports, getCurrentReports } from '../../services/reportService'

export const DisasterStatusPage = () => {

    const [reports, setReports] = useState([]);
    const [newCurrentData, setNewCurrentData] = useState([]);

    useEffect(() => {
        const fetchReports = async () =>{
            try{
                const newReports = await getAllReports();
                const currentReports = await getCurrentReports();
                setReports(newReports);
                setNewCurrentData(currentReports);
                
            } catch(error){
                console.log("Reports fecth error", error);
            }
        }
        fetchReports();
    },[]);

    useEffect(()=>{
        if(reports) console.log("Reports:",reports);
    },[reports]);

    return(
        <div>
            <LanguageBar/>
            {
                <HeaderBar/>
            }
            <div className="flex w-full justify-center bg-grey mb-2">
                <span className="flex py-1 justify-center text-[25px] font-bold font-Inter">Disaster Status</span>
            </div>
            <DisasterStatusBar reports = {reports} currentReports={newCurrentData}/>
            <Disaster_Functions currentReports = {newCurrentData[0]}/>
            {Disaster_Map(reports,newCurrentData)}
        </div>
    )
}