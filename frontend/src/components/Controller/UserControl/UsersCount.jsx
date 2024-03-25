import React, { useEffect, useState } from "react";
import { Card_Status } from "../../Common/Card_Status";
import { CountCard } from "./Users_CountCard";
import { getAllUsers } from "../../../services/userService";

export const UserCount = (activeUsersDate,DisctrictUsersDate, activeAdminsDate, DisctrictAdminDate) => {

    const [newData, setNewData] = useState('');

    useEffect ( () => {
        const fetchUserData = async () => {
            try{
                const data = await getAllUsers();
        
                const groupedData = data.reduce((acc,user) => {
                    const accessLevel = user.accessLevel;
        
                    if(acc[accessLevel]){
                        acc[accessLevel].count++;
                    } else {
                        acc[accessLevel] = {
                            accessLevel,
                            count: 1,
                        };
                    }
        
                    return acc;
                },{})
                setNewData(groupedData);
        
            } catch (error) {
                console.error("Data not found");
            }
        };
        fetchUserData();
    },[]);

    useEffect(()=> {
        if(newData.length != 0) console.log("newData:",newData);
    },[newData]);

    return(
        <div className="flex flex-col bg-grey">

            <div className="flex justify-center bg-grey border bg-white mt-3 mx-5">
                <span className="flex justify-center text-[25px] font-bold font-Inter">Users Status</span>
            </div>

            <div className="flex flex-row-4 justify-around items-center p-5">
                <div className="flex flex-col space-y-5">
                    {Card_Status("Active Users", `Last updated : ${activeUsersDate}`)}
                    {Card_Status("District Coverage", `Last updated : ${DisctrictUsersDate}`)}
                </div>

                {
                    CountCard("USERS", "Total Users Count",3,newData)
                }
                {
                    CountCard("ADMINS", "Total Admins Count",1, newData)
                }

                <div className="flex flex-col space-y-5">
                    {Card_Status("Active Admins", `Last updated : ${activeAdminsDate}`)}
                    {Card_Status("District Coverage", `Last updated : ${DisctrictAdminDate}`)}
                </div>
            </div>

        </div>
    )
}