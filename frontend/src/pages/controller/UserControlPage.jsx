import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { UserCount } from "../../components/Controller/UserControl/UsersCount";
import { UsersAnalysis } from "../../components/Controller/UserControl/Users_Analysis";
import { UsersAccess } from "../../components/Controller/UserControl/Users_Access";

export const UserControlPage = () => {
    return(
        <div>
            <LanguageBar/>
            <HeaderBar/>
            {
                UserCount("2024/02/15","2024/02/15","2024/02/15","2024/02/15")
            }
            <UsersAnalysis/>
            <UsersAccess/>
        </div>
    )
}
