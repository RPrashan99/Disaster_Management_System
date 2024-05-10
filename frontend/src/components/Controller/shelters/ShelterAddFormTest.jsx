import React, { useEffect, useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";
import { createShelter } from "../../../services/shelterService";
import { APIProvider } from "@vis.gl/react-google-maps";
import { PlacesAutocomplete } from "../common/PlacesAutocomplete";

export const ShelterAddFormTest = React.forwardRef(function (props, ref) {

    const { initialDetails, handleClose } = props;

    const [ open, setOpen ] = useState(false);
    const [ snackMessage, setSnackMessage ] = useState({message:"", severity:""});

    const [details, setDetails] = useState(initialDetails ||
    {
        shelterName: '',
        location: '',
        locationLatLang: [],
        shelterType: '',
        phoneNumber: '',
        personInCharge: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (details.shelterName != '' && details.shelterType != '' && details.location != '' && details.locationLatLang != []
            && details.phoneNumber != '' && details.personInCharge != '') {

            try {
                const result = await createShelter(details);
                const msg = { message: "Shelter Create successful!", severity: "success" };
                setSnackMessage(msg);
                handleClose();
                console.log("Shelter create Successful!");
            } catch (error) {
                const msg = { message: "Shelter Create failed!", severity: "error" };
                setSnackMessage(msg);
                console.log("Shelter create error!");
            }
        } else {
            const msg = { message: "Please fill all details!", severity: "error" };
            setSnackMessage(msg);
        }
    };

    const alertClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    useEffect(() => {
        console.log("Details: ", details);
    }, [details])

    useEffect(() => {
        if (snackMessage.message != "" && snackMessage.severity != "") {
            setOpen(true);
        }
    }, [snackMessage])

    return (
        <div ref={ref} className="flex w-full justify-center">
            <div className="flex flex-col space-y-5 bg-grey justify-start items-center w-[1000px] max-h-[350px] p-5 rounded-md">
                <div className="flex bg-white w-full justify-center font-bold text-[20px]">Shelter Add Form</div>

                <form className="flex flex-row space-x-5 p-2" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-1 items-center">

                        <div className="flex font-bold">Shelter Name : </div>
                        <input className="rounded-md col-span-2" type="text" name="shelterName" value={details.shelterName} onChange={handleChange} required />

                        <div className="flex font-bold">Phone Number : </div>
                        <input className="rounded-md col-span-2" type="text" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} required />

                        <div className="flex font-bold">Person In Charge : </div>
                        <input className="rounded-md col-span-2" type="text" name="personInCharge" value={details.personInCharge} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-3 justify-center content-start items-center gap-1">
                        <div className="flex font-bold w-full justify-center">Shelter Type : </div>
                        <select
                            className="col-span-2 shadow appearance-none border rounded-md w-[310px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[45px]"
                            name="shelterType"
                            value={details.shelterType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Shelter Type</option>
                            <option value="Medical Camp">Medical Camp</option>
                            <option value="Protection">Protection</option>
                            <option value="Quarantine">Quarantine</option>
                        </select>

                        <div className="flex font-bold justify-center">Location : </div>
                        <div className="col-span-2">
                            <PlacesAutocomplete
                                setLocation={(location) => {
                                    setDetails((prevDetails) => ({ ...prevDetails, ["location"]: location }));
                                }}
                                setLocationLatLang={(locationLatLang) => {
                                    setDetails((prevDetails) => ({ ...prevDetails, ["locationLatLang"]: locationLatLang }));
                                }} />
                        </div>
                    </div>
                </form>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
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
        </div>
    )
})