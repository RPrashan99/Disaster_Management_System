import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const RowCardShelter = ({ shelterItem, shelterDelete, shelterEdit }) => {

    const [shelter, setShelter] = useState([]);

    const handleEdit = () => {
        
    };

    const handleDelete = () => {
        shelterDelete();
    };

    useEffect(() => {
        const Data = [
            { col: "Shelter ID", value: shelterItem.shelterId, width: "120px" },
            { col: "Shelter Name", value: shelterItem.shelterName, width: "250px" },
            { col: "Shelter Type", value: shelterItem.shelterType, width: "200px" },
            { col: "Location", value: shelterItem.location, width: "300px" },
            { col: "Person In Charge", value: shelterItem.personInCharge, width: "250px" },
            { col: "Phone Number", value: shelterItem.phoneNumber, width: "150px" },
        ];
        setShelter(Data);
    }, [])

    return (
        <div key={shelter.shelterId} className="flex space-x-1 bg-gray w-full justify-start items-center py-1 divide-x-2">
            {
                shelter.map((item, index) => (
                    <div key={index} className={`flex bg-white w-[${item.width}] justify-center text-[15px]`}>{item.value}</div>
                ))
            }
            <div className="flex flex-row space-x-3 justify-center bg-white items-center w-[130px]">
                <div className="flex bg-green rounded-md size-fit">
                    <IconButton size="small" onClick={() => { handleEdit() }}>
                        <EditIcon fontSize="inherit"/>
                    </IconButton>
                </div>
                <div className="flex bg-mapRed rounded-md size-fit items-center">
                    <IconButton size="small" onClick={() => { handleDelete() }}>
                        <RemoveCircleOutlineIcon fontSize="inherit"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}