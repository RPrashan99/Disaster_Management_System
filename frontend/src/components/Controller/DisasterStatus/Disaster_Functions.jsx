import React from "react"
import { Card_Button } from "../../Common/Card_Button"

export const Disaster_Functions = () => {
    return(
        <div className="flex flex-row w-full h-[90px] justify-center bg-grey py-1 space-x-3">
            {Card_Button("Add New Disaster Report", "Insert new report to the database", "../controller/Add.png")}
            <div className="flex flex-row bg-white w-[590px] rounded-lg ps-10 shadow">
                <div className="flex flex-col w-full justify-center space-y-3">
                    <div className="font-bold">Latest report added</div>
                    <div className="mx-auto">Flood-Rathnapura</div>
                </div>
                <div className="flex flex-col w-full border-l-2 justify-center space-y-3 ps-10 border">
                    <div className="font-bold">Last Report Submission</div>
                    <div className="mx-auto">2023/12/09 06.30 A.M</div>
                </div>
            </div>
            {Card_Button("Edit Disaster Report","Change or add new details to the existing report", "../controller/pen_squared.png" )}
        </div>
    )
}