import React, {useState, useReducer, useEffect} from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { RequestsDetails } from "../../components/Controller/Requests/RequestsDetails";
import { Footer } from "../../components/Controller/Footer"
import { Card_Requests } from "../../components/Controller/Requests/Card_Requests";
import { BarChart } from '@mui/x-charts/BarChart';
import { getRequests } from "../../services/requestService";
// import {  parseISO } from 'date-fns';
import { WindowComponent } from "../../Windows/RequestWindow";
import { Tag, message } from "antd";
import axios from "axios";

const intialState = { 
    requests: [],
};

    const reducer = (state, action) => {
        let updatedRequests; 
        switch (action.type) {
            case 'Request_Loaded':
                return { ...state, requests: action.payload };
            case 'Select_Request':
                updatedRequests = state.requests.map(request =>
                    request.requestID === action.payload.requestID ? action.payload : request
                );
                return { ...state, requests: updatedRequests };
            default:
                return state;
        }
    };



export const Requests = () =>{

    const [state,dispatch] = useReducer(reducer, intialState);
    const {requests} = state;
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [showRequests, setShowRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState({
        allRequests:"",
        floodRequests:"",
        tsunamiRequests: "",
        fireRequests: "",
        landslideRequests:"",
        extremeWindRequests: "",
        verifiedRequests:"",
        todayRequests:"",
        monthlyRequests:"",
        otherRequests:"",
        allReadRequests:"",
        todayReadRequests:"",
        monthlyReadRequests:""
      });
        const [filteredCounts, setFilteredCounts] = useState({
          all:0,  
          flood: 0,
          tsunami: 0,
          fire: 0,
          landslide:0,
          extremeWind: 0,
          verified:0,
          today:0,
          monthly:0,
          other:0,
          allRead:0,
          todayRead:0,
          monthlyRead:0
        });
        const disasters = ["flood", "tsunami","fire", "wind", "landslide"];

    useEffect(() => {
    
        const loadRequests = getRequests();
        console.log("Requests",requests);
        loadRequests.then(requests => {
            // Sort requests by date and time in descending order
            const sortedRequests = requests.sort((a, b) => {
                const dateComparison = new Date(b.requestDate) - new Date(a.requestDate);
              
                //const converted = requestTime.split(' ')[0].split(':');
                if (dateComparison !== 0) {
                    return dateComparison;
                }
                const timeA = (a.requestTime).split(' ')[0];
                const timeB = (b.requestTime).split(' ')[0];
                return timeB.localeCompare(timeA); 
         
            });
            const other = requests.filter(request => !disasters.some(disasters => request.disasterType.toLowerCase().includes(disasters)));
            const flood = requests.filter(request => request.disasterType.toLowerCase().includes("flood") );
            const tsunami = requests.filter(request => request.disasterType.toLowerCase().includes("tsunami"));
            const fire = requests.filter(request => request.disasterType.toLowerCase().includes("fire"));
            const extremeWind = requests.filter(request => request.disasterType.toLowerCase().includes("wind"));
            const landslide = requests.filter(request => request.disasterType.toLowerCase().includes("landslide"));
            const verified = requests.filter(request => request.verification === "verified");
            const today = requests.filter(request => (request.requestDate).split(' ')[2] === (new Date()).toDateString().split(' ')[2]);
            const monthly = requests.filter(request =>  (request.requestDate).split(' ')[1] === (new Date()).toDateString().split(' ')[1]);
            const allRead = requests.filter(request => request.read === true );
            const todayRead = requests.filter(request => request.read === true && (request.requestDate).split(' ')[2] === (new Date()).toDateString().split(' ')[2]);
            const monthlyRead = requests.filter(request => request.read === true && (request.requestDate).split(' ')[1] === (new Date()).toDateString().split(' ')[1]);
            //setFilteredRequests.verifiedRequests(verifiedRequests);
            setFilteredCounts({
                all:requests.length,
                flood:flood.length,
                tsunami:tsunami.length,
                fire:fire.length,
                extremeWind:extremeWind.length,
                landslide:landslide.length,
                verified:verified.length,
                today:today.length,
                monthly:monthly.length,
                allRead:allRead.length,
                todayRead:todayRead.length,
                monthlyRead:monthlyRead.length,
                other:other.length

            })

            dispatch({ type: 'Request_Loaded', payload: sortedRequests });
            setShowRequests(requests);
            setFilteredRequests({
                allRequests:requests,
                floodRequests:flood,
                tsunamiRequests: tsunami,
                fireRequests: fire,
                extremeWindRequests: extremeWind,
                landslideRequests:landslide,
                verifiedRequests:verified,
                todayRequests:today,
                monthlyRequests:monthly,
                otherRequests:other,
                allReadRequests:allRead,
                todayReadRequests:todayRead,
                monthlyReadRequests:monthlyRead

            });
        });

    },   
    []);

    const handleCardClick = async (request) => {
        const updatedRequest = { ...request, read: true };
        setSelectedRequest(updatedRequest);
        await axios.put(`http://localhost:5000/api/requests/updateRequest/${request.requestID}`, updatedRequest);
        const updatedRequests = await getRequests();
        setShowRequests(updatedRequests);
        console.log("Updated Request:", updatedRequest.read);
    };

    const handleTag = (tag) => {
        if(tag == "all"){
            setShowRequests(filteredRequests.allRequests);
        }else if(tag === "flood"){
            setShowRequests(filteredRequests.floodRequests);
        }else if(tag === "tsunami"){
            setShowRequests(filteredRequests.tsunamiRequests);
        }else if(tag === "fire"){
            setShowRequests(filteredRequests.fireRequests);
        }else if(tag === "extreme wind"){
            setShowRequests(filteredRequests.extremeWindRequests);
        }else if(tag === "landslide"){
            setShowRequests(filteredRequests.landslideRequests);
        }else if(tag === "verified"){
            setShowRequests(filteredRequests.verifiedRequests);
        }else if(tag === "today"){
            setShowRequests(filteredRequests.todayRequests);
        }else if(tag === "monthly"){
            setShowRequests(filteredRequests.monthlyRequests);
        }else if(tag === "read"){
            setShowRequests(filteredRequests.allReadRequests);
        }else if(tag === "other"){
            setShowRequests(filteredRequests.otherRequests);
        }
        else{
            message.info("Not Such requests");
            return [];
        }
    }
    

    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
                <div className="flex flex-wrap gap-0 items-center relative bg-[#dbdbdb] justify-center w-full h-full">
                    <h1 className="flex justify-center text-[2rem] font-serif h-[50px] text-ControllerPrim">Details on Requests</h1>
                    <div className="flex justify-center items-center w-full h-full flex-wrap">
                        <RequestsDetails 
                            flood={filteredRequests.floodRequests}
                            tsunami={filteredRequests.tsunamiRequests}
                            fire={filteredRequests.fireRequests}
                            wind={filteredRequests.extremeWindRequests}
                            other={filteredRequests.otherRequests}
                            all={filteredRequests.allRequests}
                            today={filteredRequests.todayRequests}
                            monthly={filteredRequests.monthlyRequests}
                            todayRead={filteredRequests.todayReadRequests}
                            monthlyRead={filteredRequests.monthlyReadRequests}
                            allRead={filteredRequests.allReadRequests}
                           
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-wrap gap-0  relative w-full mt-5 h-full ">
                    <h1 className="flex text-[2rem] font-serif m-10 h-[20%] font-bold text-ControllerPrim">Requests</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                    {selectedRequest? (              
                        <div>
                            <div>
                            <WindowComponent 
                                requestID={selectedRequest.requestID}
                                requesterName={selectedRequest.requesterName}
                                disasterLocation={selectedRequest.disasterLocation}
                                disasterType={selectedRequest.disasterType}
                                affectedCount={selectedRequest.affectedCount}
                                medicalNeed={selectedRequest.medicalNeed} 
                                otherNeeds={selectedRequest.otherNeeds}
                            />
                            </div>
                        </div>
                        ) : (
                         <div >
                            <div className="grid grid-cols-11 lg:grid-cols-11 md:grid-cols-5 sm:grid-cols-2 flex-row justify-center items-center my-3 mx-10"> 
                                <Tag className=" w-30 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-2xl cursor-pointer" onClick={() => handleTag("all")} >All </Tag>  
                                <Tag className=" w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-2xl cursor-pointer" onClick={() => handleTag("flood")} >Flood </Tag>
                                <Tag className=" w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[#ffffff] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("tsunami")} >Tsunami</Tag>
                                <Tag className=" w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("extreme wind")}>Extreme Wind</Tag>
                                <Tag className=" w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("fire")}>Fire</Tag>
                                <Tag className=" w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("landslide")}>Landslide</Tag>
                                <Tag className=" w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("other")}>Other</Tag>
                                <Tag className="w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("today")}>Today</Tag>
                                <Tag className="w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("monthly")}>Monthly</Tag>
                                <Tag className="w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("verified")}>Verified</Tag>
                                <Tag className="w-30 h-8 bg-[#919192] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer" onClick={() => handleTag("read")}>Read</Tag>
                            </div>
                            <div className="max-h-[500px] overflow-auto mx-10">
                                
                                {Array.isArray(showRequests) &&
                                        showRequests.map((request) => (
                                    <div 
                                    key={request.requestID}
                                    className="flex justify-center items-center bg-[white] w-full flex-wrap cursor-pointer"
                                    onClick={() => handleCardClick(request)}
                                    >
                                    <Card_Requests
                                    d_type={request.disasterType}
                                    verification={"verified"}
                                    time={request.requestTime.split(' ')[0]}
                                    date={request.requestDate}
                                    location={request.disasterLocation}
                                    affectedPeople={request.affectedCount}
                                    />
                                </div>
                                ))}
                            </div>
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