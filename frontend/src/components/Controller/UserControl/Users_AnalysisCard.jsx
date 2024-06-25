import React, { useEffect, useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from "@mui/material";

const exData = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
  ];

export const AnalysisCard = (title, description, Data) => {

    const [chartData, setChartData] = useState(exData);

    useEffect(() => {
        setChartData(Data);
    },[Data]);

    useEffect(() => {  
        if(chartData) console.log("Chart Data:", Data);
    },[chartData])

    return(
        <div className="flex flex-col justify-around border rounded-lg bg-white items-center p-2 md:w-[250px] lg:w-[500px]">
            <div className="md:text-[18px] lg:text-[25px] font-bold">{title}</div>
            <div className="md:text-[12px] lg:text-[15px]">{description}</div>

            <div className="flex md:w-[280px] lg:w-[400px] justify-start">
                    <PieChart
                    series={[
                    {
                        paddingAngle: 5,
                        innerRadius: 60,
                        outerRadius: 80,
                        data: chartData,
                    },
                    ]}
                    margin={{ right: 10 }}
                    width={400}
                    height={200}
                    slotProps={{
                        legend: { hidden: false},
                    }}
                />
                </div>
        </div>
    )
}