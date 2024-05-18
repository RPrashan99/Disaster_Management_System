import React, {useEffect, useState} from "react";

const testDisaster = {
    'disasterType': "Flood",
    'disasterLocation': "Kalutara",
    'affectedCount': 250,
    'severity': "Medium",
};

export const TestReport_Card = (props) => {

    const {report, onClick, isSelected, key} = props;

    const handleClick = () =>{
        onClick(report);
    };

    return(
        <div tabIndex={0} key={key} className={`flex flex-row ps-5 min-w-[200px] w-[250px] rounded-lg shadow-md hover:ring ${isSelected ? 'bg-white outline':'bg-slate-300'}`}
            onClick={handleClick}>
            <div className="flex flex-col w-full justify-center">
                <div className="flex text-[20px] font-bold pb-3 justify-center line-clamp-1">{report.disasterType}</div>
                <div className="flex text-[10px]">Location</div>
                <div className="flex text-[15px] mx-auto">{report.disasterLocation}</div>
            </div>
            <div className="flex flex-col w-full border-l-2 pb-1">
                <div className="flex flex-col h-full ps-2 pt-1">
                    <div className="flex text-[10px]">Total affected</div>
                    <div className="flex text-[20px] justify-center">{report.affectedCount}</div>
                </div>
                <div className="flex flex-col h-full ps-2 border-t-2">
                    <div className="flex text-[10px]">Severity</div>
                    <div className="flex text-[20px] justify-center">{report.severity}</div>
                </div>
            </div>
        </div>
    )
}