import React, { useState, useEffect} from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { RequestsDetails } from "../../components/Controller/Requests/RequestsDetails";
import { Footer } from "../../components/Controller/Footer"
import { Card_Requests } from "../../components/Controller/Requests/Card_Requests";
import { BarChart } from '@mui/x-charts/BarChart';


export const Requests = () =>{
    const [requests, setRequests] = useState([]);


    useEffect(() => {
        const fetchRequests = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/requests/requests');
            const data = await response.json();
            setRequests(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchRequests();
    }, [requests]);

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
                <div className="flex flex-wrap gap-0  relative w-full mt-5 h-full ">
                    <h1 className="flex text-[2rem] font-serif m-10 h-[20%] text-ControllerPrim">Requests</h1>
                    <div className="flex justify-center items-center mx-10 bg-[white] max-h-[500px] h-[80%] w-full overflow-auto flex-wrap">
                        {/* {requests.map((request) => 
                            <Card_Requests
                                key={request.id}
                                imageUrl={request.imageUrl}
                                d_type={request.d_type}
                                severity={request.severity}
                                time={request.time}
                                date={request.date}
                                location={request.location}
                                affectedPeople={request.affectedPeople}                           
                            />
                        )} */}
                        {Card_Requests({imageUrl:"../controller/flood.png", d_type:"flood", severity:"Dangerous", time:"10:30 p.m", date:"20/01/2024" , location:"Ratnapura", affectedPeople:"Affected: 120"})}
                        {Card_Requests({imageUrl:"../controller/Fire.png", d_type:"Fire", severity:"Managable", time:"11:45 a.m", date:"20/01/2024" , location:"Sewanagala", affectedPeople:"Affected: 20"})}
                        {Card_Requests({imageUrl:"../controller/extremewind.png", d_type:"Extreme wind", severity:"Dangerous", time:"4.50 a.m", date:"20/01/2024" , location:"Hambanthota", affectedPeople:"Affected: 100"})}
                        {Card_Requests({imageUrl:"../controller/tsunami.png", d_type:"Tsunami", severity:"Dangerous", time:"10:30 p.m", date:"20/01/2024" , location:"Kalutara", affectedPeople:"Affected: 1290"})}
                        {Card_Requests({imageUrl:"../controller/LandSlide.png", d_type:"Land Slide", severity:"Dangerous", time:"10:30 p.m", date:"20/01/2024" , location:"Kandy", affectedPeople:"Affected: 13"})}
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
                    {/* <img src="../controller/chart.png" alt="chart" className="w-[70%] h-full m-10 rounded-lg shadow-2xl shadow-[#2c2c2c]"/> */}
                </div>
            <Footer/>
        </div>
    )
}