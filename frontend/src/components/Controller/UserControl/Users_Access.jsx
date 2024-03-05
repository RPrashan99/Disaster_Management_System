import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { UserSearch } from "./User_Search";


const accessWindow = (Type) => {
    switch(Type){
        case 'US':
            return(
                <UserSearch/>
            )
        case 'AS':
            return(
                <div className="flex w-full h-full bg-opacity-50 items-center justify-center fixed">
                    
                </div>
            );
        case 'AA':
            return(
                <div className="flex w-full h-full bg-opacity-50 items-center justify-center fixed">
                    
                </div>
            );
        default:
            return(
                <></>
            )
    }
}

export const UsersAccess = () => {

    const [windowOpen, setWindowOpen] = useState(false);
    const [type, setType] = useState('');

    const handleButtonPressed = (type) =>{
        console.log("buttonPressed",type);   
        setType(type)
        setWindowOpen(true);
    }

    useEffect(() => {
        console.log("windowOpen", windowOpen);
      }, [windowOpen]);

    return(
        <div className="flex flex-col items-center space-y-2 h-[200px] p-3 bg-userBlue">
            <div className="flex text-[25px] font-bold bg-grey w-full justify-center">Users Database Access</div>

            <div className="flex flex-row space-x-5 items-center justify-center">

                <div className="flex flex-col p-3 space-y-2 border rounded items-center bg-white">
                    <div className="flex text-[18px] font-bold">Users Access</div>
                    <div className="flex text-[12px]">Search and access user details on the database</div>
                    <div className="flex flex-row">
                        <Button variant="contained" endIcon={<PersonSearchIcon/>}
                            onClick={
                                () => {handleButtonPressed('US')}
                            }>
                            Search
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col p-3 space-y-2 border rounded items-center bg-white">
                    <div className="flex text-[18px] font-bold">Admins Access</div>
                    <div className="flex text-[12px]">Search and assign admins on the database</div>
                    <div className="flex flex-row space-x-5">
                        <Button variant="contained" endIcon={<PersonSearchIcon/>} 
                            onClick={
                                () => {handleButtonPressed('AS')}
                            }>
                            Search
                        </Button>
                        <Button variant="contained" endIcon={<PersonAddIcon/>}
                            onClick={
                                () => {handleButtonPressed('AA')}
                            }>
                            Assign
                        </Button>
                    </div>
                </div>

            </div>

            {
                windowOpen && (
                    <div className="flex w-full h-full items-center justify-center fixed">
                        {accessWindow(type)}
                    </div>
                )
            }
        </div>
    )
}