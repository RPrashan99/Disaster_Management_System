import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import {ThemeProvider, createTheme } from '@mui/system';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { searchAdmin } from "../../../services/userService";

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });

export const AdminSearch = () => {

    const [searchId, setSearchId] = useState('');
    const [adminData, setAdminData] = useState('');
    const [openSnack, setOpenSnack] = useState(false);
    const [message, setMessage] = useState('');

    const snackClose = () =>{
        setOpenSnack(false);
    }

    const search = async () => {
        if(searchId == ""){
            setOpenSnack(true);
            setMessage("Type admin ID to serach")
        } else {
            setOpenSnack(false);
            try {
                const data = await searchAdmin(searchId);
                if(data){
                    console.log("Admin data", data);
                    setAdminData(data);
                } else {
                    setOpenSnack(true);
                    setAdminData('');
                    setMessage("Admin ID is invalid or not found!")
                }
    
            } catch (error) {
                console.error("Error getting data", error);
                setOpenSnack(true);
                setAdminData('');
                setMessage("Admin ID is invalid or not found!")
            }
        }
    };

    return(
        <div className="flex flex-col w-full h-[300px] bg-grey items-center p-3 space-y-3">
            <div className="flex w-full justify-center text-[25px] bg-white font-bold">Admin Search</div>
            <div className="flex flex-row w-full items-center bg-white justify-center p-2">
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
                            error = {openSnack}
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
                    <div className="flex bg-white ps-2 rounded">{adminData.id}</div>
                    <div className="flex font-bold">Admin Name :</div>
                    <div className="flex bg-white ps-2 rounded">{adminData.userName}</div>
                    <div className="flex font-bold">Department :</div>
                    <div className="flex bg-white ps-2 rounded">{adminData.department}</div>
                    <div className="flex font-bold">Email :</div>
                    <div className="flex bg-white ps-2 pe-2 rounded">{adminData.email}</div>
                </div>
            </div>
            <ThemeProvider>
                <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000}
                open={openSnack}
                onClose={snackClose}
                color={'secondary'}>
                    <Alert severity={"error"}>{message}</Alert>
                </Snackbar>
            </ThemeProvider>
        </div>
    )
}