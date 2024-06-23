import React, { useCallback, useEffect, useState } from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Grid, Icon } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import { DisasterSelectMenu } from "../../components/Controller/map/DisasterSelectMenu";
import { ShowDetails } from "../../components/Controller/map/ShowDetails";
import { getCurrentReports } from "../../services/reportService";
import { getAllShelters } from "../../services/shelterService";
import { getRequests } from "../../services/requestService";
import { RoadClosureMenu } from "../../components/Controller/map/RoadClosureMenu";
import { getRoadCloses } from "../../services/roadCloseService";

export const DisasterMap = () => {
    const position = { lat: 7.1, lng: 80.636696 };
    const [loc, setLoc] = useState({ lat: 7.291418, lng: 80.636696 });

    const icon = {
        url: '/icons/shelter.svg',
        scaledSize: new window.google.maps.Size(40, 40),
    };

    const roadCloseIcon = {
        url: '/icons/Road.svg',
        scaledSize: new window.google.maps.Size(40, 40),
    };

    const [isTotal, setIsTotal] = useState(true);
    const [showchange, setShowChange] = useState(false);
    const [checked, setChecked] = useState(
        { coverage: true, requests: false, shelters: false, roadClose: false, evacs: false }
    );

    const [markerRoadClose, setMarkerRoadClose] = useState(false); //show road close marker option to select location
    const [overlayScreen, setOverlayScreen] = useState(false); //show road close marker option function
    const [roadCloseLL, setRoadCloseLL] = useState(position); //store road close marker lat lang

    const [alignment, setAlignment] = React.useState('total');
    const [newReports, setNewReports] = useState('');
    const [reports, setReports] = useState('');

    const [allReports, setAllReports] = useState('');
    const [allShelters, setAllShelters] = useState('');
    const [allRequests, setAllRequests] = useState('');
    const [allRoadCloses, setAllRoadCloses] = useState('');

    const [shelters, setShelters] = useState('');
    const [requests, setRequests] = useState('');

    const handleCheckshow = (show) => {
        setChecked(show);
        setShowChange(!showchange);
    }

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);

        if (newAlignment == "total") {
            setReports(allReports);
            setRequests(allRequests);
            setShelters(allShelters);
        } else {
            setReports('');
            setRequests('');
            setShelters('');
        }
    };

    const handleReportSelect = async (report) => {

        if (report) {
            console.log("Report selected: ", report);
            const newArray = [report];
            setReports(newArray);
            //const requests = await getRequestByID();
            //const shelters = await getSheltersByID();
        }
    }

    const handleRoadCloseAdd = () => {

    };

    const fetchReports = async () => {
        try {
            const currentReports = await getCurrentReports();
            const newDataArray = currentReports.map((dr) => ({
                reportID: dr.reportID,
                reportName: `${dr.disasterType} - ${dr.disasterLocation} - ${dr.createdDate}`,
            }));
            setReports(currentReports);
            setAllReports(currentReports);
            setNewReports(newDataArray);
        } catch (error) {
            console.log("Reports fecth error", error);
        }
    }

    const fetchShelters = async () => {
        const fetchedShelters = await getAllShelters();
        if (fetchedShelters.length != 0) {
            setShelters(fetchedShelters);
            setAllShelters(fetchedShelters);
        } else {
            console.log('Shelter fetched failed! ');
        }
    }

    const fetchRequests = async () => {
        const fetchedRequests = await getRequests();
        if (fetchedRequests.length != 0) {
            setRequests(fetchedRequests);
            setAllRequests(fetchedRequests);
        } else {
            console.log('Requests fetched failed! ');
        }
    }

    const fetchRoadCloses = async () => {
        const fetchedRoadCloses = await getRoadCloses();
        if (fetchedRoadCloses.length != 0) {
            //setRequests(fetchedRoadCloses);
            setAllRoadCloses(fetchedRoadCloses);
        } else {
            console.log('Road closes fetched failed! ');
        }
    }

    //get road close marker position
    const onMarkerDragEnd = useCallback((event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setRoadCloseLL({ lat: lat, lng: lng });
        console.log("Road close location: ", roadCloseLL);
    });

    useEffect(() => {
        fetchReports();
        fetchShelters();
        fetchRequests();
        fetchRoadCloses();
    }, [])

    useEffect(() => {
        if (shelters) {
            console.log("Shelters fetched! ", shelters);
        }
        if (reports) {
            console.log("Reports fetched: ", reports);
        }
    }, [shelters, reports])

    useEffect(() => {
        console.log("Show: ", checked);
    }, [showchange])

    useEffect(() => {
        console.log("Road close marker show: ", markerRoadClose);
    }, [markerRoadClose])

    return (
        <div>
            <LanguageBar />
            {
                <HeaderBar />
            }
            <div className="flex w-full justify-center bg-grey mb-2">
                <span className="flex py-1 justify-center text-[25px] font-bold font-Inter">Disaster Map</span>
            </div>
            <div className="flex flex-row space-x-5 p-3">
                <div className="border border-black relative">
                    <APIProvider apiKey={'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk'}>
                        <div style={{ height: "90vh", width: "120vh" }}>
                            <Map defaultZoom={8} defaultCenter={position}>
                                {
                                    (reports && checked.coverage) && reports.map((report, index) => (
                                        <Marker
                                            key={index}
                                            position={{ lat: report.affectedLocations[0].latitude, lng: report.affectedLocations[0].longitude }}
                                        />
                                    ))
                                }

                                {
                                    (shelters && checked.shelters) && shelters.map((shelter, index) => (
                                        <Marker
                                            icon={icon}
                                            key={index}
                                            position={{ lat: shelter.locationLatLang[0].latitude, lng: shelter.locationLatLang[0].longitude }}
                                        />
                                    ))
                                }
                                {/* {
                                    requests && requests.map((request, index) => (
                                        <Marker
                                            key={index}
                                            position={{ lat: request.disasterLocationLatLan[0].latitude, lng: request.disasterLocationLatLan[0].longitude }}
                                        />
                                    ))
                                } */}

                                {
                                    (allRoadCloses && checked.roadClose) && allRoadCloses.map((roadClose, index) => (
                                        <Marker
                                            icon={roadCloseIcon}
                                            key={index}
                                            position={{ lat: roadClose.closeLatLang[0].latitude, lng: roadClose.closeLatLang[0].longitude }}
                                        />
                                    ))
                                }

                                {
                                    (markerRoadClose && checked.roadClose) &&

                                    <Marker
                                        position={roadCloseLL}
                                        draggable={true}
                                        onDragEnd={onMarkerDragEnd} />
                                }
                            </Map>
                        </div>
                    </APIProvider>


                    {
                        (overlayScreen && checked.roadClose) &&
                        <div className="flex absolute top-0 left-0 bg-grey bg-opacity-80 w-full h-full justify-center items-center text-[28px] font-bold hover:bg-opacity-90"
                            onClick={() => { setOverlayScreen(false) }}>
                            Drag marker to designated road close location
                        </div>
                    }

                </div>
                <div className="flex flex-col w-full border border-black p-2 items-center">
                    <div className="text-[20px] font-bold bg-grey w-full text-center rounded">
                        SELECT MAP PARAMETER
                    </div>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        className="p-5"
                    >
                        <ToggleButton value="total">Total</ToggleButton>
                        <ToggleButton value="disaster">By Disaster</ToggleButton>
                    </ToggleButtonGroup>

                    {
                        alignment == 'disaster' && <DisasterSelectMenu reports={allReports} reportsArray={newReports}
                            setSelected={(report) => {
                                handleReportSelect(report);
                                console.log("Report select: ", report);
                            }} />
                    }

                    <div className="flex flex-col border w-full h-full p-2">
                        <div className="text-[18px] font-bold bg-grey w-full text-center rounded">
                            DETAILS TO SHOW
                        </div>
                        <ShowDetails check={checked} handleShow={(show) => {
                            handleCheckshow(show);
                        }} />
                    </div>

                    {
                        checked.roadClose &&
                        <RoadClosureMenu
                            selectLocation={(roadClose) => {
                                setMarkerRoadClose(roadClose);
                                setOverlayScreen(roadClose);
                                setRoadCloseLL(position);
                            }}
                            latLang={roadCloseLL} />
                    }
                </div>
            </div>
        </div>
    )
}