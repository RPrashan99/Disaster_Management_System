import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export const Card_Status = (title, cardText, data) => {
    return (
        <div className="flex flex-row border rounded-lg bg-white md:w-[150px] lg:w-[220px] h-[75px] justify-around align-center shadow pe-2">
            <div className="flex flex-col justify-around h-full p-1">
                <div className="md:text-[13px] lg:text-[16px] font-bold">{title}</div>
                <div className="md:text-[8px] lg:text-[10px]">{cardText}</div>
            </div>
            <div className="flex items-center w-[60px]">
                <PieChart
                    colors={['#4172cc', '#bbbaba']}
                    series={[
                        {
                            data: [
                                { id: 0, value: data.active, label: `${data.active}` },
                                { id: 1, value: data.idle },
                            ],
                            outerRadius: 50,
                            innerRadius: 40,
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
        </div>
    )
}