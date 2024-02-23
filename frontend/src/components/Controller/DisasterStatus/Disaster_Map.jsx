import React from "react";
import { Report_Card } from "./Report_Card";
import { Disaster_Map_Card } from "./Disaster_Map_Card";
import { CheckBox } from "@mui/icons-material";

const testValues = [
    'Rathnapura',
    'Palmadulla',
    'Nivithiyagala'
]

export const Disaster_Map = () => {

    return(
        <div className="flex flex-col px-5 py-5">
            <div className="flex font-bold">SELECT DISASTER TO SHOW DETAILS</div>
            <div className="flex flex-row bg-menuBlue w-full px-3 py-3 rounded space-x-3">
                {Report_Card("FLOOD","Rathnupara","3400+","Red")}
                {Report_Card("FLOOD","Badulla","2100+","Red")}
            </div>
            <div className="flex flex-row px-5 py-5 border">
                <div className="flex flex-col bg-mapGreen border space-y-3 px-3 py-3 rounded-l-md">
                    {Disaster_Map_Card("DISASTER TYPE", "FLOOD")}
                    {Disaster_Map_Card("SEVERITY", "HIGH")}

                    <div className="flex flex-col w-[300px] px-5 py-4 bg-white border rounded-md">
                        <div className="flex text-[16px] font-bold">TOTAL AFFECTED</div>
                        <div className="flex flex-row space-x-5 items-center justify-end pe-5">
                            <div className="text-[25px] text-right">3406</div>
                            <div className="text-[15px] text-right bg-mapGreen rounded-full p-1 border">5%</div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[300px] px-5 py-4 bg-white border rounded-md">
                        <div className="flex text-[16px] font-bold pb-2">AFFECTED LOCATIONS</div>
                        <ul className="ps-[120px]">
                            {testValues.map(location => 
                                <li>{location}</li>
                            )}
                        </ul>
                        
                    </div>

                    <div className="flex flex-col w-[300px] px-5 py-4 bg-white border rounded-md">
                        <div className="flex text-[16px] font-bold">TOTAL REQUESTS</div>
                        <div className="flex flex-row space-x-5 items-center justify-end pe-5">
                            <div className="text-[25px] text-right">1522</div>
                            <div className="text-[15px] text-right bg-mapGreen rounded-full border p-1">12%</div>
                        </div>
                    </div>

                    {Disaster_Map_Card("CONFIRMATION", "CONFIRMED")}

                </div>

                <div className="flex flex-col bg-mapGreen border space-y-3 px-3 py-3 rounded-r-md">
                    {Disaster_Map_Card("DISASTER TYPE", "FLOOD")}
                    {Disaster_Map_Card("SHELTER LOCATIONS", "14")}

                    <div className="flex flex-col w-[300px] px-5 py-4 bg-white border rounded-md">
                        <div className="flex text-[16px] font-bold">RESPOND SETTINGS</div>
                        <div className="flex flex-col space-y-5 items-center justify-end">
                            <div className="flex flex-row items-center">
                                <div className="text-[15px] text-right pe-4">RESPOND SENT</div>
                                <CheckBox defaultChecked color="secondary"/>
                                
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="text-[15px] text-right pe-4">ALERT SENT</div>
                                <CheckBox defaultChecked color="secondary"/>
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[300px] px-5 py-4 bg-white border rounded-md">
                        <div className="flex text-[16px] font-bold">TOTAL REQUESTS</div>
                        <div className="flex flex-row space-x-5 items-center justify-end pe-5">
                            <div className="text-[25px] text-right">1522</div>
                            <div className="text-[15px] text-right bg-mapGreen rounded-full border p-1">12%</div>
                        </div>
                    </div>

                    {Disaster_Map_Card("CONFIRMATION", "CONFIRMED")}

                </div>
            </div>
        </div>
    )
}