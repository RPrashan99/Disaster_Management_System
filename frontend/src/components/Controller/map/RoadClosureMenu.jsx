import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addRoadClose } from "../../../services/roadCloseService";

export const RoadClosureMenu = (props) => {
    const { latLang } = props;

    const [location, setLocation] = useState({ latitude: '', longitude: '' });

    const [details, setDetails] = useState('');

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

    useEffect(() => {
        if (latLang != null) {
            const loc = { latitude: latLang.lat, longitude: latLang.lng };
            setLocation(loc);
        }
    }, [latLang])

    return (
        <div className="flex flex-col border border-grey mt-3 w-[400px] p-3 space-y-1">
            <div className="flex bg-grey text-[20px] font-bold w-full justify-center rounded">Road Closure</div>
            <div className="flex font-bold">Road Close Location</div>
            <div className="flex flex-row space-x-3">
                <div>Latitude</div>
                <div className="border border-grey rounded w-[100px]">{location.latitude}</div>
                <div>Longitude</div>
                <div className="border border-grey rounded w-[100px]">{location.longitude}</div>
            </div>
            <div className="flex font-bold">Road close details</div>
            <TextField
                className="w-full"
                placeholder="Enter road close details"
                value={details}
                onChange={(e) => handleChange(e.target.value)} />
            <div className="flex justify-center">
                <Button variant="contained" className="w-[50px]" onClick={handleSubmit}>
                    Add
                </Button>
            </div>
        </div>
    )
}