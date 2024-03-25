import React, { useEffect, useState } from "react";
import { Button, Snackbar } from "@mui/material";
import { LanguageBar } from "../LanguageBar";
import { HeaderBar } from "../HeaderBar";
import { insertReport } from "../../../services/reportService";

export const ReportForm = () => {

    const [details, setDetails] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose= () =>{
        setOpen(false);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }

    const handleRequests = () =>{
        
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const result = await insertReport(details);
            console.log("Submit form result: ", result);
        } catch(error){
            console.log(error);
        }
    };

    return(
        <div className="flex flex-col">
            <LanguageBar/>
            {
                <HeaderBar/>
            }
            <div className="flex w-full justify-center bg-grey mb-2">
                <span className="flex py-1 justify-center text-[25px] font-bold font-Inter">Disaster Status</span>
            </div>
            <div className="flex justify-center bg-menuBlue py-2">
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
                                        value={details.disasterType}
                                        onChange={handleChange}
                                        required
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
                                        value={details.severity}
                                        onChange={handleChange}
                                        required
                                        >
                                        <option value="">Select Severity</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                    <div className="flex font-bold">Disaster Locations</div>
                                    <input type="text" name="disasterLocation" value={details.disasterLocation} onChange={handleChange} required />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <div className="flex flex-col space-y-3 bg-white p-1">
                                        <div className="flex justify-center bg-grey text-center text-[20px] font-bold shadow">
                                            Affected Details
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 items-center">
                                            <div className="flex font-bold justify-center">Affected Count</div>
                                            <input type="number" name="affectedCount" value={details.affectedCount} onChange={handleChange} required />
                                            <div className="flex font-bold justify-center">Total Requests</div>
                                            <div className="flex text-[18px] text-white font-bold bg-langGrey justify-center rounded">15</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 bg-white p-1">
                                        <div className="flex justify-center bg-grey text-center text-[20px] font-bold shadow">
                                            Report Details
                                        </div>
                                        <div className="grid grid-col-2">
                                            <div className="flex font-bold">Created Date</div>
                                            <input type="text" name="createdDate" onChange={handleChange} />
                                            <div className="flex font-bold">Last Updated</div>
                                            <input type="text" name="updatedDate" onChange={handleChange} />
                                            <div className="flex font-bold">Finished</div>
                                            <select
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                name="finished"
                                                value={details.finished}
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
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal:'center' }}
                        open={open}
                        onClose={handleClose}
                        message="Report submitted!"
                    />
                </div>
            </div>
        </div>
    )
}