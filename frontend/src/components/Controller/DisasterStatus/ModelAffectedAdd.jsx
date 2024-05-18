import { Button } from "@mui/material";
import React, { useState } from "react";

export const ModelAffectedAdd = ({handleClose}) => {

    const [affectedCount, setAffectedCount] = useState('');

    const handleChange = (value) =>{
        setAffectedCount(value);
    }

    const formClose = () =>{
        
        handleClose();
    }

    return (
        <div className="bg-grey absolute top-10 right-12 w-[200px] h-[150px] flex items-center justify-center z-50 shadow border border-black rounded">
            <div className="flex flex-col items-center justify-center space-y-3">
                <div className="flex">Add today affected count</div>
                <input className="flex w-[100px] w-[100px] rounded" type="number" name="affectedCount" 
                value={affectedCount} onChange={(e)=>{
                    handleChange(e.target.value);
                }}/>
                <Button variant="contained" onClick={formClose}>Add</Button>
            </div>
        </div>
    )
}