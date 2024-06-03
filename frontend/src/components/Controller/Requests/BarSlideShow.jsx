import React, { useState, useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import PropTypes from "prop-types";
import { BackButton } from '../../Common/BackButton';
import { NextButton } from '../../Common/NextButton';
//import LocationCategorizer from './LocationCategorizer';
import { BarChart as ReBarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';
import { getProvince } from '../../../services/mapsServices';
import { FaBlackTie } from 'react-icons/fa';
import { Fa2 } from 'react-icons/fa6';

// Assume your BarChart component is imported here


  export const BarSlideShow = ({req}) => {
    const [currentMonth, setCurrentMonth] = useState(0); // Index of current month dataset
    //const dataset =[];
    const [dataset, setDataset] = useState([]);
    const months = [ "March","April", "May"];
    const provinces =["Colombo", "Rathnapura","Galle","Kottawa"];
    // const provinces =["Western Province", "Southern Province", "Sabaragamuwa Province"];
    const newDataset = [];
    
    
    useEffect(() => {
      const fetchData = async () => {
        for(let j=0;j<months.length;j++){
          const monthlyReq = req.filter(request => (((new Date(request.requestDate)).toLocaleString('en-US', { month: 'long' })) === months[j]));
          const provinceDataset = [];
          for(let k=0;k<provinces.length;k++){
              
            const provReq = monthlyReq.filter(request => (request.disasterLocation) === provinces[k]);

            //  const provReq = monthlyReq.filter(async(request) => {await getProvince(request.disasterLocation) === provinces[k]});
            // const provReq = await Promise.all(monthlyReq.map(async (request) => {
            //   if (await getProvince(request.disasterLocation) === provinces[k]) {
            //       return request;
            //   }
            // }));
            
              console.log("provReq: ",provReq);
              const provinceData ={
                  province:provinces[k],
                  flood:provReq.filter(request => request.disasterType.toLowerCase().includes("flood") ).length,
                  tsunami:provReq.filter(request => request.disasterType.toLowerCase().includes("tsunami") ).length,
                  landslide:provReq.filter(request => request.disasterType.toLowerCase().includes("landslide") ).length,
                  wind:provReq.filter(request => request.disasterType.toLowerCase().includes("wind") ).length,
                  fire:provReq.filter(request => request.disasterType.toLowerCase().includes("fire") ).length,
              };
            provinceDataset.push(provinceData);
          }
          newDataset.push(provinceDataset);
        }
        setDataset(newDataset);
      };
      fetchData(); 
      }, 
    [req]);

    const ResponsiveBarChart = ({ data }) => (
      <ResponsiveContainer  height={400}>
        <ReBarChart data={data}>
          <XAxis dataKey="province" stroke="white" onMouseOver={{backgroundColor:'black'}} />
          <YAxis stroke="white" />
          <Tooltip  
            wrapperStyle={{backgroundColor:'black'}}
            contentStyle={{ backgroundColor: 'gray', color: 'white' , fontSize:"1.5rem"}}
            itemStyle={{ color: 'white', fontSize:"1rem" }}
            cursorStyle={{backgroundColor:'blue'}}
          />
          <Legend fill='black'/>
          <Bar dataKey="tsunami" fill='Cyan' />
          <Bar dataKey="flood" fill='RoyalBlue'/>
          <Bar dataKey="landslide" fill='MediumSpringGreen'/>
          <Bar dataKey="wind" fill='Azure' />
          <Bar dataKey="fire" fill='MediumOrchid'/>
          
        </ReBarChart>
      </ResponsiveContainer>
    );
 
    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentMonth(prevMonth => (prevMonth + 1) % dataset.length);
      }, 5000);

      return () => clearInterval(interval);
  },);

    const handlePrev = () => {
        setCurrentMonth(prevMonth => (prevMonth - 1 + dataset.length) % dataset.length);
    };

    const handleNext = () => {
        setCurrentMonth(prevMonth => (prevMonth + 1) % dataset.length);
    };
    
    
    return (
        <div className='flex w-full'>
            {/* Render your BarChart component using datasets[currentMonth] */}
            <div className='grid grid-cols-1 w-[100%] justify-center items-center m-10'>
                <div className='flex flex-row relative items-center justify-between m-10'>
                    <BackButton header={"Prev"} onClick={handlePrev} size="sm" />
                    <NextButton header={"Next"} onClick={handleNext} size="sm"/>
                    
                </div>
                <div className='flex flex-col text-[white]  bg-userBlue border-[1rem] border-gray-400 shadow-lg justify-center'>
                    <h1 className='flex justify-center top-0 font-bold font-serif my-5 text-[2.3rem]'>Disaster Forcast of &nbsp;<span className=' text-ControllerSec'> {months[currentMonth]}</span></h1>
                    <ResponsiveBarChart data={dataset[currentMonth]} />
                </div>
             </div>
                   
        </div>
    );
};

BarSlideShow.propTypes = {
  req: PropTypes.array.isRequired, 
};