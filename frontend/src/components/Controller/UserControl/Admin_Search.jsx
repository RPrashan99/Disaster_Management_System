import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { searchAdmin } from "../../../services/userService";

export const AdminSearch = () => {

    const [searchId, setSearchId] = useState('');
    const [adminData, setAdminData] = useState('');

    const search = async () => {
        try {
            const data = await searchAdmin(searchId);
            if(data){
                console.log("User data", data);
            }
            setAdminData(data);

        } catch (error) {
            console.error("Error getting data", error);
        }
    };

    return(
        <div className="flex flex-col w-full h-[300px] bg-grey items-center p-3 space-y-3">
            <div className="flex w-full justify-center text-[25px] bg-white font-bold">Admin Search</div>
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
                <IconButton aria-label="search" 
                    size="small"
                    onClick = {
                        search
                    }
                    >
                    <SearchIcon/>
                </IconButton>
            </div>
            <div className="flex flex-rows space-x-5">
                <div className="flex flex-col items-center">
                    <img className="w-[150px] h-[150px]" src="../controller/person_image.jpg" alt="Person_Image"/>
                </div>
                <div className="grid grid-cols-2 gap-4 p-1 items-center">
                    <div className="flex font-bold">Admin ID : </div>
                    <div className="flex bg-white ps-2">{adminData.id}</div>
                    <div className="flex font-bold">Admin Name :</div>
                    <div className="flex bg-white ps-2">{adminData.userName}</div>
                    <div className="flex font-bold">Department :</div>
                    <div className="flex bg-white ps-2">{adminData.department}</div>
                    <div className="flex font-bold">Email :</div>
                    <div className="flex bg-white ps-2">{adminData.email}</div>
                </div>
            </div>
        </div>
    )
}