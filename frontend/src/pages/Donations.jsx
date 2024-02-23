import React from "react";
import Donation from "../assets/donations/donation_home.png";
import LanguageBar from "../components/Common/LanguageBar";
import NavBar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Overview from "../components/Donations/overview_pastevent";

const Donations = () => {
  return (
    <div>
      <LanguageBar />
      <NavBar />

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-5xl text-black font-semibold mb-4 md:w-4/5 my-5">
              Making a donation for your brothers and sisters.
            </h2>

            <button className="btn-primary my-10">Donate Now</button>
          </div>
          <div>
            <img src={Donation} alt="" className="w-100" />
          </div>
        </div>
      </div>

    <Overview/>
    
    <Footer/>
    </div>
  );
};

export default Donations;
