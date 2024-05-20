import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { Footer } from "../../components/Controller/Footer"
import { NewsPreview } from "../../components/Controller/News/NewsPreview";

export const NewsCreatorPage = () =>{
    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
            <NewsPreview/>
            <Footer />
        </div>
    );
}
