import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addRoadClose } from "../../../services/roadCloseService";

export const RoadClosureMenu = (props) => {
    const {latLang} = props;

    const [location, setLocation] = useState({latitude:'', longitude:''});

    const [details, setDetails] = useState('');

    const handleChange = (value) => {
        setDetails(value);
    }

    const handleSubmit = async () => {
        if(location != null && details != null){
            const detail = {
                closeLatLang: location,
                details: details
            };

            try{
                const response = await addRoadClose(detail);
                console.log("Road close add success!");
            }catch(error){
                console.log("Road close add failed!");
            }
        }else{

        }
    }

    useEffect(() => {
        if(latLang != null){
            const loc = {latitude:latLang.lat, longitude:latLang.lng};
            setLocation(loc);
        }
    },[latLang])

    return(
        <div className="flex flex-col border border-black">
            <div className="bg-grey text-[20px] font-bold w-full justify-center">Road Closure</div>
            <div className="flex">Road Close Location</div>
            <div className="flex flex-row">
                <div>Latitude</div>
                <div className="border border-black rounded">{loc.latitude}</div>
                <div>Longitude</div>
                <div className="border border-black rounded">{loc.longitude}</div>
            </div>
            <div className="flex font-bold">Road close details</div>
            <TextField
            className="w-full"
            placeholder="Enter road close details"
            value={details}
            onChange={(e)=> handleChange(e.target.value)}/>
            <Button onClick={handleSubmit}>
                Add
            </Button>
        </div>
    )
}