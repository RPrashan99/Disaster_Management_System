import React from "react";
//import { ColorItem } from "../DisasterStatus/color_item";
import { PieChart } from "@mui/x-charts/PieChart";
import PropTypes from "prop-types";


export const RequestsDetails = ({flood,tsunami,fire,wind,other,today, monthly}) => {

  const monthlyflood = Array.isArray(monthly)
  ? flood.filter(eachFlood => {
      return eachFlood.requestDate.split(" ")[1] === new Date().toDateString().split(' ')[1];
    })
  : [];
  const monthlyTsunami = Array.isArray(tsunami)
  ? tsunami.filter(eachTsunami => {
      return eachTsunami.requestDate.split(" ")[1] === new Date().toDateString().split(' ')[1];
    })
  : [];
  const monthlyFire = Array.isArray(fire)
  ? fire.filter(eachFire => {
      return eachFire.requestDate.split(" ")[1] === new Date().toDateString().split(' ')[1];
    })
  : [];
  const monthlyWind = Array.isArray(wind)
  ? flood.filter(eachWind => {
      return eachWind.requestDate.split(" ")[1] === new Date().toDateString().split(' ')[1];
    })
  : [];
  const monthlyOther = Array.isArray(other)
  ? other.filter(eachOther => {
      return eachOther.requestDate.split(" ")[1] === new Date().toDateString().split(' ')[1];
    })
  : [];
  const todayflood = Array.isArray(monthly)
  ? flood.filter(eachFlood => {
      return eachFlood.requestDate.split(" ")[2] === new Date().toDateString().split(' ')[2];
    })
  : [];
  const todayTsunami = Array.isArray(tsunami)
  ? tsunami.filter(eachTsunami => {
      return eachTsunami.requestDate.split(" ")[2] === new Date().toDateString().split(' ')[2];
    })
  : [];
  const todayFire = Array.isArray(fire)
  ? fire.filter(eachFire => {
      return eachFire.requestDate.split(" ")[2] === new Date().toDateString().split(' ')[2];
    })
  : [];
  const todayWind = Array.isArray(wind)
  ? flood.filter(eachWind => {
      return eachWind.requestDate.split(" ")[2] === new Date().toDateString().split(' ')[2];
    })
  : [];
  const todayOther = Array.isArray(other)
  ? other.filter(eachOther => {
      return eachOther.requestDate.split(" ")[2] === new Date().toDateString().split(' ')[2];
    })
  : [];
  const monthlyRead = Array.isArray(monthly)
  ? monthly.filter(eachRequest => {
      return eachRequest.read === true;
    })
  : [];
  const monthlyNotRead = Array.isArray(monthly)
  ? monthly.filter(eachRequest => {
      return eachRequest.read === false;
    })
  : [];
  const todayRead = Array.isArray(today)
  ? today.filter(eachRequest => {
      return eachRequest.read === true;
    })
  : [];
  const todayNotRead = Array.isArray(today)
  ? today.filter(eachRequest => {
      return eachRequest.read === false;
    })
  : [];

  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 flex-wrap w-[90%] rounded-md bg-gray-500 justify-center mx-10 mb-10 space-x-2 h-full">
      <div className="flex flex-col bg-white rounded-lg border w-full h-full items-center my-1">
        <span className="flex text-ControllerPrim text-[24px] p-2 items-center w-full justify-center font-bold">Daily Forcast</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-0 rounded w-full">
          <div className="lg:col-start-1 lg:row-start-1 order-2 lg:order-none items-center justify-center gap-1 px-4 ">
            <div className="flex w-[100%] gap-5 rounded-md flex-row border-b-[3px] border-[#9c9c9c] shadow-lg px-3 pt-2">
            <span className="flex text-ControllerPrim font-sarif items-center justify-center text-[20px] font-bold">Read Requests</span>    
              <PieChart
                colors={['#4172cc', '#bbbaba']}
                series={[
                  {
                    data: [
                        { id: 0, value:todayRead.length, label: `${todayRead.length}`},
                        { id: 1, value:todayNotRead.length},
                      ],
                
                      outerRadius: 50,
                      innerRadius:40,
                      paddingAngle: 1,
                      cornerRadius: 5,
                      startAngle: 0,
                      endAngle: 360,
                      cx: 45,
                      cy: 45,
                      
                  },
                                                                                            
                ]}
                width={100}
                height={100}
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                segmentsShift={(index) => (index === 0 ? 2 : 0)}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'middle', horizontal: 'middle' },
                    padding: 0,
                    labelStyle: {
                      fontSize: 35,
                      fill: 'black',
                      fontWeight: 'bolder'
                    },
                    itemMarkWidth: 0,
                    itemMarkHeight: 0,
                  },                                    
                }}                       
              /> 
            </div>
            <div className="flex w-[100%] relative gap-5 rounded-md border-b-[3px] border-[#9c9c9c] shadow-xl flex-row px-3 py-1">
                <span className="flex text-ControllerPrim text-[16px] items-center justify-center font-bold">Accepted Requests</span>
                <img className=" flex" src="/controller/Circle1.png" alt="Analysis"/>
            </div>
          </div>
          <div className="lg:col-start-2 lg:row-start-1 order-1 lg:order-none justify-center mx-5 mb-3 rounded-md shadow-lg ">
            <div className="flex justify-center h-[65%] w-full bg-slate-200 ">
              {/* <img className="flex p-2 " src="/controller/NumofUsers.png" alt="Analysis"/> */}
              <div className=" w-28 h-28 border-[#cf3535] m-5 border-[8px] bg-[white] shadow-lg font-bold text-center text-[black] rounded-full text-[4rem]">{today.length}</div>
            </div>
            <div className="flex flex-col h-[35%] text-[black] w-full mt-1 items-center m-0 justify-center rounded-b-lg bg-ControllerSec">
              <span className="flex text-[14px] items-center  justify-center font-bold">Total Requests</span>
              <span className="flex text-[22px] items-center  justify-center font-bold">Today</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-3 pt-1 px-4 w-[95%] border-b-[5px] border-[#6d6d6d] shadow-md rounded-lg">
          <div className="flex flex-col w-[100%] justify-center items-center">
            <span className=" text-black text-[23px] font-bold justify-center items-center">Requests by Disaster Type</span>
            <span className="text-[15px] text-[#3f3838] justify-center items-center ">All confirmed requests are categorized by disaster type</span>
          </div>
          <div className="flex items-center justify-center w-[100%] h-[100%] px-1">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value:todayflood.length, label: 'Flood' },
                    { id: 1, value:todayTsunami.length,label: 'Tsunami'},
                    { id: 2, value:todayFire.length,label: 'Fire'},
                    { id: 3, value:todayWind.length, label: 'Extreme Wind'},
                    { id: 4, value:todayOther.length, label: 'Other'},
                  ],
                
                  outerRadius: 60,
                  innerRadius:50,
                  paddingAngle: 1,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx:60,
                  cy:100,
                    
                },
              ]}
              width={300}
              height={200}
                                  
            /> 
          </div>
        </div> 
      </div>
      <div className="flex flex-col bg-white rounded-lg border w-full h-full items-center my-1">
        <span className="flex text-ControllerPrim  p-2 text-[24px] items-center justify-center font-bold">Monthly Forcast</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-0 rounded w-full">
          <div className="lg:col-start-1 lg:row-start-1 order-1 lg:order-none justify-center mx-5 mb-3 rounded-md shadow-lg ">
            <div className="flex justify-center h-[65%] w-full bg-slate-200 ">
              {/* <img className="flex p-2 " src="/controller/NumofUsers.png" alt="Analysis"/> */}
              <div className=" w-28 h-28 bg-[white] m-5 border-[8px] border-[#cf3535] shadow-lg font-bold text-center text-[black] rounded-full text-[4rem]">
                {monthly.length}
              </div>
            </div>
            <div className="flex flex-col h-[35%] w-full mt-1 text-[black] items-center m-0 justify-center rounded-b-lg bg-mapGreen">
              <span className="flex text-[14px] items-center  justify-center font-bold">Total Requests</span>
              <span className="flex text-[22px] items-center  justify-center font-bold">{(new Date()).toLocaleString('default', { month: 'long' })}</span>
            </div>
          </div>
          <div className="lg:col-start-2 lg:row-start-1 order-2 lg:order-none items-center justify-center gap-1 px-4 ">
            <div className="flex w-[100%] gap-5 justify-between rounded-md flex-row border-b-[3px] border-[#9c9c9c] shadow-lg px-3 pt-2"> 
                <PieChart
                  colors={[  '#bbbaba', '#4172cc']}
                  series={[
                    {
                      data: [
                        { id: 0, value:monthlyNotRead.length},
                            { id: 1, value:monthlyRead.length, label: `${monthlyRead.length}`},
                        ],     
                        outerRadius: 50,
                        innerRadius:40,
                        paddingAngle: 1,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
                        cx: 45,
                        cy: 45,
                      },    
                    ]}
                    width={100}
                    height={100}
                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                    segmentsShift={(index) => (index === 0 ? 2 : 0)}
                    slotProps={{
                      legend: {
                        direction: 'row',
                        position: { vertical: 'middle', horizontal: 'middle' },
                        padding: 0,
                        labelStyle: {
                          fontSize: 35,
                          fill: 'black',
                          fontWeight: 'bolder'
                        },
                        itemMarkWidth: 0,
                        itemMarkHeight: 0,
                      },    
                    }}                     
                />
              <span className="flex text-ControllerPrim font-sarif items-center justify-center text-[20px] font-bold">Read Requests</span>       
            </div>
            <div className="flex w-[100%] gap-5 justify-between rounded-md border-b-[3px] border-[#9c9c9c] shadow-xl flex-row px-3 py-1">
              <img className="flex " src="/controller/Circle1.png" alt="Analysis"/>
              <span className="flex text-ControllerPrim text-[16px] items-center justify-center font-bold">Accepted Requests</span>
            </div>
          </div>   
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 justify-center pt-1 px-4 w-[95%] border-b-[5px] border-[#6d6d6d] shadow-md rounded-lg">
          <div className="flex flex-col m- text-wrap w-[100%] justify-center">
            <span className="flex text-black text-[23px] font-bold">Requests by Disaster Type</span>
            <span className="flex text-[15px] text-[#3f3838]">All confirmed requests are categorized by disaster type</span>
          </div>
          <div className="flex items-center justify-center w-[100%] h-[100%] px-1">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value:monthlyflood.length, label: 'Flood' },
                    { id: 1, value:monthlyTsunami.length,label: 'Tsunami'},
                        { id: 2, value:monthlyFire.length,label: 'Fire'},
                        { id: 3, value:monthlyWind.length, label: 'Extreme Wind'},
                        { id: 4, value:monthlyOther.length, label: 'Other'},
                  ],
                
                  outerRadius: 60,
                  innerRadius:50,
                  paddingAngle: 1,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx:60,
                  cy:100,
                      
                },
              ]}
              width={300}
              height={200}                
            /> 
          </div>
        </div>  
      </div>
    </div>
  );
}

RequestsDetails.propTypes = {
  all: PropTypes.array.isRequired,
  flood: PropTypes.array.isRequired, // Ensure 'flood' is an array
  tsunami: PropTypes.array.isRequired,
  fire: PropTypes.array.isRequired,
  wind: PropTypes.array.isRequired,
  other: PropTypes.array.isRequired,
  today: PropTypes.array.isRequired,
  monthly: PropTypes.array.isRequired,
  todayRead: PropTypes.array.isRequired,
  monthlyRead: PropTypes.array.isRequired,
  allRead: PropTypes.array.isRequired
};