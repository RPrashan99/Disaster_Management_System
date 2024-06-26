import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import Banner from "../../assets/SafetyTips/Banner.png";

const SafetyTips = () => {
  return (
    <>
      <MainNav />

      <div className="pt-40 mt-6">

        {/* Main Banner */}
        <div className="relative">
          <div className="md:h-[70vh] w-full">
            <img src={Banner} alt="" className=" h-full w-full object-cover" />
          </div>

          <div className="absolute md:bottom-5 md:left-10 bottom-2 left-5">
            <h1 className="text-lg sm:text-3xl md:text-5xl text-bold font-bold leading-12 italic">
              Your Safety is
              <br /> Our Priority
            </h1>
          </div>
        </div>


        <div>Other Tips</div>

        <Footer />
      </div>
    </>
  );
};

export default SafetyTips;
