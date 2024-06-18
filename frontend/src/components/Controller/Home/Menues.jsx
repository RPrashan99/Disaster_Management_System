import React from "react";

export const Menues = () => {
  const service = [
    {
      id: 1,
      title: "Family Emergency Plans",
      description: "Tool to create plans during the Emergency.",
      image: "/controller/Full Family.png",
      url: "/controller/home"
    },
    {
      id: 2,
      title: "Volunteering",
      description:
        "Give your support  to the people in need during Emergencies.",
      image: "/controller/Volunteering.png",
      url: "/controller/volunteering"
    },
    {
      id: 3,
      title: "Emergency Contacts",
      description:
        "Discover essential contact info for any disaster. Be ready, stay vigilant.",
      image: "/controller/Light On.png",
      url: "/controller/ContactInfoAdder"
    },
    {
      id: 4,
      title: "Donation",
      description:
        "Contribute today to support disaster relief efforts, helping communities rebuild and thrive. ",
      image: "/controller/Donation.png",
      url: "/controller/news"
    },
    {
      id: 5,
      title: "Evacuation Routes",
      description: "Guides until you reach a safe place.",
      image: "/controller/Exit Sign.png",
      url: "/news"
    },
    {
      id: 6,
      title: "Requests",
      description:
        "Provides information on situation you are facing.Then you can obtain a help.",
      image: "/controller/New Message.png",
      url: "/controller/requests"
    },
    {
      id: 7,
      title: "News",
      description:
        "Be aware on things hapenning in the environment around you.",
      image: "/controller/News.png",
      url: "/controller/news"
    },
    {
      id: 8,
      title: "Shelter Information",
      description: "Find a safe place until disaster goes away. ",
      image: "/controller/Majlis Tent.png",
      url: "/controller/shelters"
    }
  ];

  return (
    <div className="mt-10 grid group w-[80%] md:h-[100%] sm:h-[100%] justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto my-10 px-2 grid-cols-1  md:w-11/18 gap-0">
      {service.map(service =>
        <a
          key={service.id}
          href={service.url}
          className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80
                   hover:-translate-y-5 rounded-md cursor-pointer group-hover:scale-[0.85] hover:scale-100 
                   hover:bg-[#4d4c4c] text-[black] hover:text-[#e9e8e8] transition-all duration-300 flex items-center justify-center h-full 
                   bg-[#ffffff] shadow-xl hover:rounded-[20px] shadow-[gray] hover:border-b-[1rem] hover:border-ControllerSec"
        >
          <div className="flex flex-col justify-center align-middle self-center">
            <div className="flex relative justify-center align-middle self-center p-2 h-16 w-16 bg-ControllerSec shadow-lg hover:shadow-ControllerSec rounded-[50%] ">
              <img
                src={service.image}
                alt=""
                className="flex text-inherit self-center rounded-[10%] "
              />
            </div>
            <h4 className=" text-[1.5rem] font-bold  mb-2 px-2 rounded hover:text-[#ffffff]">
              {service.title}
            </h4>
            <p className="text-sm  font-serif font-bold hover:text-[#ffffff] ">
              {service.description}
            </p>
          </div>
        </a>
      )}
    </div>
  );
};
