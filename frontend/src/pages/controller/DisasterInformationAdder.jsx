import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { Footer } from "../../components/Controller/Footer"
import { DisasterInformationPreview } from "../../components/Controller/DisasterInformation/DisasterInformationPreview";

export const DisasterInformationAdder = () =>{
    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
            <DisasterInformationPreview/>
            <Footer />
        </div>
    );
}
