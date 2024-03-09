import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

export const UserSearch = () => {

    const [searchId, setSearchId] = useState('');
    const navigate = useNavigate();

    const search = async () => {
        
    };

    const close = () => {
        navigate("/controller/users")
    }

    return(
        <div className="flex flex-col w-[500px] h-[300px]">
            <div className="flex text-[25px]">User Search</div>
            <div className="flex flex-row">
                <div className="flex text-[15px]">Enter User ID for search</div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    value = {searchId}
                    onChange = {
                        (e) => {setSearchId(e.target.value)}
                    }
                />
                <IconButton aria-label="search" 
                    size="small"
                    onClick = {
                        () => {search()}
                    }
                    >
                    <SearchIcon/>
                </IconButton>
                <IconButton aria-label="close" 
                    size="small"
                    onClick = {
                        () => {close()}
                    }
                    >
                    <CloseIcon/>
                </IconButton>
            </div>
        </div>
    )
}