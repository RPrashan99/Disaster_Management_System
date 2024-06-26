import React, { useEffect, useState } from "react";
import { Card_Status } from "../../Common/Card_Status";
import { CountCard } from "./Users_CountCard";
import { getAllUsers, getUserActive } from "../../../services/userService";

import io from 'socket.io-client';

export const UserCount = (activeUsersDate, DisctrictUsersDate, activeAdminsDate, DisctrictAdminDate) => {

    const [newData, setNewData] = useState('');
    const [allData, setAllData] = useState('');
    const [userActive, setUserActive] = useState({ "active": 10, "idle": 5 });
    const [adminActive, setadminActive] = useState({ "active": 10, "idle": 5 });

    const [userDistrict, setuserDistrict] = useState({ "active": 10, "idle": 5 });
    const [adminDistrict, setadminDistrict] = useState({ "active": 10, "idle": 5 });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // const data = await getAllUsers();
                // setAllData(data);

                const groupedData = allData.reduce((acc, user) => {
                    const accessLevel = user.accessLevel;

                    if (acc[accessLevel]) {
                        acc[accessLevel].count++;
                    } else {
                        acc[accessLevel] = {
                            accessLevel,
                            count: 1,
                        };
                    }

                    return acc;
                }, {})
                setNewData(groupedData);

            } catch (error) {
                console.error("Data not found");
            }
        };
        fetchUserData();
    }, [allData]);

    useEffect(() => {
        if (newData.length != 0) console.log("newData:", newData);
    }, [newData]);

    useEffect(() => {
        const getActiveDetails = async () => {
            const data = await getUserActive();
            const userData = { "active": data.activeUsers, "idle": data.totalUsers - data.activeUsers };
            const adminData = { "active": data.activeAdmins, "idle": data.totalAdmins - data.activeAdmins };

            setUserActive(userData);
            setadminActive(adminData);
        }

        getActiveDetails();
    }, [allData])

    useEffect(() => {
        const socket = io('http://localhost:5000');
        
        socket.on('userListUpdate', (updatedUserList) => {
            setAllData(updatedUserList);
        });

        return () => {
            socket.off('userListUpdate');
        };
    }, [])

    return (
        <div className="flex flex-col bg-grey">

            <div className="flex justify-center bg-grey border bg-white mt-3 mx-5">
                <span className="flex justify-center text-[25px] font-bold font-Inter">Users Status</span>
            </div>

            <div className="flex flex-row-4 justify-around md:space-x-1 items-center p-5">
                <div className="flex flex-col space-y-5">
                    {Card_Status("Active Users", `Last updated : ${activeUsersDate}`, userActive)}
                    {Card_Status("District Coverage", `Last updated : ${DisctrictUsersDate}`, userDistrict)}
                </div>

                {
                    CountCard("USERS", "Total Users Count", 3, newData)
                }
                {
                    CountCard("ADMINS", "Total Admins Count", 1, newData)
                }

                <div className="flex flex-col space-y-5">
                    {Card_Status("Active Admins", `Last updated : ${activeAdminsDate}`, adminActive)}
                    {Card_Status("District Coverage", `Last updated : ${DisctrictAdminDate}`, adminDistrict)}
                </div>
            </div>

        </div>
    )
}