import { Button, TextField, Alert, Snackbar } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useEffect, useState } from "react";
import { addRoadClose } from "../../../services/roadCloseService";

export const RoadClosureMenu = (props) => {
    const { latLang, selectLocation } = props;

    const [location, setLocation] = useState({ latitude: '', longitude: '' });

    const [details, setDetails] = useState('');

    const [disableAdd, setDisableAdd] = useState(true);

    //snackbar
    const [open, setOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState({ message: "", severity: "" });

    const maxLength = 12;

    //snackbar
    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (value) => {
        setDetails(value);
    }

    const handleSubmit = async () => {
        if (location != null && details != '') {
            const detail = {
                closeLatLang: location,
                details: details
            };

            try {
                const response = await addRoadClose(detail);
                console.log("Road close add success!");
                const message = { message: "Road closure add successful!", severity: "success" };
                setSnackMessage(message)
                setDetails('');
                setLocation({ latitude: '', longitude: '' });
                selectLocation(false);
            } catch (error) {
                console.log("Road close add failed!");
            }
        } else {
            if(details == ''){
                const message = { message: "Provide road closure details", severity: "error" };
                setSnackMessage(message)
            }
        }
    }

    const handleSelectLocation = () => {
        selectLocation(true);
    }

    //for after lat lang given
    useEffect(() => {
        if (latLang != null) {
            const loc = { latitude: latLang.lat, longitude: latLang.lng };
            setLocation(loc);
            setDisableAdd(false);
        }
    }, [latLang])

    useEffect(() => {
        if (snackMessage.message != "") {
            setOpen(true);
        }
    },[snackMessage])

    return (
        <div className="flex flex-col border border-grey mt-3 w-[400px] p-3 space-y-1">
            <div className="flex bg-grey text-[20px] font-bold w-full justify-center rounded">Road Closure Add</div>
            <div className="flex font-bold">Road Close Location</div>
            <div className="flex flex-row space-x-3">
                <div>Latitude</div>
                <div className="border border-grey rounded w-[100px] ps-1">{location.latitude.toString().length > maxLength ? location.latitude.toString().substring(0, maxLength) : location.latitude}</div>
                <div>Longitude</div>
                <div className="border border-grey rounded w-[100px] ps-1">{location.longitude.toString().length > maxLength ? location.longitude.toString().substring(0, maxLength) : location.longitude}</div>
            </div>
            <div className="flex font-bold">Road close details</div>
            <TextField
                className="w-full"
                placeholder="Enter road close details"
                value={details}
                onChange={(e) => handleChange(e.target.value)} />
            <div className="flex fleex-row space-x-5 justify-center pt-2">
                <Button disabled={disableAdd} variant="contained" className="w-[50px]" onClick={handleSubmit}>
                    Add
                </Button>
                <Button variant="contained" className="w-[200px]" onClick={handleSelectLocation} startIcon={<LocationOnIcon />}>
                    Choose Location
                </Button>
            </div>
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
    )
}