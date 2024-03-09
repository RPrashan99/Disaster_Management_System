import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { NewsPreview } from "../../components/Controller/News/NewsPreview";

export const NewsCreatorPage = () =>{
    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
            <div className="flex relative w-full bg-ControllerPrim mt-5 h-[500px]">
                    <NewsPreview/>
            </div>
        </div>

    )
}