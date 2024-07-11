import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { Footer } from "../../components/Controller/Footer"

export const DonationsPage = () =>{
    return (
        <div>
            <LanguageBar/>
            <HeaderBar/>
            <div className=" h-60 w-full">
                <p className="flex text-[2rem] items-center justify-center">Donation Page</p>
            </div>
            <Footer />
        </div>
    );
}