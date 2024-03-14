import React, {useState, useReducer, useEffect} from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { RequestsDetails } from "../../components/Controller/Requests/RequestsDetails";
import { Footer } from "../../components/Controller/Footer"
import { Card_Requests } from "../../components/Controller/Requests/Card_Requests";
import { BarChart } from '@mui/x-charts/BarChart';
import { getRequests } from "../../services/requestService";
import {  parseISO } from 'date-fns';
import { WindowComponent } from "../../Windows/RequestWindow";

const intialState = { requests: []};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Request_Loaded':
                return {...state, requests: action.payload};
            default:
                return state;
        }
    };

export const Requests = () =>{

    const [state,dispatch] = useReducer(reducer, intialState);
    const {requests} = state;
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
    
        const loadRequests = getRequests();
        console.log("Requests",requests);
        loadRequests.then(requests => {
            // Sort requests by date and time in descending order
            const sortedRequests = requests.sort((a, b) => {
                const dateComparison = new Date(b.requestDate) - new Date(a.requestDate);

                if (dateComparison === 0) {
                    // If dates are equal, sort by time in descending order
                    const timeA = parseISO(a.requestTime);
                    const timeB = parseISO(b.requestTime);
                    console.log("time",timeA);
                    console.log("time",timeB);
                    return timeA-timeB;
                }

                return dateComparison;
            });

        dispatch({ type: 'Request_Loaded', payload: sortedRequests });
    });

    },   
    []);

    const handleCardClick = (request) => {
        setSelectedRequest(request);
        console.log("Selected Request:", request);
      };
    

    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
                <div className="flex flex-wrap gap-0 items-center relative bg-[#a7a6a6] justify-center w-full h-full">
                    <h1 className="flex justify-center text-[2rem] font-serif h-[50px] text-ControllerPrim">Details on Requests</h1>
                    <div className="flex justify-center items-center w-full h-full flex-wrap">
                        <RequestsDetails/>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap gap-0  relative w-full mt-5 h-full ">
                    <h1 className="flex text-[2rem] font-serif m-10 h-[20%] font-bold text-ControllerPrim">Requests</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                    {selectedRequest ? (
                        <div>
                            <div>
                            <WindowComponent requestDetails={selectedRequest} />
                            </div>
                        </div>
                        ) : (
                        <div className="max-h-[500px] overflow-auto">
                        {Array.isArray(requests) &&
                            requests.map((request) => (
                            <div
                                key={request.requestID}
                                className="flex justify-center items-center bg-[white] w-full flex-wrap"
                                onClick={() => handleCardClick(request)}
                            >
                                <Card_Requests
                                d_type={request.disasterType}
                                verification={"verified"}
                                time={request.requestTime}
                                date={request.requestDate}
                                location={request.disasterLocation}
                                affectedPeople={request.affectedCount}
                                />
                            </div>
                            ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex relative bg-ControllerPrim w-full justify-center items-center h-[20%] mt-10">
                <BarChart
                    series={[
                        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
                    ]}
                    width={600}
                    height={350}
                    />
                </div>
            <Footer/>
        </div>
    )
}