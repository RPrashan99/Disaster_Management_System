import { Button, TextField } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useEffect, useState } from "react";
import { addRoadClose } from "../../../services/roadCloseService";

export const RoadClosureMenu = (props) => {
    const { latLang, selectLocation } = props;

    const [location, setLocation] = useState({ latitude: '', longitude: '' });

    const [details, setDetails] = useState('');

    const [disableAdd, setDisableAdd] = useState(true);

    const maxLength = 12;

    const handleChange = (value) => {
        setDetails(value);
    }

    const handleSubmit = async () => {
        if (location != null && details != null) {
            const detail = {
                closeLatLang: location,
                details: details
            };

            try {
                const response = await addRoadClose(detail);
                console.log("Road close add success!");
            } catch (error) {
                console.log("Road close add failed!");
            }
        } else {

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
                <Button variant="contained" className="w-[200px]" onClick={handleSelectLocation} startIcon={<LocationOnIcon/>}>
                    Choose Location
                </Button>
            </div>
        </div>
    )
}