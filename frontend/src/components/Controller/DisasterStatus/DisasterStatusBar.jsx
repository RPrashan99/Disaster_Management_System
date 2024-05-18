import React, { useEffect, useState } from "react"
import { PieChart } from '@mui/x-charts/PieChart';
import { getSeverity } from "../../../services/reportService";

const exData = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
  ];

const dateSevenDaysAgo = new Date();
dateSevenDaysAgo.setDate(dateSevenDaysAgo.getDate()-7);

export const DisasterStatusBar = (props) => {

    const {reports, currentReports} = props;

    const [newData, setNewData] = useState(exData);
    const [newCurrentData, setNewCurrentData] = useState(exData);
    const [affected, setAffected] = useState('');
    const [severityIsland, setSeverityIsland] = useState('');
    const [newReportCount, setNewReportCount] = useState('');

    const newReportsCount = (reports) => {
        const filteredByDate = reports.filter(report => {
            const reportCreatedDate = new Date(report.createdDate);
            return reportCreatedDate >= dateSevenDaysAgo;
        });
        return filteredByDate.length;
    };

    useEffect(() => {
        const getSeverityData = async() =>{
            const severityData = await getSeverity();
            setSeverityIsland(severityData[0]);
        };
        getSeverityData();
        console.log("Severity Data: ", severityIsland._id);
    },[currentReports])

    useEffect(() =>{
        if(reports.length != 0){
            const groupedData = reports.reduce((acc,disaster) => {
                const type = disaster.disasterType;
    
                if (type !== 'None') {
                    acc[type] = (acc[type] || 0) + 1;
                  }
    
                return acc;
            },{})
            const newDataArray = Object.keys(groupedData).map((type) => ({
                label: type,
                value: groupedData[type],
            }));
            setNewData(newDataArray);
        }
    },[reports])

    useEffect(() =>{
        if(currentReports){
            setNewCurrentData(currentReports);

            if(newCurrentData) {
                const count = newCurrentData.reduce((total, disaster) => {
                    return total + disaster.affectedCount;
                },0);

                setAffected(count);
                setNewReportCount(newReportsCount(newCurrentData));
            }
        }

    },[currentReports])

    return(
        <div className="flex flex-row bg-menuBlue px-5 py-1 justify-center h-full space-x-10">
            <div className="flex flex-row bg-white rounded w-[680px] h-[250px] items-center">
                <div className="flex flex-col rounded h-full justify-center">
                    <div className="flex flex-col items-center ps-5 h-full">
                        <div className="flex flex-col">
                            <span className="flex text-black text-[22px] font-bold">Disaster by type</span>
                            <span className="flex text-barContentLow px-2 w-[420px]">Each Disaster report grouped by disaster type</span>
                        </div>
                        <div className="flex w-full pt-2">
                            <PieChart
                                    series={[
                                    {
                                        paddingAngle: 2,
                                        innerRadius: 60,
                                        outerRadius: 80,
                                        data: newData,
                                    },
                                    ]}
                                    margin={{ bottom: 20 }}
                                    width={380}
                                    height={180}
                                    slotProps={{
                                        legend: { hidden: false},
                                    }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 p-5 pb-0 border-s-2 h-full justify-around">
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col justify-center items-center me-5">
                            <span className="flex text-black text-[40px] font-bold">{reports.length}</span>
                            <span className="flex text-black-[15px]">Total Disasters</span>
                        </div>
                        <img className="flex w-14 h-14" src="/controller/reports_icon.png" alt="Reports_Icon"/>
                    </div>
                    {
                        newReportCount != 0 && 
                        <div className="flex items-center gap-5 px-2">
                            <img className="flex ps-1" src="/controller/plus_icon.png"/>
                            <span className="flex text-barContentLow text-[15px] text-left">{newReportCount} new Reports added within 7 days</span>
                        </div>
                    }
                    <span className="flex text-grey pt-3">Last updated 1min ago</span>
                </div>
            </div>
            <div className="flex flex-row bg-white rounded border w-[600px] h-[250px]">
                <div className="flex flex-col items-center justify-center w-4/5">
                <div className="w-[120px] h-[120px] border-[10px] border-mapRed font-mono rounded-full justify-center font-bold text-[50px] text-center py-3">{newCurrentData.length}</div>
                    <div className="flex">Ongoing Disasters</div>
                </div>
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <div className="flex flex-col items-center justify-center border w-full h-full">
                        <div className="flex flex-row justify-center items-center">
                            <div className="flex text-black text-[25px] w-[100px]">{affected}</div>
                            <img className="flex w-5 h-5" src="../controller/people_icon.png" alt="People_Icon"/>
                        </div>
                        <div className="flex">Current Affected Count</div>
                    </div>
                    <div className="flex flex-col p-5 w-full h-full border space-y-2">
                        <div className="flex w-fit font-bold text-[18px]">Island Wide Severity</div>
                        <div className={`flex text-[25px] justify-center ${severityIsland._id == 'Low' ? 'text-sevLow': severityIsland._id == 'Medium' ? 'text-sevMedium' :'text-sevHigh'}`}>{severityIsland._id}</div>
                        <div className="flex w-fit ml-auto">Elevated two hours ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}