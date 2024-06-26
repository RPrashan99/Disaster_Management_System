import React from "react";
import MainNav from "../../Components/Commen/Header/MainNav";
import Footer from "../../Components/Commen/Footer/Footer";
import { Button, Card } from "flowbite-react";
import tsunami from "../../assets/Informations/tsunami.jpg";
import Fire from "../../assets/Informations/Fire.jpg";
import Flood from "../../assets/Informations/Flood.jpg";

const Informations = () => {
  const information_list = [
    {
      image: tsunami,
      title: "Tsunami",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: Flood,
      title: "Flood",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: Fire,
      title: "Fire",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: tsunami,
      title: "Tsunami",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  return (
    <>
      <MainNav />

      <div className="pt-40 mt-6">
        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {information_list.map((item) => (
              <Card className="max-w-sm mb-5">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-0">
                  <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <Button className="text-base">Read More..</Button>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Informations;
