import React, { useEffect, useState } from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { deleteShelter, getAllShelters } from "../../services/shelterService";
import { RowCardShelter } from "../../components/Controller/shelters/RowCardShelter.jsx";
import { Alert, Button, Snackbar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Collapse from '@mui/material/Collapse';
import { ShelterAddForm } from "../../components/Controller/shelters/ShelterAddForm.jsx";
import { ShelterAddFormTest } from "../../components/Controller/shelters/ShelterAddFormTest.jsx";

export const ShelterLocationPage = () => {

    const [open, setOpen] = useState(false);//for alerts
    const [formOpen, setFormopen] = useState(false);
    const [change, setChange] = useState(false);

    
    const [ snackMessage, setSnackMessage ] = useState({message:"", severity:""});

    const getShelters = async () => {
        const allShelters = await getAllShelters();
        if (allShelters.length != 0) {
            setShelters(allShelters);
        } else {
            console.log("Shelters not found!");
        }
    };

    const handleFormOpen = () => {
        setFormopen(true);
    }

    const handleClose = async () => {
        await getShelters();
        setFormopen(false);
    }

    const tableCols = [
        { col: "Shelter ID", width: "120px" },
        { col: "Shelter Name", width: "250px" },
        { col: "Shelter Type", width: "200px" },
        { col: "Location", width: "300px" },
        { col: "Person In Charge", width: "250px" },
        { col: "Phone Number", width: "150px" },
    ];

    const [shelters, setShelters] = useState(null);

    const handleDelete = async (id) => {
        try{
            const result = await deleteShelter(id);
            setChange(!change);
            await getShelters();

            const msg = { message: "Shelter Deleted!", severity: "success" };
            setSnackMessage(msg);

            console.log("Result: ", result);
        }catch(error){
            const msg = { message: "Shelter delete failed!", severity: "error" };
            setSnackMessage(msg);
            console.log(error);
        }
    }

    const handleEdit = () => {
        
    }

    const alertClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getShelters();
    }, [change])

    useEffect(() => {
        if (shelters != null) {
            console.log("Shelters found!:", shelters);
        }
    }, [shelters])

    useEffect(() => {
        if (snackMessage.message != "" && snackMessage.severity != "") {
            setOpen(true);
        }
    }, [snackMessage])

    return (
        <div>
            <LanguageBar />
            <HeaderBar />
            <div className="flex justify-center bg-grey mt-3 mx-5">
                <span className="flex justify-center text-[25px] font-bold font-Inter">Shelter Locations</span>
            </div>
            <div className="flex justify-start items-center bg-grey mt-3 mx-5 ps-10 relative">
                <span className="flex justify-start text-[22px] font-bold font-Inter">Current Shelter Locations: </span>
                <div className="flex bg-menuBlue rounded-md justify-center items-center w-[100px] m-2 ms-5 text-white text-[20px]">
                    {shelters ? shelters.length : "0"}
                </div>
                <div className="absolute right-5">
                    <Button variant="contained" endIcon={<AddIcon />} onClick={handleFormOpen}>
                        Add Shelter
                    </Button>
                </div>
            </div>
            <div className="flex-row bg-grey border m-5 p-2">
                <div className="flex flex-row justify-start space-x-1 bg-grey w-full mb-2 ps-2">
                    {
                        tableCols.map((item, index) => (
                            <div className={`flex bg-white w-[${item.width}] justify-center font-bold text-[18px] shadow`} key={index}>{item.col}</div>
                        ))
                    }
                </div>
                <div className="flex flex-col bg-white ps-2 divide-y-2">
                    {
                        shelters && shelters.length > 0 ?
                            shelters.map((shelter, index) => (
                                <RowCardShelter key={index} shelterItem={shelter}
                                    shelterDelete={() => {
                                        handleDelete(shelter.shelterId);
                                    }} 
                                    shelterEdit={()=>{}}/>
                            ))
                            : <div className="flex justify-center bg-white items-center w-full font-bold text-[20px] py-20">No shelters found</div>
                    }
                </div>
            </div>
            <Collapse in={formOpen}
                mountOnEnter
                unmountOnExit>
                <ShelterAddFormTest handleClose={handleClose} />
            </Collapse>
            <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={open}
                    onClose={alertClose}
                    autoHideDuration={1800}
                >
                    <Alert
                        onClose={alertClose}
                        severity={snackMessage.severity}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >{snackMessage.message}
                    </Alert>
                </Snackbar>
        </div>
    )
}