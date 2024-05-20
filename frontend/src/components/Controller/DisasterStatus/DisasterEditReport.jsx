import React, { useEffect, useState } from "react";
import { HeaderBar } from "../HeaderBar";
import { LanguageBar } from "../LanguageBar";
import TextField from '@mui/material/TextField';
import { Button, Snackbar } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { editReport, getCurrentReports, insertReport } from "../../../services/reportService";

const disasterReports = [
    {reportID: "id_1", reportName: 'report_1'}, 
    {reportID: "id_2", reportName: 'report_2'},
    {reportID: "id_3", reportName: 'report_3'}
];

export const EditReport = () =>{

    const [open, setOpen] = useState(false);
    const [newReports, setNewReports] = useState('');
    const [reports, setReports] = useState('');
    const [selectedReport, setSelectedReport] = useState(null);
    const [selectedInputReport, setSelectedInputReport] = useState();
    const [snackMessage, setSnackMessage] = useState({message: "", severity:""});

    const handleClose= () =>{
        setOpen(false);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setSelectedInputReport((prevDetails) => ({ ...prevDetails, [name]: value }));
    }

    const handleRequests = () =>{
        
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const result = await editReport(selectedInputReport);
            console.log("Submit form result: ", result);
            setOpen(true);
        } catch(error){
            console.log(error);
        }
    };

    const changeSelected = (report) =>{
        setSelectedReport(report);
        setSelectedInputReport(reports.find(dReport => dReport.reportID == report.reportID));
    }

    useEffect(()=>{
        const fetchReports = async () =>{
            try{
                const currentReports = await getCurrentReports();
                const newDataArray = currentReports.map((dr) => ({
                    reportID: dr.reportID,
                    reportName: `${dr.disasterType} - ${dr.disasterLocation} - ${dr.createdDate}`,
                }));
                setReports(currentReports);
                setNewReports(newDataArray);
                
            } catch(error){
                console.log("Reports fecth error", error);
            }
        }
        fetchReports();
    },[]);

    useEffect(() =>{
        if(reports) {
            console.log("Reports for edit: ", reports);
        }
    },[reports])

    useEffect(() =>{
        if(selectedInputReport) console.log("Report to edit: ", selectedInputReport);
    },[selectedInputReport])

    return(
        <div className="flex flex-col">
            <LanguageBar/>
            {
                <HeaderBar/>
            }
            <div className="flex w-full justify-center bg-grey mb-2">
                <span className="flex py-1 justify-center text-[25px] font-bold font-Inter">Disaster Status</span>
            </div>
            <div className="flex flex-col bg-menuBlue py-2 justify-center items-center">
                <div className="flex flex-row justify-center items-center space-x-5 bg-white p-2 rounded mb-2 w-full">
                    <div className="text-black font-bold">Select Disaster Report to edit</div>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={newReports}
                        getOptionLabel={(disasterReport) => disasterReport.reportName}
                        sx={{ width: 400 }}
                        renderInput={(params) => <TextField {...params} label="Disaster Report" />}
                        value={selectedReport}
                        onChange={(event, newValue)=>{
                            changeSelected(newValue);
                        }}
                    />
                </div>
                {
                    selectedInputReport && 
                    <div className="flex-col items-center justify-center bg-white space-y-1 px-3 rounded-md">
                        <div className="flex text-[30px] text-white font-bold justify-center bg-reportTitleBg rounded-b-md shadow">Disaster Report</div>
                        <form onSubmit={onSubmitForm} className="p-2">
                            <div className="flex flex-col space-y-5">
                                <div className="grid grid-cols-2 gap-4 bg-grey p-2 rounded">
                                    <div className="flex flex-col space-y-3 bg-white p-1">
                                        <div className="flex justify-center bg-grey text-center text-[20px] font-bold shadow">
                                            Disaster Details
                                        </div>
                                        <div className="flex font-bold">Disaster Type : </div>
                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="disasterType"
                                            value={selectedInputReport.disasterType}
                                            onChange={handleChange}
                                            required
                                            disabled
                                            >
                                            <option value="">Select Disaster Type</option>
                                            <option value="Flood">Flood</option>
                                            <option value="Tsunami">Tsunami</option>
                                            <option value="Extreme Wind">Extreme Wind</option>
                                            <option value="Drought">Drought</option>
                                            <option value="Extreme Wind">Extreme Wind</option>
                                            <option value="Earthquake">Earthquake</option>
                                        </select>

                                        <div className="flex font-bold">Severity</div>
                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="severity"
                                            value={selectedInputReport.severity}
                                            onChange={handleChange}
                                            required
                                            >
                                            <option value="">Select Severity</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                        <div className="flex font-bold">Disaster Locations</div>
                                        <input type="text" name="disasterLocation" 
                                            value={selectedInputReport.disasterLocation} 
                                            onChange={handleChange} required disabled />
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex flex-col space-y-3 bg-white p-1">
                                            <div className="flex justify-center bg-grey text-center text-[20px] font-bold shadow">
                                                Affected Details
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 items-center">
                                                <div className="flex font-bold justify-center">Affected Count</div>
                                                <input className="" type="number" name="affectedCount"
                                                    value={selectedInputReport.affectedCount} 
                                                    onChange={handleChange} required />
                                                <div className="flex font-bold justify-center">Total Requests</div>
                                                <div className="flex text-[18px] text-white font-bold bg-langGrey justify-center rounded">{selectedInputReport.disasterRequests.length}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-3 bg-white p-1">
                                            <div className="flex justify-center bg-grey text-center text-[20px] font-bold shadow">
                                                Report Details
                                            </div>
                                            <div className="grid grid-col-2">
                                                <div className="flex font-bold">Created Date</div>
                                                <input type="text" name="createdDate" value={selectedInputReport.createdDate} readOnly/>
                                                <div className="flex font-bold">Last Updated</div>
                                                <input type="text" name="updatedDate" value={selectedInputReport.updatedDate} readOnly/>
                                                <div className="flex font-bold">Finished</div>
                                                <select
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    name="finished"
                                                    value={selectedInputReport.finished}
                                                    onChange={handleChange}
                                                    required
                                                    >
                                                    <option value="">Select Status</option>
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center space-x-5">
                                    <Button variant="contained"
                                        onClick={handleRequests}>
                                        Sync Requests
                                    </Button>
                                    <Button variant="contained"
                                        onClick={onSubmitForm}>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{ vertical: 'bottom', horizontal:'center' }}
                            open={open}
                            onClose={handleClose}
                            message="Report edited!"
                        />
                    </div>
                }
            </div>
        </div>
    )
}