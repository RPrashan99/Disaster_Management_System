import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Snackbar } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { LanguageBar } from "../LanguageBar";
import { HeaderBar } from "../HeaderBar";
import { insertReport } from "../../../services/reportService";
import { getUnverifiedRequests, setVerifyRequests } from "../../../services/requestService";
import { getGeoCode } from "../../../services/mapService";

export const ReportForm = () => {

    const [details, setDetails] = useState('');
    const [open, setOpen] = useState(false);
    const [sync, setSync] = useState(false);
    const [numOfRequests, setNumOfRequests] = useState(0);
    const [disable, setDisable] = useState(false);
    const [snackMessage, setSnackMessage] = useState({ message: "", severity: "" });
    const [todayDate, setTodayDate] = useState("2024/01/01");

    const navigate = useNavigate();

    const dateDifference = 3;

    const handleClose = () => {
        setOpen(false);
    }

    const extractLatLang = async(location) =>{
        const result = await getGeoCode(location);
        const lat = result.results[0].geometry.location.lat;
        const lang = result.results[0].geometry.location.lng;
        const marker = {latitude:lat, longitude:lang};
        return marker;
      }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'affectedCount' && value < 0) {
            setDetails((prevDetails) => ({ ...prevDetails, [name]: 0 }));
        } else {
            setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
        }

    }

    //need testing
    const handleRequests = async (date) => {
        const getRequests = async () => {
            const requests = await getUnverifiedRequests();
            console.log("requests: ", requests);
            const today = new Date();

            if (requests != null) {
                const filteredRequests = requests
                    .filter(request => (request.disasterType == details.disasterType) && (request.disasterLocation == details.disasterLocation))
                    .map(request => request.requestID);

                console.log("filtered requests: ", filteredRequests);

                return filteredRequests;
            } else {
                return requests;
            }
        }
        if (details.disasterType != null && details.disasterLocation != null) {
            setDisable(true);
            setSync(true);
            const requests = await getRequests(date);
            setNumOfRequests(requests.length);
            setDetails((prevDetails) => ({ ...prevDetails, ["disasterRequests"]: requests }));

            const reportLatLang = await extractLatLang(details.disasterLocation);
            console.log(reportLatLang);
            if (reportLatLang != null) {
                setDetails((prevDetails) => ({ ...prevDetails, ["affectedLocations"]: reportLatLang }));
                console.log("Report details: ", details);
            }

            setSync(false);

            if (requests.length == 0) {
                const message = { message: "No current requests!", severity: "error" };
                setSnackMessage(message);
            }
            console.log("Sync success");
        } else {
            const message = { message: "Please provide disaster type and location!", severity: "error" };
            setSnackMessage(message);
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (details.disasterType != null && details.severity != null
            && details.disasterLocation != null && details.affectedCount != null && details.finished != null) {
            try {
                const result = await insertReport(details);

                if (details.disasterRequests.length != 0) {
                    const resultVerify = await setVerifyRequests(details.disasterRequests);
                    console.log("Request verify result: ", resultVerify);
                }
                const message = { message: "Report submit success!", severity: "success" };
                setSnackMessage(message);
                console.log("Submit form result: ", result);
                navigate('/controller/status');
            } catch (error) {
                console.log(error);
            }
        } else {
            const message = { message: "Please fill all the fields!", severity: "error" };
            setSnackMessage(message);
        }
    };

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}/${month}/${day}`;

        setTodayDate(formattedDate);
    }, [])

    useEffect(() => {
        if (snackMessage.message != "") {
            setOpen(true);
        }
    }, [snackMessage])

    return (
        <div className="flex flex-col">
            <LanguageBar />
            {
                <HeaderBar />
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
                                        disabled={disable}
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
                                    <input type="text" name="disasterLocation" disabled={disable} value={details.disasterLocation} onChange={handleChange} required />
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
                                            <div className="flex text-[18px] text-white font-bold bg-langGrey justify-center rounded">{numOfRequests}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-3 bg-white p-1">
                                        <div className="flex justify-center bg-grey text-center text-[20px] font-bold shadow">
                                            Report Details
                                        </div>
                                        <div className="grid grid-col-2">
                                            <div className="flex font-bold">Created Date</div>
                                            <input type="text" name="createdDate" disabled value={todayDate} />
                                            <div className="flex font-bold">Last Updated</div>
                                            <input type="text" name="updatedDate" disabled value={todayDate} />
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
                                {/*<Button variant="contained"
                                    onClick={handleRequests}>
                                    Sync Requests
                                </Button>*/}
                                <LoadingButton
                                    size="small"
                                    onClick={handleRequests}
                                    endIcon={<SyncAltIcon />}
                                    loading={sync}
                                    loadingPosition="end"
                                    variant="contained"
                                > <span>Sync Requests</span></LoadingButton>
                                <Button variant="contained"
                                    onClick={onSubmitForm}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={open}
                        onClose={handleClose}
                        autoHideDuration={1800}
                    >
                        <Alert
                            onClose={handleClose}
                            severity={snackMessage.severity}
                            variant="filled"
                            sx={{ width: '100%' }}
                        >{snackMessage.message}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    )
}