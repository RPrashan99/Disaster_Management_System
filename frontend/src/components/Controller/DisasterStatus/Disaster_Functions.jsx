import React, { useEffect } from "react"
import { Card_Button } from "../../Common/Card_Button"

export const Disaster_Functions = (props) => {

    const {currentReports} = props;

    useEffect(()=>{
        if(currentReports) console.log("CurrentReports: ", currentReports);
    },[currentReports])

    return(
        <div className="flex flex-row w-full h-[90px] justify-center bg-grey py-1 space-x-3">
            <Card_Button main_text={"Add New Disaster Report"} 
                other_text={"Insert new report to the database"} 
                path_img={"../controller/Add.png"}
                type={"Add"}/>
            <div className="flex flex-row bg-white w-[590px] rounded-lg ps-10 shadow">
                <div className="flex flex-col w-full justify-center space-y-3">
                    <div className="font-bold">Latest report added</div>
                    <div className="mx-auto">{currentReports ? `${currentReports.disasterType} - ${currentReports.disasterLocation}` : "Data Loading.."}</div>
                </div>
                <div className="flex flex-col w-full border-l-2 justify-center space-y-3 border">
                    <div className="font-bold ps-10">Last Report Submission</div>
                    <div className="flex justify-center">{currentReports ? currentReports.createdDate : "Data Loading.."}</div>
                </div>
            </div>
            <Card_Button main_text={"Edit Disaster Report"} 
                other_text={"Change or add new details to the existing report"} 
                path_img={"../controller/pen_squared.png"}
                type={"Edit"}/>
        </div>
    )
}