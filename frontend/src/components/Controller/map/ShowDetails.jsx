import React, { useState } from "react";
import Switch from '@mui/material/Switch';

export const ShowDetails = (props) => {

    const {check, handleShow} = props;

    const [checkedCoverage, setCheckedCoverage] = useState(true);
    const [checkedRequests, setCheckedRequests] = useState(false);
    const [checkedShelters, setCheckedShelters] = useState(false);
    const [checkedRoadCloses, setCheckedRoadCloses] = useState(false);
    const [checkedEvacRoutes, setCheckedEvacRoutes] = useState(false);

    const handleChange = (event) => {
        if (event.target.name == "Coverage") {
            setCheckedCoverage(event.target.checked);
            check.coverage = !checkedCoverage;

        } else if (event.target.name == "Requests") {
            setCheckedRequests(event.target.checked);
            check.requests = !checkedRequests;

        } else if (event.target.name == "Shelters") {
            setCheckedShelters(event.target.checked);
            check.shelters = !checkedShelters;

        }else if (event.target.name == "RoadCloses") {
            setCheckedRoadCloses(event.target.checked);
            check.roadClose = !checkedRoadCloses;

        }else if(event.target.name == "EvacRoutes"){
            setCheckedEvacRoutes(event.target.checked);
            check.evacs = !checkedEvacRoutes;
        }
        handleShow(check);

    };

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2 p-5">
            <div className="flex flex-row items-center p-1 justify-center border rounded">
                <div className="flex">
                    Disaster Coverage
                </div>
                <Switch
                    name="Coverage"
                    checked={checkedCoverage}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div className="flex flex-row items-center p-1 justify-center border rounded">
                <div className="flex">
                    Disaster Requests
                </div>
                <Switch
                    name="Requests"
                    checked={checkedRequests}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div className="flex flex-row items-center p-1 justify-center border rounded">
                <div className="flex">
                    Shelter Locations
                </div>
                <Switch
                    name="Shelters"
                    checked={checkedShelters}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div className="flex flex-row items-center p-1 justify-center border rounded">
                <div className="flex">
                    Road Closures
                </div>
                <Switch
                    name="RoadCloses"
                    checked={checkedRoadCloses}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div className="flex flex-row items-center p-1 justify-center border rounded">
                <div className="flex">
                    Evacuation Routes
                </div>
                <Switch
                    name="EvacRoutes"
                    checked={checkedEvacRoutes}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
        </div>
    )
}