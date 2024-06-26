import React, { useEffect, useState } from "react";
import { AnalysisCard } from "./Users_AnalysisCard";
import { getAllUsers } from "../../../services/userService";
import CircularIndeterminate from "../../Common/LoadingCircular";

const exData = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
  ];

export const UsersAnalysis = () => {

    const [allData, setAllData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [newUsers, setNewUsers] = useState([]);

    useEffect ( () => {
        const fetchUserData = async () => {
            try{
                const data = await getAllUsers();
                setAllData(data);
                const groupedData = data.reduce((acc,user) => {
                    const department = user.department;
        
                    if (department !== 'None') {
                        acc[department] = (acc[department] || 0) + 1;
                      }
        
                    return acc;
                },{})
                const newDataArray = Object.keys(groupedData).map((department) => ({
                    label: department,
                    value: groupedData[department],
                }));
                setNewData(newDataArray);
        
            } catch (error) {
                console.error("Data not found");
            }
        };
        fetchUserData();
    },[]);

    useEffect(()=>{
        if(allData != null){
            const today = new Date();
            let nUser = 0, nAdmin = 0;
            for(const us of allData){
                const diff = today - new Date(us.createdAt);
                if(diff/(1000*60*60*24) < 7 ){
                    if(us.accessLevel == 1){
                        console.log(us.userName);
                        nUser++;
                    }else{
                        nAdmin++;
                    }
                }
            }

            setNewUsers([
                {label: "Users", value: nUser},
                {label: "Admins", value: nAdmin},
            ]);
        }
    },[allData])

    useEffect(()=> {
        if(newData.length != 0) console.log("newData:",newData);
    },[newData]);

    return(
        <div className="flex flex-row space-x-3 justify-center bg-grey p-2 mt-1">
            {/* {
                AnalysisCard("Users By District","Each Users divided by districts",exData)
            } */}
            {
                AnalysisCard("New users and admin registration","Newly registered users and appointed admins",newUsers)
            }
            {
                AnalysisCard("Admins by department","Each admins divided by departments shown below", newData)
            }
        </div>
    )
}