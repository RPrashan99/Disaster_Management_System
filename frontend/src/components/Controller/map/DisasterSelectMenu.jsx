import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getCurrentReports } from "../../../services/reportService";

export const DisasterSelectMenu = (props) => {

    const { reports, reportsArray, setSelected } = props;

    const [selectedReport, setSelectedReport] = useState(null);
    const [selectedInputReport, setSelectedInputReport] = useState();

    const changeSelected = (report) => {
        setSelectedReport(report);
        if (Array.isArray(reports)) {
            setSelectedInputReport(reports.find(dReport => dReport.reportID == report.reportID));
            setSelected(reports.find(dReport => dReport.reportID == report.reportID));
        } else {
            console.log("Report selected: ", reports);
            setSelectedInputReport(reports);
            setSelected(reports);
        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className="flex flex-col space-y-2 pb-3">
            <div>Select disaster</div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={reportsArray}
                getOptionLabel={(disasterReport) => disasterReport.reportName}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Disaster" />}
                value={selectedReport}
                onChange={(event, newValue) => {
                    changeSelected(newValue);
                }}
            />
        </div>
    )
}