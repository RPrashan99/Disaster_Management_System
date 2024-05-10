import React, { useState } from "react";
import { Button } from "@mui/material";
import { createShelter } from "../../../services/shelterService";

export const ShelterAddForm =React.forwardRef(function (props, ref){

    const {initialDetails, handleClose} = props;

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
        try{
            const result = await createShelter(details);
            handleClose();
            console.log("Shelter create Successful!");
        }catch(error){
            console.log("Shelter create error!");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }

    return (
        <div ref={ref} className="flex w-full justify-center">
            <div className="flex flex-col space-y-5 bg-grey justify-center items-center w-[800px] h-[700px] p-5 rounded-md">
                <div className="flex bg-white w-full justify-center font-bold text-[20px]">Shelter Add Form</div>

                <form className="flex flex-row space-x-5 p-2" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-1 items-center">

                        <div className="flex font-bold">Shelter Name : </div>
                        <input className="rounded-md" type="text" name="shelterName" value={details.shelterName} onChange={handleChange} required />

                        <div className="flex font-bold">Phone Number : </div>
                        <input className="rounded-md" type="text" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} required />

                        <div className="flex font-bold">Person In Charge : </div>
                        <input className="rounded-md" type="text" name="personInCharge" value={details.personInCharge} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-2 justify-center content-start items-center gap-1">
                        <div className="flex font-bold w-[180px]">Shelter Type : </div>
                        <select
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[45px]"
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

                        <div className="font-bold">Location : </div>
                        <input className="rounded-md" type="text" name="location" value={details.location} onChange={handleChange} required />
                    </div>
                </form>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
})