import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import Donation from "../../assets/DonationPage/home.png";
import { Button } from "flowbite-react";
import Overview from "../../Components/Donation/Overview";
import Donation_Statics from "../../Components/Donation/Statics"

const Donations = () => {
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-10 ">

        {/* Section 1 */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-3/5 mx-auto">
              <h2 className="text-5xl text-black font-semibold mb-4 md:w-4/5 my-5">
                Making a donation for your brothers and sisters.
              </h2>
              <a href="#">
                <button className="bg-primary text-white font-semibold py-2 px-7 transition-all duration-300 rounded  hover:-translate-y-4 my-10">
                  Donate Now
                </button>
                {/* <Button gradientMonochrome="info">Donate Now</Button> */}
              </a>
            </div>
            <div>
              <img src={Donation} alt="" className="w-100" />
            </div>
          </div>
        </div>

        {/* Section 2  */}
        <Overview/>

        {/* Section 3 */}
        <Donation_Statics/>
        <Footer />
      </div>
    </>
  );
};

export default Donations;
