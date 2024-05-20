import React, { useEffect, useState, useReducer, useRef } from "react";
import { Report_Card } from "./Report_Card";
import { Disaster_Map_Card } from "./Disaster_Map_Card";
import { IconButton, Button, Checkbox, Collapse } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getCurrentReports } from "../../../services/reportService";
import { TestReport_Card } from "./testReportCard";
import { GoogleMap } from "./Disaster_GoogleMap";
import { BarChart } from '@mui/x-charts/BarChart';
import { ModelAffectedAdd } from "./ModelAffectedAdd";
//import { MapContainer } from "./Disaster_GoogleMap";

const testValues = [
    "Rathnapura",
    "Palmadulla",
    "Nivithiyagala"
];

const dataset = [
    {
        date: '01',
        count: 34,
    },
    {
        date: '02',
        count: 23,
    },
    {
        date: '03',
        count: 12,
    },
    {
        date: '04',
        count: 5,
    },
    {
        date: '05',
        count: 6,
    },
    {
        date: '06',
        count: 1,
    },

];

export const Disaster_Map = (fetchedReports, currentReports) => {

    const [reports, setReports] = useState('');
    const [ongoingReports, setOngoingReports] = useState('');
    const [selectedReport, setSelectedReport] = useState('');
    const [addAffected, setAddAffected] = useState(false);
    const formRef = useRef(null);

    const addAffectedClose = () => {
        setAddAffected(!addAffected);
    }

    useEffect(() => {
        if (fetchedReports) {
            setReports(fetchedReports);
            setSelectedReport(fetchedReports[0]);
            console.log("Selected Report: ", selectedReport);
        }
    }, [fetchedReports]);

    useEffect(() => {
        if (currentReports) {
            setOngoingReports(currentReports);
            setSelectedReport(currentReports[0]);
            console.log("Selected Report: ", selectedReport);
        }
    }, [currentReports]);

    const handleReportClick = (report) => {
        setSelectedReport(report);
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        console.log("Selected Report: ", selectedReport);
    };

    const handlePenClick = (value) => {
        if (value == "Alert") console.log("Alert button pressed !");
        else console.log("Respond button pressed !");
    };

    return (
        <div className="flex flex-col px-5 py-3">
            <div className="flex font-bold">SELECT DISASTER TO SHOW DETAILS</div>
            <div className="flex flex-row bg-menuBlue w-full h-[140px] px-3 py-3 rounded space-x-3 overflow-auto">
                {
                    ongoingReports && ongoingReports.map((report, index) =>
                        <TestReport_Card key={index} report={report} onClick={
                            (Selected) => {
                                handleReportClick(Selected)
                            }
                        }
                            isSelected={
                                report == selectedReport ? true : false
                            } />
                    )
                }
            </div>
            {
                selectedReport &&
                <div className="flex flex-row px-5 py-1 border" ref={formRef}>
                    <div className="flex flex-col bg-mapGreen border space-y-3 px-3 py-3 rounded-l-md">
                        {Disaster_Map_Card("DISASTER TYPE", selectedReport.disasterType)}
                        {Disaster_Map_Card("SEVERITY", selectedReport.severity)}

                        <div className="flex flex-col w-[300px] px-5 py-3 bg-white border rounded-md">
                            <div className="flex text-[16px] font-bold">TOTAL AFFECTED</div>
                            <div className="flex flex-row space-x-5 items-center justify-end pe-5">
                                <div className="text-[25px] text-right">{selectedReport.affectedCount}</div>
                                <div className="text-[15px] text-right bg-mapGreen rounded-full p-1 border">5%</div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[300px] px-5 py-3 bg-white border rounded-md">
                            <div className="flex text-[16px] font-bold pb-2">AFFECTED LOCATIONS</div>
                            <ul className="ps-[120px]">
                                {selectedReport.disasterLocation.map(name =>
                                    <li>{name}</li>
                                )}
                            </ul>

                        </div>

                        <div className="flex flex-col w-[300px] px-5 py-3 bg-white border rounded-md">
                            <div className="flex text-[16px] font-bold">TOTAL REQUESTS</div>
                            <div className="flex flex-row space-x-5 items-center justify-end pe-5">
                                <div className="text-[25px] text-right">1522</div>
                                <div className="text-[15px] text-right bg-mapGreen rounded-full border p-1">12%</div>
                            </div>
                        </div>

                        {Disaster_Map_Card("CONFIRMATION", selectedReport.confirmed ? "Confirmed" : "Not Confirmed")}

                    </div>

                    <GoogleMap location={selectedReport.disasterLocation} />

                    <div className="flex flex-col bg-mapGreen border space-y-3 px-3 py-3 rounded-r-md">
                        <div className="flex flex-col w-[300px] px-5 py-3 bg-white border rounded-md relative">
                            <div className="flex text-[16px] font-bold">Afftected Details</div>
                            <BarChart
                                dataset={dataset}
                                xAxis={[{ scaleType: 'band', dataKey: 'date' }]}
                                series={[{ dataKey: 'count' }]}
                                width={300}
                                height={200}
                            />
                            <div className="absolute top-0 right-0">
                                <Button onClick={addAffectedClose}>
                                    <AddCircleIcon fontSize="large"/>
                                </Button>
                            </div>


                            <Collapse in={addAffected}
                                mountOnEnter
                                unmountOnExit>
                                <ModelAffectedAdd />
                            </Collapse>
                        </div>
                        {Disaster_Map_Card("SHELTER LOCATIONS", "None")}

                        <div className="flex flex-col w-[300px] px-5 py-3 bg-white border rounded-md">
                            <div className="flex text-[16px] font-bold">RESPOND SETTINGS</div>
                            <div className="flex flex-col space-y-2 items-end pt-3 pe-3">
                                <div className="flex flex-row items-center">
                                    <div className="text-[15px] text-right pe-4">RESPOND SENT</div>
                                    <Checkbox color="secondary"
                                        checked={selectedReport.respondSent}
                                        disabled />
                                    <IconButton onClick={() => { handlePenClick("Respond") }}>
                                        <CreateIcon />
                                    </IconButton>

                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="text-[15px] text-right pe-4">ALERT SENT</div>
                                    <Checkbox color="secondary"
                                        checked={selectedReport.alertSent}
                                        disabled />
                                    <IconButton onClick={() => { handlePenClick("Alert") }}>
                                        <CreateIcon />
                                    </IconButton>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[300px] px-5 py-3 bg-white border rounded-md">
                            <div className="flex text-[16px] font-bold">RESPOND SETTINGS</div>
                            <div className="flex flex-col items-end space-y-2 pt-3 pe-1">
                                <div className="flex flex-row items-center">
                                    <div className="text-[15px] text-right pe-4">EVACUATION ROUTES</div>
                                    <Button variant="contained" color="secondary">
                                        ADD
                                    </Button>

                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="text-[15px] text-right pe-4">ROAD CLOSURES</div>
                                    <Button variant="contained" color="secondary">
                                        ADD
                                    </Button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}