import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import PropTypes from "prop-types";
import { BackButton } from '../../Common/BackButton';
import { NextButton } from '../../Common/NextButton';
// Assume your BarChart component is imported here

 const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
        color:'#ffebee'
      },
    ],
    height: 300,
    margine:2,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
        text: '2rem',
        font:'sans',
      },
      '.recharts-label': {
        fill: '#FFFFFF', // White color for other text elements in the chart
      },
    },
    
  };


  export const BarSlideShow = ({req}) => {
    const [currentMonth, setCurrentMonth] = useState(0); // Index of current month dataset
    const dataset =[];
    const months = [ "March","April", "May"];
    const provinces =["Kottawa", "Rathnapura","Galle"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMonth(prevMonth => (prevMonth + 1) % dataset.length); // Loop through datasets
        }, 5000); // Change slide every 5 seconds
        console.log("req:", req);
        return () => clearInterval(interval); // Clear interval on component 
        
       
    }, []);

    const handlePrev = () => {
        setCurrentMonth(prevMonth => (prevMonth - 1 + dataset.length) % dataset.length);
    };

    const handleNext = () => {
        setCurrentMonth(prevMonth => (prevMonth + 1) % dataset.length);
    };
    
    //const currentMonth = months[currentMonthIndex]

    for(let j=0;j<months.length;j++){
        const monthlyReq = req.filter(request => (((new Date(request.requestDate)).toLocaleString('en-US', { month: 'long' })) === months[j]));
        const provinceDataset = [];
        for(let k=0;k<provinces.length;k++){
            
          const provReq = monthlyReq.filter(request => (request.disasterLocation) === provinces[k]);
          //   const provReq = monthlyReq.filter(request => {
          //     const locationProvince = await LocationCategorizer({ location: request.disasterLocation });
          //     return locationProvince === provinces[k];
          // });
            console.log("prov", provReq);
            const provinceData ={
                province:provinces[k],
                flood:provReq.filter(request => request.disasterType.toLowerCase().includes("flood") ).length,
                tsunami:provReq.filter(request => request.disasterType.toLowerCase().includes("tsunami") ).length,
                landslide:provReq.filter(request => request.disasterType.toLowerCase().includes("landslide") ).length,
                wind:provReq.filter(request => request.disasterType.toLowerCase().includes("wind") ).length,
                fire:provReq.filter(request => request.disasterType.toLowerCase().includes("fire") ).length,
            };
            provinceDataset.push(provinceData);
            //console.log("provincedataset", provinceDataset);
        }
        dataset.push(provinceDataset);
        console.log("dataset", dataset);
    }

    return (
        <div>
            {/* Render your BarChart component using datasets[currentMonth] */}
            <div className='grid   justify-center items-center m-10'>
                <div className='flex flex-row relative overflow-hidden items-center justify-between m-10 w-100%'>
                    <BackButton header={"Prev"} onClick={handlePrev} size="sm" />
                    <NextButton header={"Next"} onClick={handleNext} size="sm"/>
                    
                </div>
                <div className='w-[100%] m-10 text-ControllerPrim shadow-lg justify-center'>
                    <h1 className='flex justify-center top-0 font-bold font-serif text-[2.3rem]'>Disaster Forcast of &nbsp;<span className=' text-secondary'> {months[currentMonth]}</span></h1>
                    <BarChart text={'white'}
                        dataset={dataset[currentMonth]}
                        xAxis={[{ scaleType: 'band', dataKey: 'province' }]}
                                  
                        series={[
                                { dataKey: 'tsunami', label: 'Tsunami'},
                                { dataKey: 'flood', label: 'Flood' },
                                { dataKey: 'landslide', label: 'Landslide'},
                                { dataKey: 'wind', label: 'Wind' },
                                { dataKey: 'fire', label: 'Fire' },
                                
                              ]}  
                               
                        {...chartSetting}
                                    
                        />
                </div>
             </div>
                   
        </div>
    );
}
BarSlideShow.propTypes = {
    req: PropTypes.array.isRequired, 
};