import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { searchUser } from "../../../services/userService";

export const UserSearch = () => {

    const [searchId, setSearchId] = useState('');
    const [userData, setUserData] = useState('');
    const navigate = useNavigate();

    const search = async () => {

        try {
            const data = await searchUser(searchId);
            if(data){
                console.log("User data", data);
            }
            setUserData(data);

        } catch (error) {
            console.error("Error getting data", error);
        }
    };

    useEffect (()=>{

    },[userData])

    return(
        <div className="flex flex-col w-full h-[300px] bg-grey items-center p-3 space-y-3">
            <div className="flex w-full justify-center text-[25px] bg-white font-bold">User Search</div>
            <div className="flex flex-row w-full items-center bg-white justify-center p-1">
                <div className="flex text-[15px] pr-5 font-bold">Enter User ID for search</div>
                <Box 
                    sx={
                        {width: 250,
                        maxWidth: '100%',}
                    }>
                        <TextField
                            fullWidth
                            label="Enter User ID"
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
                    <div className="flex font-bold">User ID : </div>
                    <div className="flex bg-white ps-2">{userData.id}</div>
                    <div className="flex font-bold">User Name :</div>
                    <div className="flex bg-white ps-2">{userData.userName}</div>
                    <div className="flex font-bold">Residence :</div>
                    <div className="flex bg-white ps-2">{userData.address}</div>
                    <div className="flex font-bold">Email :</div>
                    <div className="flex bg-white ps-2">{userData.email}</div>
                </div>
            </div>
        </div>
    )
}