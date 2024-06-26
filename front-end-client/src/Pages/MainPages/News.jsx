import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import { AiOutlineSearch } from "react-icons/ai";
import { TextInput } from "flowbite-react";
import Footer from "../../Components/Commen/Footer/Footer";
import NewsItems from "../../Components/News/NewsItems";

const News = () => {
  return (
    <>
      <MainNav />
      <div className="pt-40 mt-6">
        {/* Breaking News */}
        <div className="relative w-full h-8  top-5 px-5 mb-10">
          <div className="flex bg-red-600 items-center">
            <div className="md:w-1/8 w-1/10 bg-white h-full  p-0 items-center flex justify-center m-2">
              <h1 className="font-bold px-3 md:text-lg text-sm text-red-600 shadow-lg">
                Breaking News
              </h1>
            </div>
            <div className="items-center flex justify-center px-3">
              <p
                className="text-sm text-white overflow-hidden "
                style={{ maxHeight: "1.5em" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                animi repellendus reiciendis, aperiam ut iure{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form className="px-5 md:px-20 mt-20 hidden sm:block">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            
          />
        </form>

        {/* News Section */}
        <NewsItems/>


        <Footer/>


      </div>
    </>
  );
};

export default News;
