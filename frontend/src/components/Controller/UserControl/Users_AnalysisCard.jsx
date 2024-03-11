import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from "@mui/material";

export const AnalysisCard = (title, description) => {
    return(
        <div className="flex flex-col justify-around border rounded-lg bg-white items-center p-2 w-full">
            <div className="text-[25px] font-bold">{title}</div>
            <div className="text-[15px]">{description}</div>

            <Box>
                <PieChart
                series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
                width={400}
                height={200}
                />
            </Box>
        </div>
    )
}