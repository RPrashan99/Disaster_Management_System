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
        <div className="flex flex-col justify-around border rounded-lg bg-white items-center p-2 w-full">
            <div className="text-[25px] font-bold">{title}</div>
            <div className="text-[15px]">{description}</div>

            <Box>
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
            </Box>
        </div>
    )
}