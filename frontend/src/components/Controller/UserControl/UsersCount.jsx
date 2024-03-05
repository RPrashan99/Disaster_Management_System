import React from "react";
import { Card_Status } from "../../Common/Card_Status";
import { CountCard } from "./Users_CountCard";

export const UserCount = (activeUsersDate,DisctrictUsersDate, activeAdminsDate, DisctrictAdminDate) => {
    return(
        <div className="flex flex-col bg-grey">

            <div className="flex justify-center bg-grey border bg-white mt-3 mx-5">
                <span className="flex justify-center text-[25px] font-bold">Users Status</span>
            </div>

            <div className="flex flex-row-4 justify-around items-center p-5">
                <div className="flex flex-col space-y-5">
                    {Card_Status("Active Users", `Last updated : ${activeUsersDate}`)}
                    {Card_Status("District Coverage", `Last updated : ${DisctrictUsersDate}`)}
                </div>

                {
                    CountCard("USERS", "Total Users Count")
                }
                {
                    CountCard("ADMINS", "Total Admins Count")
                }

                <div className="flex flex-col space-y-5">
                    {Card_Status("Active Admins", `Last updated : ${activeAdminsDate}`)}
                    {Card_Status("District Coverage", `Last updated : ${DisctrictAdminDate}`)}
                </div>
            </div>

        </div>
    )
}