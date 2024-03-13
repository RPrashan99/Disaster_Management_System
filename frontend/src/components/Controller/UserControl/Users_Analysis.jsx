import React, { useState } from "react";
import { AnalysisCard } from "./Users_AnalysisCard";

const getData = async () => {
    
}

export const UsersAnalysis = (title, description) => {

    const [newData, setNewData] = useState('');

    return(
        <div className="flex flex-row space-x-3 bg-grey p-2 mt-1">
            {
                AnalysisCard("Users By Distrct","Each Users divided by districts")
            }
            {
                AnalysisCard("New users and admin registration","Newly registered users and appointed admins")
            }
            {
                AnalysisCard("Admins by department","Each admins divided by departments shown below")
            }
        </div>
    )
}