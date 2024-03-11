import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export const AdminSearch = () => {

    const [searchId, setSearchId] = useState('');

    const search = async () => {
        
    };

    return(
        <div className="flex flex-col w-full h-[300px] bg-grey items-center p-3 space-y-3">
            <div className="flex w-full justify-center text-[25px] bg-white font-bold">Admin Assign</div>
            <div className="flex flex-row w-full items-center bg-white justify-center p-1">
                <div className="flex text-[15px] pr-5 font-bold">Enter Admin ID for search</div>
                <Box 
                    sx={
                        {width: 250,
                        maxWidth: '100%',}
                    }>
                        <TextField
                            fullWidth
                            label="Enter Admin ID"
                            required
                            variant="outlined"
                            id="validation-outlined-input"
                            value = {searchId}
                            size="small"
                            onChange = {
                                (e) => {setSearchId(e.target.value)}
                            }
                        />
                    </Box>
            </div>
            <div className="flex flex-rows space-x-5">
                <div className="grid grid-cols-2 gap-4 p-1 items-center">
                    <div className="flex font-bold">Admin Name :</div>
                    <Box 
                    sx={
                        {width: 250,
                        maxWidth: '100%',}
                    }>
                        <TextField
                            fullWidth
                            label="Enter Admin Name"
                            required
                            variant="outlined"
                            id="validation-outlined-input"
                            value = {searchId}
                            size="small"
                            onChange = {
                                (e) => {setSearchId(e.target.value)}
                            }
                        />
                    </Box>
                    <div className="flex font-bold">Department :</div>
                    <div className="flex bg-white ps-2">value</div>
                    <div className="flex font-bold">Telephone Number :</div>
                    <div className="flex bg-white ps-2">value</div>
                </div>
            </div>
        </div>
    )
}