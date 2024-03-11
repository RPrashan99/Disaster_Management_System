import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { Footer } from "../../components/Controller/Footer"
import { NewsPreview } from "../../components/Controller/News/NewsPreview";
import { NewsCreatorForm } from "../../Forms/Controller/NewsCreatorForm"

export const NewsCreatorPage = () =>{
    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
            <NewsPreview/>
            <NewsCreatorForm/> 
            <Footer />
        </div>
    );
}


